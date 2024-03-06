"use client"

import Box from "@/Components/shared/dashboard/Box"
import BoxInset from "@/Components/shared/dashboard/BoxInset"
import { Paragraph } from "@/Components/shared/home"
import { Button } from "@/Components/ui/button"
import { useModal } from "hooks/use-modal"
import Image from "next/image"

const ClientCards = ({ clients }: { clients: any }) => {
  const { onOpen } = useModal()

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {clients.map((data: any) => (
        <Box key={data.id} className="flex gap-6 lg:flex-col xl:flex-row">
          <div className="flex">
            <div className="relative my-auto h-[120px] w-[120px] rounded-full bg-white p-6">
              <Image
                alt="Thumbnail"
                src={data.client_imgURL || "/assets/svgs/icon-codebility.svg"}
                width={100}
                height={100}
                className="mb-2 h-full w-full rounded-lg bg-cover object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold uppercase">{data.company_name}</p>
            <Paragraph>Summary Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Paragraph>
            <div className="grid gap-2 lg:grid-cols-1 xl:grid-cols-2">
              <BoxInset icon="telephone" label="0912345678" iconClassName="invert dark:invert-0" />
              <BoxInset icon="linkedin" label="@codebility" iconClassName="invert dark:invert-0" />
              <BoxInset icon="email" label="codebility@gmail.com" iconClassName="invert dark:invert-0" />
              <BoxInset icon="map-pin" label="Philippines" iconClassName="invert dark:invert-0" />
            </div>

            <div className="flex justify-end">
              <Button
                className="link mt-2"
                onClick={() => {
                  onOpen("companyProfile", data)
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </Box>
      ))}
    </div>
  )
}

export default ClientCards
