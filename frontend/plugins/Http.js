import ENV from "../env.js";

const Http = axios.create({
  baseURL: `${ENV.BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default Http;
