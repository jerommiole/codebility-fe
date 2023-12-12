
interface ReasonProps {
    title: string;
    reasonNumber: number;
    description: string;
}

const Reasons = ({title, reasonNumber, description} : ReasonProps) => {
  return (
    <div className="flex flex-col gap-10 md:flex-row md:justify-evenly md:mx-auto xl:w-3/4 xl:justify-evenly">
      <h1 className="text-xl md:max-w-[200px] md:flex md:items-center md:justify-center md:text-center md:text-5xl md:leading-tight">
        {title}
      </h1>
      <div className="flex max-w-sm gap-3 p-4">
        <div className="flex h-48 w-28 items-center justify-center ">
          <h1 className="text-3xl font-semibold text-slate-400">0{reasonNumber}</h1>
        </div>
        <div className="flex flex-1 flex-col justify-between p-1">
          <p className="text-sm text-slate-400">
            {description}
          </p>
          <div className="flex justify-between text-sm text-slate-400">
            <p>Lorem</p>
            <p>Lorem Ipsum</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reasons
