interface Props {
  title: string
  subtitle?: string
}

const Header = ({ title, subtitle }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-semibold uppercase md:text-3xl">{title}</h1>
      {subtitle && <p className="max-w-[25rem] ">{subtitle}</p>}
    </div>
  )
}

export default Header
