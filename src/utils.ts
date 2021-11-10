import rfdc from 'rfdc'

export const clone = rfdc()

export const s = (element: string) => {
  return document.querySelector(element) as HTMLElement
}

export const sa = (elements: string) => {
  return document.querySelectorAll(elements) as NodeListOf<HTMLElement>
}

export const r_id = () => '_' + Math.random().toString(36).substr(2)

export const remove_arr_item = (arr: Array<any>, i: number) => {
  arr.splice(i, 1)
  return clone(arr)
}
export const replace_arr_item = (arr: Array<any>, i: number, new_item: any) => {
  arr.splice(i, 0, new_item)
  return clone(arr)
}

export function capitalise_first(string: string | undefined) {
  if (string) return string.charAt(0).toUpperCase() + string.slice(1)
  else return ''
}

export function capitalise_words(string: string | undefined) {
  if (string)
    return string.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
  else return ''
}

export const getWidth = () => {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  )
}

export const getHeight = () => {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  )
}

export const base_log = (x: number, y: number) => {
  return Math.log(y) / Math.log(x)
}

export const spring_easing = (x: number): number => {
  return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2
}

export const request = (method: string, url: string, response_type: XMLHttpRequestResponseType) => {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest()
    xhr.responseType = response_type
    xhr.open(method, url)
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response)
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText,
        })
      }
    }
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText,
      })
    }
    xhr.send()
  })
}
