"use client"

import Box from "@/Components/shared/dashboard/Box"
import H1 from "@/Components/shared/dashboard/H1"
import { Paragraph } from "@/Components/shared/home"
import axios from "axios"
import { useEffect, useState } from "react"
import ClientCard from "./ClientCard"
import BoxInset from "@/Components/shared/dashboard/BoxInset"
import { Search } from "lucide-react"
import { IconAdd, IconFilter } from "@/public/assets/svgs"
import { Button } from "@/Components/ui/button"
import { useModal } from "@/hooks/use-modal"

const Clients = () => {
  const [clients, setClient] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { onOpen } = useModal()

  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const response = await axios("https://codebility-be.onrender.com/api/v1/production/clients")
        if (!response) {
          throw new Error("Failed to fetch data from the server.")
        }
        setClient(response.data.data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    setIsLoading(true)
    fetchProjectsData()
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between gap-4">
        <H1>Clients</H1>
        <div className="flex items-center gap-4">
          {/* Input Hollow for Search */}
          {/* <Search className="mr-3 cursor-pointer text-xs invert-0 dark:invert md:hidden" /> */}
          <div className="relative hidden md:block lg:w-60">
            <Search className="absolute left-2 top-2.5 text-gray invert-0 dark:invert" size={20} />
            <input
              type="text"
              className="border-gray-100 h-10 w-full rounded-lg border bg-transparent py-1.5 ps-10 text-gray focus:outline-none"
              placeholder="Search projects..."
            />
          </div>
          {/* Select Filter */}
          {/* <IconFilter className="mr-3 cursor-pointer invert dark:invert-0 xs:text-xl md:hidden" /> */}
          <Button className="text-dark border-gray-100 text-gray-100 hidden w-24 items-center border bg-transparent text-gray md:flex">
            <IconFilter className="mr-3 invert dark:invert-0" />
            Filter
          </Button>
          {/* <IconAdd className="cursor-pointer text-xl invert dark:invert-0 xs:text-2xl md:hidden" /> */}
          <Button variant="default" className="w-[130px] items-center" onClick={() => onOpen("companyAddModal")}>
            <IconAdd className="mr-2" />
            Add Company
          </Button>
        </div>
      </div>
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

      <ClientCard clients={clients} />
    </div>
  )
}

export default Clients
