import Image from "next/image"

interface InternCardProps {
    image: string;
    name: string;
    position: string;
    roles: string[];
    bgColor: string;
}

const InternCard = ({image, name, position, roles, bgColor } : InternCardProps) => {
  return (
      <div className=" flex flex-col items-center justify-center">
        <div className="flex h-36 w-40 flex-col items-center justify-end gap-1 rounded-3xl bg-slate-400  bg-opacity-20 dark:bg-[#181818] pb-3">
          <div className="relative flex flex-col items-center">
            <Image src={`${image}`} alt={name + " photo"} width={90} height={90} priority className="h-auto absolute bottom-9 z-10" />
            <div className={`absolute bottom-9 h-16 w-16 ${bgColor}`}></div>

            <div className="relative w-40 text-center flex flex-col items-center">
              <Image src={"/Wave.svg"} alt="wave" width={95} height={20} className="h-auto invert dark:invert-0 z-20 border-none " />
              <h1 className="absolute w-full bottom-0 z-30 text-base font-bold text-darkBlueColor">{name}</h1>
            </div>
          </div>

          <p className="text-sm dark:text-secondaryColor">{position}</p>
          <div className="flex items-center justify-center gap-2">
            {roles.map((pos: any, i) => (
                <div key={i}>
                {pos === "Full Stack Developer" ? (
                  <p className="rounded-lg bg-slate-400 bg-opacity-20 px-2 py-1 text-xs font-semibold text-lightPinkColor dark:bg-[#363636]">
                    FS
                  </p>
                ) : null}
                {pos === "UI/UX Designer" ? (
                  <p className="rounded-lg bg-slate-400 bg-opacity-20 px-2 py-1 text-xs font-semibold text-magentaColor dark:bg-[#363636]">
                    UI/UX
                  </p>
                ) : null}
                {pos === "Backend Developer" ? (
                  <p className="rounded-lg bg-slate-400 bg-opacity-20 px-2 py-1 text-xs font-semibold text-tealColor dark:bg-[#363636]">
                    BE
                  </p>
                ) : null}
                {pos === "Frontend Developer" ? (
                  <p className="rounded-lg bg-slate-400 bg-opacity-20 px-2 py-1 text-xs font-semibold text-darkBlueColor dark:bg-[#363636]">
                    FE
                  </p>
                ) : null}
                {pos === "Video Editor" ? (
                  <p className="rounded-lg bg-slate-400 bg-opacity-20 px-2 py-1 text-xs font-semibold text-greenColor dark:bg-[#363636]">
                    VE
                  </p>
                ) : null}
                {pos === "Virtual Assistant" ? (
                  <p className="rounded-lg bg-slate-400 bg-opacity-20 px-2 py-1 text-xs font-semibold text-redColor dark:bg-[#363636]">
                    VA
                  </p>
                ) : null}
                {pos === "Shopify Developer" ? (
                  <p className="rounded-lg bg-slate-400 bg-opacity-20 px-2 py-1 text-xs font-semibold text-yellowColor dark:bg-[#363636]">
                    SD
                  </p>
                ) : null}
                {pos === "Wordpress Developer" ? (
                  <p className="rounded-lg bg-slate-400 bg-opacity-20 px-2 py-1 text-xs font-semibold text-blueColor dark:bg-[#363636]">
                    WD
                  </p>
                ) : null}
                {pos === "Human Resource" ? (
                  <p className="rounded-lg bg-slate-400 bg-opacity-20 px-2 py-1 text-xs font-semibold dark:text-white dark:bg-[#363636]">
                    HR
                  </p>
                ) : null}
                {pos === "Project Manager" ? (
                  <p className="rounded-lg bg-slate-400 bg-opacity-20 px-2 py-1 text-xs font-semibold text-skyBlueColor dark:bg-[#363636]">
                    PrM
                  </p>
                ) : null}
                {pos === "Social Media Manager" ? (
                  <p className="rounded-lg bg-slate-400 bg-opacity-20 px-2 py-1 text-xs font-semibold text-orangeColor dark:bg-[#363636]">
                    SMM
                  </p>
                ) : null}
                {pos === "Fb Ads Specialist" ? (
                  <p className="rounded-lg bg-slate-400 bg-opacity-20 px-2 py-1 text-xs font-semibold text-secondaryColor dark:bg-[#363636]">
                    Fb Ads
                  </p>
                ) : null}
                {pos === "Research Auditor" ? (
                  <p className="rounded-lg bg-slate-400 bg-opacity-20 px-2 py-1 text-xs font-semibold dark:text-white dark:bg-[#363636]">
                    RA
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default InternCard
