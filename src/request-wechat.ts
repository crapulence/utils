import qs from 'qs'
import { SERVER_URL } from './constants'

type Options = Omit<WechatMiniprogram.RequestOption, 'success' | 'fail'>

interface Response<T> {
  code: number
  data: T
  msg: string
}

function createRequest<T>(options: Options) {
  return new Promise<Response<T>>((resolve, reject) => {
    wx.request<Response<T>>({
      ...options,
      url: `${SERVER_URL}${options.url}`,
      header: {
        Authorization: wx.getStorageSync('token'),
      },
      success: (res) => {
        if (res.data.code === 0) {
          resolve(res.data)
        }
        else {
          if (res.data.code === 401) {
            wx.reLaunch({
              url: '/pages/login/index',
              fail: (err) => {
                // eslint-disable-next-line no-console
                console.log(err)
              },
            })
          }
          reject(res.data.msg)
        }
      },
      fail: (err) => {
        reject(err.errMsg)
      },
    })
  })
}

function get<T>(
  url: string,
  data?: Record<string, any>,
  options?: Partial<Options>,
) {
  return createRequest<T>({
    method: 'GET',
    url: `${url}?${qs.stringify(data, { arrayFormat: 'repeat' })}`,
    ...options,
  })
}

function post<T>(
  url: string,
  data?: Record<string, any>,
  options?: Partial<Options>,
) {
  return createRequest<T>({
    method: 'POST',
    url,
    data,
    ...options,
  })
}

function put<T>(
  url: string,
  data?: Record<string, any>,
  options?: Partial<Options>,
) {
  return createRequest<T>({
    method: 'PUT',
    url,
    data,
    ...options,
  })
}

function del<T>(
  url: string,
  data?: Record<string, any>,
  options?: Partial<Options>,
) {
  return createRequest<T>({
    method: 'DELETE',
    url: `${url}?${qs.stringify(data, { arrayFormat: 'repeat' })}`,
    ...options,
  })
}

export const request = {
  get,
  post,
  put,
  del,
}
