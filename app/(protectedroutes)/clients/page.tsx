import ClientCard from "./components/ClientCard"
import Pagination from "Components/Pagination"
import Title from "Components/Title"
import H from "public/hero2.png"
import Action from "./components/Action"

export default async function Clients() {
  const data = [
    {
      count: "36",
      label: "Appointments",
      className: "text-text1",
    },
    {
      count: "10",
      label: "Lorem ipsum",
      className: "text-text2",
    },
    {
      count: "12",
      label: "Cancelled",
      className: "text-text3",
    },
    {
      count: "01",
      label: "Lorem ipsum",
      className: "text-text4",
    },
  ]

  return (
    <div className="flex w-full flex-col gap-2 overflow-x-hidden p-3 lg:h-full lg:overflow-hidden lg:p-0">
      <div className="flex flex-col lg:flex-row lg:px-10">
        <Title
          title="Company Overview"
          subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <div className="grid flex-1 grid-cols-2 items-center justify-evenly gap-y-5 p-10 md:flex md:gap-0 lg:p-0">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <h1 className="self-center text-3xl font-semibold">{item.count}</h1>
              <h3 className={`xl:text-md self-center whitespace-nowrap ${item.className} 2xl:text-xl`}>{item.label}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:h-full lg:overflow-hidden">
        <Action />
        <div className="grid gap-4 overflow-y-auto lg:h-full lg:grid-cols-2">
          <ClientCard image={H} imgBgColor="bg-blue-900" />
        </div>
      </div>
      <Pagination />
    </div>
  )
}
