"use client"

import Box from "@/Components/shared/dashboard/Box"
import H1 from "@/Components/shared/dashboard/H1"
import { Paragraph } from "@/Components/shared/home"
import axios from "axios"
import { useEffect, useState } from "react"
import ClientCard from "./ClientCard"
import BoxInset from "@/Components/shared/dashboard/BoxInset"

const Clients = () => {
  const [data, setData] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const response = await axios("https://codebility-be.onrender.com/api/v1/production/clients")
        if (!response) {
          throw new Error("Failed to fetch data from the server.")
        }
        setData(response.data.data)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      } finally {
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
      }
    }
    fetchProjectsData()
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <H1>Clients</H1>
      <Box>
        <div className="flex flex-col gap-7 lg:flex-row">
          <div className="flex basis-[60%] flex-col justify-center gap-2">
            <p className="text-lg font-semibold">
              Project Management: Navigate, Track, and Collaborate with Codebility
            </p>
            <Paragraph className="max-w-[500px]">
              Welcome to your Client Dashboard, your go-to hub for effortless project management. Quickly access vital
              company details, track project history seamlessly, and navigate with ease through milestones and tasks.
              Stay in the loop with real-time ticket updates and maintain organization with clear Task and To-Do Lists.
              Simplify collaboration with Codebility in one intuitive space.
            </Paragraph>
          </div>
          <div className="my-auto flex basis-[40%] justify-center">
            <div className="w-full flex-row gap-2">
              <div className="grid grid-cols-2 gap-2">
                <BoxInset label="Appointment" value="9" />
                <BoxInset label="Cancelled" value="1" />
              </div>
            </div>
          </div>
        </div>
      </Box>

      <ClientCard clients={data} />
    </div>
  )
}

export default Clients
