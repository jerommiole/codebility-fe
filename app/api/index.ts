import { NextResponse } from "next/server"
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

export async function loginUser(credentials: any) {
  const restructuredObject = {
    email_address: credentials.email,
    password: credentials.password,
  }
  try {
    const response = await fetch(`${API.CODEVS}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(restructuredObject),
    })
    return response.json()
  } catch (e: any) {
    return new NextResponse("INTERNAL_SERVER_ERROR", { status: 500 })
  }
}

export async function signupUser(data: any) {
  const restructuredData = {
    name: data.name,
    address: data.address,
    email_address: data.email,
    github_link: data.githubLink,
    portfolio_website: data.portfolioLink,
    tech_stacks: [...data.techstacks.split(", ")],
    schedule: data.schedule,
    position: [data.position],
    password: data.password,
  }
  const sendData = JSON.stringify(restructuredData)
  try {
    const response = await fetch(`${API.CODEVS}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: sendData,
    })
    return response.json()
  } catch (e: any) {
    return new NextResponse("INTERNAL_SERVER_ERROR", { status: 500 })
  }
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
