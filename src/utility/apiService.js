import axios from "axios";

export function apiGet({ url, params = {} }) {
  return axios
    .get(url, {
      ...{ params },
    })
    .then(({ data, status }) => {
      return { data, status };
    })
    .catch((error) => {
      return {
        status: error?.status || 400,
        message: error?.message || "Something Went Wrong",
      };
    });
}
