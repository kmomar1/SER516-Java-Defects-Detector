import Http from "../../plugins/Http.js";

export const cloneRepo = async (URL) => {
  const path = "/github/clone"

  const options =  {
    method: "POST",
    url: path,
    data: { github_link: URL }
  }

  try {
    await Http(options)
  }
  catch (error) {
    console.error("Failure in cloneRepo api call")
    console.error(error)
    throw new Error()
  }
}
