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

export async function updateProfile(id: string, updatedData: any) {
  const response = await fetch(`${API.AUTH_GOOGLE_CODEVS}/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  })

  return response.json()
}

export async function getCodev(email: any) {
  const response = await fetch(`${API.AUTH_GOOGLE_CODEVS}/${email}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })

  return response.json()
}
