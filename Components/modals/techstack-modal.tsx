import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "Components/ui/dialog"
import { useModal } from "hooks/use-modal"
import { useTechStackStore } from "hooks/use-techstack"
import Image from "next/image"
import { Tech } from "hooks/use-techstack"
import { Button } from "Components/ui/button"
import { techstacks } from "@/constants"

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
        className="h-[30rem] max-w-md overflow-y-auto bg-black-100 py-8 sm:h-auto sm:max-w-2xl sm:px-12 sm:py-16"
      >
        <DialogHeader className="">
          <DialogTitle className="text-center">
            <p className="mb-4 text-xl text-white md:text-4xl">TechStack</p>
          </DialogTitle>
        </DialogHeader>

        <div className="grid w-full grid-cols-3 gap-2 sm:w-auto">
          {techstacks?.map((tech, i) => (
            <div
              className={`flex cursor-pointer items-center justify-center rounded-md border py-1 text-white sm:justify-normal sm:p-2 sm:hover:bg-dark-400 ${
                checkArray({ name: tech.name, icon: tech.icon, index: i }) && "bg-dark-400 text-white"
              }`}
              key={`tech-item-${i}`}
              onClick={() => addRemoveStack({ name: tech.name, icon: tech.icon, index: i })}
            >
              <div className="relative h-5 w-5 sm:h-6 sm:w-6">
                <Image
                  src={
                    tech.alias
                      ? `/assets/svgs/icon-${tech.alias.toLowerCase()}.svg`
                      : `/assets/svgs/icon-${tech.name.toLowerCase()}.svg`
                  }
                  alt={`${tech.name} icon`}
                  fill
                  title={tech.name}
                  className="object-cover"
                />
              </div>
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
            className="flex-1 bg-blue-500 text-sm text-foreground text-white hover:bg-blue-500/50"
          >
            Cancel
          </Button>
          <Button
            onClick={() => onClose()}
            className="flex-1 bg-blue-100 text-sm text-foreground text-white hover:bg-blue-100/50"
          >
            Ok
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default TechStackModal
