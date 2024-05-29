export function isAndriod(): boolean {
  return /android/.test(navigator.userAgent.toLowerCase())
}

export function isIOS(): boolean {
  return /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())
}

export function isWechat(): boolean {
  return /micromessenger/.test(navigator.userAgent.toLowerCase())
}

export function isIE(): boolean {
  return /msie|trident/.test(navigator.userAgent.toLowerCase())
}

export function isChrome(): boolean {
  return /chrome\/\d+/.test(navigator.userAgent.toLowerCase())
}
