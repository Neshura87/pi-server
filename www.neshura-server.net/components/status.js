import UseSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res)

function status(app) {

  if (app.type === "php") {
    return ("Online")
  }
  else if (app.type === "app") {
    const { data, error } = UseSWR(app.href, fetcher)

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