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
