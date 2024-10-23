import { baseURL } from "./api"

export default function preparaFoto(url) {
    return `${baseURL}/${url}`
  }