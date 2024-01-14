import ClientCards from "Components/ClientCards"
import Pagination from "Components/Pagination"
import Title from "Components/Title"
import { AddSVG, FilterSVG, ShowSVG } from "Components/logos"
import H from "public/hero2.png"

export default function Web() {
  return (
    <div className="flex w-full flex-col gap-2 p-3 lg:h-full lg:overflow-hidden lg:p-0">
      <div className="flex flex-col lg:flex-row lg:px-10">
        <Title
          title="Company Overview"
          subtitle="Lorem Ipsum is simply dummy text of the printing 
and typesetting industry."
        />
        <div className="grid flex-1 grid-cols-2 items-center justify-evenly gap-y-5 p-10 md:flex md:gap-0 lg:p-0">
          <div className="flex flex-col items-center gap-2 ">
            <h1 className="self-center text-3xl font-semibold">36</h1>
            <p className="self-center text-xs text-gray-400">Today</p>
            <h3 className="xl:text-md self-center whitespace-nowrap text-text1 2xl:text-xl">Appointments</h3>
          </div>
          <div className="flex flex-col items-center gap-2 ">
            <h1 className="self-center text-3xl font-semibold ">10</h1>
            <p className="self-center text-xs text-gray-400">Today</p>
            <h3 className="xl:text-md  self-center whitespace-nowrap text-text2 2xl:text-xl">Lorem ipsum</h3>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="self-center text-3xl font-semibold">12</h1>
            <p className="self-center text-xs text-gray-400">Today</p>
            <h3 className="xl:text-md self-center whitespace-nowrap text-text3 2xl:text-xl">Cancelled</h3>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="self-center text-3xl font-semibold">01</h1>
            <p className="self-center text-xs text-gray-400">Today</p>
            <h3 className="xl:text-md  self-center whitespace-nowrap text-text4 2xl:text-xl">Lorem ipsum</h3>
          </div>
        </div>
      </div>
      <div className="flex-col lg:h-full lg:overflow-hidden">
        <div className="start flex items-center justify-end gap-5 py-4">
          <div className="flex items-center gap-1">
            Add <AddSVG className="text-text4" />
          </div>
          <div className="flex items-center gap-1">
            Filter <FilterSVG className="text-text4" />
          </div>
          <div className="flex items-center gap-1">
            Show <ShowSVG className="text-text4" />
          </div>
        </div>
        <div className="grid gap-2 overflow-y-auto lg:h-full lg:grid-cols-2">
          {/* You can map each client to the ClientCards. To view the props just go to ClientCard Component */}
          <ClientCards image={H} imgBgColor="bg-blue-900" />
          <ClientCards image={H} imgBgColor="bg-blue-900" />
          <ClientCards image={H} imgBgColor="bg-blue-900" />
          <ClientCards image={H} imgBgColor="bg-blue-900" />
        </div>
      </div>
      <Pagination />
      <div className="hidden py-10 text-sm text-muted-foreground tablet:block">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum adipisci odit et. Voluptas architecto repudiandae
        ab aliquam minus magnam neque voluptatibus incidunt velit odit! Eos.
      </div>
    </div>
  )
}
