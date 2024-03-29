import { API_AUCTION_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login";
const method = "post";

export async function login(profile) {
  const loginURL = API_AUCTION_URL + action;
 
  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json"
    },
    method,
    body: JSON.stringify(profile)
  })
  
  const {accessToken, ...userProfile} = await response.json()

  storage.save("token", accessToken)

  storage.save("profile", userProfile)

  alert("You are now logged in")
}