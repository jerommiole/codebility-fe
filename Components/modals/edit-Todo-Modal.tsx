"use client"

import { AddSVG } from "Components/logos"
import { SvgAttachment, SvgExit, SvgUpload } from "assets/icons"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "Components/ui/dialog"
import { useModal } from "hooks/use-modal"
import { Button } from "Components/ui/button"
import { DialogDescription } from "@radix-ui/react-dialog"
import Image from "next/image"
import { useState } from "react"

const EditTodoModal = () => {
  const [title, setTitle] = useState("Jira Ticket")
  const [gitLink, setGitLink] = useState("https://github.com/mitzukin/AnyStore")
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium ipsa voluptatibus, ut ipsum minima impedit. Lorem ipsum dolor sit amet consectetur"
  )
  const { isOpen, onClose, type } = useModal()

  const isModalOpen = isOpen && type === "editTodoModal"
  return (
    <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
      <DialogContent
        hasButton
        className="h-[35rem] w-[95%] max-w-sm overflow-x-auto overflow-y-auto sm:max-w-4xl lg:h-auto"
      >
        <DialogHeader className="relative">
          <DialogTitle className="">
            <p className="mb-2 text-left text-xl md:text-3xl">Edit Todo</p>
            <p className="text-left text-xs text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.{" "}
            </p>
          </DialogTitle>
          <SvgExit
            onClick={() => onClose()}
            className="absolute right-0 top-0 cursor-pointer duration-200 hover:scale-110"
          />
        </DialogHeader>
        <DialogDescription className="w-full gap-5 sm:px-5 md:flex md:px-10">
          {/* left  */}
          <div className="md:w-3/5">
            <h1 className="text-xl">Task Form</h1>
            <p className="text-sm text-gray-500">update Your Task</p>
            {/* form  */}
            <div className="mt-6 space-y-4">
              <div className="relative">
                <input
                  type="text"
                  className="peer mb-2 w-full rounded-md border border-gray-300 px-4 py-1 placeholder-transparent outline-none duration-300 peer-focus:mb-0"
                  id="title"
                  name="title"
                  autoComplete="off"
                  // onChange={handleChange}
                  //   placeholder="First Name"
                  value={title}
                />

                <label
                  htmlFor="title"
                  className=" absolute -top-3 left-1 cursor-text select-none bg-white px-3 text-sm text-gray-500 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:left-1 peer-focus:bg-white peer-focus:text-sm peer-focus:text-gray-600"
                >
                  Title
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  className="peer mb-2 w-full rounded-md border border-gray-300 px-4 py-1 placeholder-transparent outline-none duration-300 peer-focus:mb-0"
                  id="gitLink"
                  name="gitLink"
                  autoComplete="off"
                  // onChange={handleChange}
                  // placeholder="First Name"
                  value={gitLink}
                />

                <label
                  htmlFor="gitLink"
                  className=" absolute -top-3 left-1 cursor-text select-none bg-white px-3 text-sm text-gray-500 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:left-1 peer-focus:bg-white peer-focus:text-sm peer-focus:text-gray-600"
                >
                  Gitlink
                </label>
              </div>
              <div className="relative">
                <textarea
                  className="peer mb-4 w-full rounded-md border border-gray-300 px-4 py-1 pb-4 placeholder-transparent outline-none duration-300 peer-focus:mb-0"
                  id="description"
                  name="description"
                  autoComplete="off"
                  rows={5}
                  // onChange={handleChange}
                  // placeholder="First Name"
                  value={description}
                />

                <label
                  htmlFor="description"
                  className=" absolute -top-3 left-1 cursor-text select-none bg-white px-3 text-sm text-gray-500 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:left-1 peer-focus:bg-white peer-focus:text-sm peer-focus:text-gray-600"
                >
                  Description
                </label>
                <SvgAttachment className="absolute bottom-7 right-8 cursor-pointer duration-200 hover:scale-110" />
                <SvgUpload className="absolute bottom-7 right-3 cursor-pointer duration-200 hover:scale-110" />
              </div>
            </div>
            <div className="flex gap-6">
              {/* left */}
              <div className="max-w-md">
                <h1>Labels</h1>
                <p className="text-sm text-gray-500">Lorem Ipsum is simply dummy text </p>
                <div className="w-fulL mt-3 flex flex-wrap items-center gap-2">
                  <AddSVG className="cursor-pointer text-text4 duration-200 hover:scale-110" />
                  {"qwert".split("").map((i) => (
                    // Add key prop
                    <button
                      key={i}
                      className="flex cursor-pointer items-center gap-3 rounded-full border px-2 py-1 text-xs sm:px-3"
                    >
                      <div className="h-4 w-0.5 bg-[#9747FF]" />
                      <p>Codebility</p>
                    </button>
                  ))}
                </div>
              </div>
              {/* right  */}
              <div className="hidden sm:block md:hidden">
                <h1>Team Members</h1>
                <p className="mb-1 text-sm text-gray-500">Add members to your project</p>
                <div className="max-w-xs">
                  <input
                    type="text"
                    className="peer mb-3 w-full rounded-full border border-gray-300 px-4 py-3 text-sm outline-none duration-300 peer-focus:mb-0"
                    id="search"
                    name="search"
                    autoComplete="off"
                    // onChange={handleChange}
                    placeholder="Search Members"
                  />
                  <div className="flex flex-wrap items-center gap-2">
                    <AddSVG className="curstor-pointer mx-2 text-text4 duration-200 hover:scale-110" />
                    {"qwertyuiop".split("").map((i) => (
                      // Add key prop
                      <div key={i} className="relative h-7 w-7 rounded-full bg-[#34cc80]">
                        <Image
                          className="h-full w-full rounded-full object-cover"
                          src="/image32.png"
                          width={35}
                          height={5}
                          alt="team-member"
                        />
                        <div className="absolute -right-1 -top-1 flex h-3 w-3 cursor-pointer items-center justify-center rounded-full bg-red-500 text-xs text-gray-500">
                          x
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right  */}
          <div className="mt-10 sm:hidden md:block md:w-2/5 md:p-10">
            <h1>Team Members</h1>
            <p className="mb-1 text-sm text-gray-500">Add members to your project</p>
            <div className="max-w-xs">
              <input
                type="text"
                className="peer mb-3 w-full rounded-full border border-gray-300 px-4 py-3 text-sm outline-none duration-300 peer-focus:mb-0"
                id="search"
                name="search"
                autoComplete="off"
                // onChange={handleChange}
                placeholder="Search Members"
              />
              <div className="flex flex-wrap items-center gap-2">
                <AddSVG className="mx-2 cursor-pointer text-text4 duration-200 hover:scale-110" />
                {"qwertyuiop".split("").map((i) => (
                  // Add key prop
                  <div key={i} className="relative h-7 w-7 rounded-full bg-[#34cc80]">
                    <Image
                      className="h-full w-full rounded-full object-cover"
                      src="/image32.png"
                      width={35}
                      height={5}
                      alt="team-member"
                    />
                    <div className="absolute -right-1 -top-1 flex h-3 w-3 cursor-pointer items-center justify-center rounded-full bg-red-500 text-xs">
                      x
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogDescription>

        <DialogFooter className="mt-4 md:mt-0">
          <Button
            onClick={() => onClose()}
            className="mt-2 border border-gray-300 bg-transparent px-3 text-sm text-black duration-300 hover:bg-black hover:text-white sm:mt-0"
          >
            Cancel
          </Button>
          <Button
            onClick={() => onClose()}
            className="bg-gray-500 px-10 text-sm  text-white duration-300 hover:bg-gray-700"
          >
            Update
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default EditTodoModal
