import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "Components/ui/dialog"
import { useModal } from "hooks/use-modal"
import { useTechStackStore } from "hooks/use-techstack"
import Image from "next/image"
import { Tech } from "hooks/use-techstack"

import {
  angular,
  apache,
  aws,
  css,
  bootstrap,
  django,
  express,
  firebase,
  html,
  java,
  javascript,
  jquery,
  kotlin,
  mdi_github,
  mongodb,
  mui,
  mysql,
  node,
  oracle,
  postgresql,
  python,
  react,
  ruby,
  shadcnui,
  solidity,
  swift,
  typescript,
  vue,
} from "public/techStack"
import { Button } from "Components/ui/button"

const techstack = [
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Apache",
    icon: apache,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Html",
    icon: html,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Javascript",
    icon: javascript,
  },
  {
    name: "Jquery",
    icon: jquery,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "Github",
    icon: mdi_github,
  },
  {
    name: "Mongodb",
    icon: mongodb,
  },
  {
    name: "Mui",
    icon: mui,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "Node",
    icon: node,
  },
  {
    name: "Oracle",
    icon: oracle,
  },
  {
    name: "Postgresql",
    icon: postgresql,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "Ruby",
    icon: ruby,
  },
  {
    name: "Shadcnui",
    icon: shadcnui,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Swift",
    icon: swift,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "Vue",
    icon: vue,
  },
]

const TechStackModal = () => {
  const { isOpen, onClose, type } = useModal()
  const { stack, addRemoveStack, clearStack } = useTechStackStore()
  const checkArray = (objectItem: Tech) => {
    const isObjectInArray = stack.some((obj) => {
      return JSON.stringify(obj) === JSON.stringify(objectItem)
    })
    return isObjectInArray
  }

  const isModalOpen = isOpen && type === "techStackModal"
  return (
    <Dialog open={isModalOpen}>
      <DialogContent
        hasButton
        className="h-[30rem] max-w-md overflow-y-auto py-8 sm:h-auto sm:max-w-2xl sm:px-12 sm:py-16"
      >
        <DialogHeader className="">
          <DialogTitle className="text-center">
            <p className="mb-4 text-xl md:text-4xl">TechStack</p>
          </DialogTitle>
        </DialogHeader>
        {/* <div className="flex gap-2 py-2">
          <p>Filter</p>
          <Image src="/filter.png" alt="filter-icon" height={24} width={24} />
        </div> */}
        <div className="grid w-full grid-cols-4 gap-2 sm:w-auto">
          {techstack?.map((tech, i) => (
            <div
              className={`flex cursor-pointer items-center justify-center rounded-md border py-1 hover:bg-gray-500/40 sm:justify-normal sm:p-2 ${
                checkArray({ name: tech.name, icon: tech.icon, index: i }) && "bg-gray-500/40"
              }`}
              key={`tech-item-${i}`}
              onClick={() => addRemoveStack({ name: tech.name, icon: tech.icon, index: i })}
            >
              <Image src={tech.icon} alt={`${tech.name}-icon`} height={30} width={30} />
              <p className="hidden pl-4 sm:block">{tech.name}</p>
            </div>
          ))}
        </div>
        <DialogFooter className="mt-5 flex w-full flex-row gap-2 sm:mx-0 sm:w-auto">
          <Button
            onClick={() => {
              clearStack()
              onClose()
            }}
            className="flex-1 bg-[#743bc7] text-sm text-foreground hover:bg-[#743bc7]/50"
          >
            Cancel
          </Button>
          <Button
            onClick={() => onClose()}
            className="flex-1 bg-[#6876f5] text-sm text-foreground hover:bg-[#6876f5]/50"
          >
            Ok
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default TechStackModal
