import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogClose } from "Components/ui/dialog"
import { useModal } from "hooks/use-modal"
import { useTechStackStore } from "hooks/use-techstack"
import { icons } from "lucide-react"
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
  const { stack, addRemoveStack } = useTechStackStore()
  const checkArray = (objectItem: Tech) => {
    const isObjectInArray = stack.some((obj) => {
      return JSON.stringify(obj) === JSON.stringify(objectItem)
    })
    return isObjectInArray
  }

  const isModalOpen = isOpen && type === "techStackModal"
  return (
    <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
      <DialogContent className="h-[30rem] max-w-md overflow-y-auto px-8 py-8 sm:h-auto sm:max-w-2xl sm:px-12 sm:py-16">
        <DialogHeader>
          <DialogTitle className="text-center">
            <p className="mb-4 text-4xl">TechStack</p>
          </DialogTitle>
        </DialogHeader>
        <div className="flex gap-2 py-2">
          <p>Filter</p>
          <Image src="/filter.png" alt="filter-icon" height={24} width={24} />
        </div>

        <div className="grid grid-cols-4 gap-2">
          {techstack?.map((tech, i) => (
            <div
              className={`flex cursor-pointer items-center rounded-md p-2 hover:bg-gray-500/40 ${
                checkArray({ name: tech.name, icon: tech.icon, index: i }) && "bg-gray-500/40"
              }`}
              key={`tech-item-${i}`}
              onClick={() => addRemoveStack({ name: tech.name, icon: tech.icon, index: i })}
            >
              <Image src={tech.icon} alt={`${tech.name}-icon`} height={30} width={30} />
              <p className="pl-4">{tech.name}</p>
            </div>
          ))}
        </div>
        {/* <DialogFooter className="mt-5 flex justify-between sm:justify-between">
          <DialogClose>
            <Button variant="destructive" className="w-[10rem]">
              Cancel
            </Button>
          </DialogClose>
          <Button className="w-[10rem] hover:bg-blue-500">Ok</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  )
}

export default TechStackModal
