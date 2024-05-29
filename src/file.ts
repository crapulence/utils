export function getFileExtension(filename: string): string {
  return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2)
}

export type ResultType = 'dataUrl' | 'text' | 'file'
export function readFile(file: File, resultType: ResultType): Promise<string | null> {
  return new Promise((resolve, reject) => {
    if (resultType === 'file') {
      resolve(null)
      return
    }

    const reader = new FileReader()

    reader.onload = (event) => {
      const result = event.target?.result as string | null
      resolve(result)
    }

    reader.onerror = (error) => {
      reject(error)
    }

    if (resultType === 'dataUrl') {
      reader.readAsDataURL(file)
    }
    else if (resultType === 'text') {
      reader.readAsText(file)
    }
    else {
      reject(new Error(`Invalid result type: ${resultType}`))
    }
  })
}
