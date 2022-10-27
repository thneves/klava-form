import axios from "axios";

export const addProfile = async (data) => {
  const json = JSON.stringify(data)
  const url = 'http://localhost:3000/api/v1/profiles'

  const response = await axios.post(url, json, {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  if (response.status === 200 ) {
    return "Profile added to Klaviyo list"
  }

  throw Error(response.status)
}