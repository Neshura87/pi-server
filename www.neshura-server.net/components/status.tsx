import useSWR from 'swr'
import type { CustomLink } from '../interfaces/LinkTypes'

const fetcher = (url:string) => fetch(url).then(res => res.json())

function status(app: CustomLink) {

  if (app.type === "php") {
    return ("Online")
  }
  else if (app.type === "app") {
    const { data, error } = useSWR(app.href, fetcher)

    if (error) return "Offline"
    if (!data) return "Loading"

    if (data.status == 200 || data.status == 301 || data.status == 302) {
      console.log(data)
      return "Online"
    }
    else return "Offline"
  }
  else { return ("ERROR") }
}

export default status;