import Title from "Components/Title"

export default function DashboardPage() {
  return (
    <div className="flex w-full flex-col gap-2 overflow-x-hidden p-3 lg:h-full lg:overflow-hidden lg:p-0">
      <div className="flex flex-col lg:flex-row lg:px-10">
        <Title
          title="Dashboard"
          subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
      </div>
    </div>
  )
}
