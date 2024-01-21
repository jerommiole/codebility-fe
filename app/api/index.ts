import { API } from "../../lib/constants"

export async function saveUserData(email: string, updatedData: any) {
  return await fetch(`${API.AUTH_GOOGLE_CODEVS}/${email}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  })
}
