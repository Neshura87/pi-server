import UseSWR from 'swr'
import type { CustomLink } from '../interfaces/LinkTypes'

const fetcher = async (
    input: RequestInfo, 
    init: RequestInit, 
    ...args: any[]
  ) => {
    const res = await fetch(input, init);
    return res;
  };

function status(app: CustomLink) {

  if (app.type === "php") {
    return ("Online")
  }
  else if (app.type === "app") {
    const { data, error } = UseSWR(app.href, fetcher)

    if (error) return "Offline"
    if (!data) return "Loading"

    if (data.status == 200 || data.status == 301 || data.status == 302) return "Online"
    else return "Offline"
  }
  else { return ("ERROR") }
}

export default status;