"use client"

import { Button } from "Components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "Components/ui/dialog"
import { useModal } from "hooks/use-modal"
import RenderTag from "../shared/dashboard/RenderTag"
import RenderTeam from "../shared/dashboard/RenderTeam"
import Input from "../ui/forms/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@radix-ui/react-select"
import { IconDropdown } from "@/public/assets/svgs"
import { useEffect, useState } from "react"
import { todoPrioLevels } from "@/constants"
import { Project } from "@/types"
import axios from "axios"

const TodoAddModal = () => {
  const { isOpen, onClose, type } = useModal()
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [selectedPrioLevel, setSelectedPrioLevel] = useState<string | null>(null)
  const [inputTag, setInputTag] = useState<string>("")
  const [tags, setTags] = useState<string[]>([])

  const handleAddTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputTag.trim() !== "") {
      setTags((prevArray) => [...prevArray, inputTag.trim()])
      setInputTag("")
    }
  }

  // const removeTag = (index: number) => {
  //   setTags((prevTags) => prevTags.filter((_, i) => i !== index))
  // }

  const handleClose = () => {
    setInputTag("")
    setTags([])
    onClose()
  }

  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const response = await axios("https://codebility-be.onrender.com/api/v1/production/projects")
        if (!response) {
          throw new Error("Failed to fetch data from the server.")
        }
        setProjects(response.data.data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    setIsLoading(true)
    fetchProjectsData()
  }, [])

  const isModalOpen = isOpen && type === "todoAddModal"

  return (
    <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
      <DialogContent
        hasButton
        className="flex h-[32rem] w-[100%] max-w-3xl flex-col gap-6 overflow-x-auto overflow-y-auto lg:h-auto"
      >
        <DialogHeader className="relative">
          <DialogTitle className="mb-2 text-left text-lg">Add New To do</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex basis-[50%] flex-col gap-4">
            <div>
              <Label>Project</Label>
              <Select onValueChange={(value) => setSelectedProject(value)}>
                <SelectTrigger
                  aria-label="Projects"
                  className="border-light_dark flex w-full items-center justify-between rounded border bg-transparent px-3 py-2 text-left text-sm focus:outline-none"
                >
                  <SelectValue className="text-sm" placeholder="Select a Project">
                    {selectedProject}
                  </SelectValue>
                  <IconDropdown className="invert dark:invert-0" />
                </SelectTrigger>

                <SelectContent className="border-light_dark rounded-md border bg-[#FFF] dark:bg-black-100">
                  <SelectGroup>
                    <SelectLabel className="px-3 py-2 text-xs text-gray">Projects</SelectLabel>
                    {projects.map(({ id, project_name }: Project) => (
                      <SelectItem
                        key={id}
                        className="w-[345px] cursor-default px-3 py-2 text-sm hover:bg-blue-100"
                        value={project_name}
                      >
                        {project_name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="title">Title</Label>
              <Input id="title" />
            </div>
            <div>
              <Label htmlFor="desc">Description</Label>
              <Textarea id="desc" />
            </div>
            <div>
              <Label>Priority Level</Label>
              <Select onValueChange={(value) => setSelectedPrioLevel(value)}>
                <SelectTrigger
                  aria-label="Priority Level"
                  className="border-light_dark flex w-full items-center justify-between rounded border bg-transparent px-3 py-2 text-left text-sm focus:outline-none"
                >
                  <SelectValue className="text-sm" placeholder="Select a Priority Level">
                    {selectedPrioLevel}
                  </SelectValue>
                  <IconDropdown className="invert dark:invert-0" />
                </SelectTrigger>

                <SelectContent
                  position="popper"
                  sideOffset={-150}
                  className="border-light_dark rounded-md border bg-[#FFF] dark:bg-black-100"
                >
                  <SelectGroup>
                    <SelectLabel className="px-3 py-2 text-xs text-gray">Priority Level</SelectLabel>
                    {todoPrioLevels.map((prioLevel) => (
                      <SelectItem
                        className="w-[345px] cursor-default px-3 py-2 text-sm hover:bg-blue-100"
                        value={prioLevel}
                      >
                        {prioLevel}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex basis-[50%] flex-col gap-4">
            <div>
              <Label htmlFor="tags">Tags *</Label>
              <Input
                id="tags"
                type="text"
                value={inputTag}
                onChange={(e) => setInputTag(e.target.value)}
                onKeyPress={handleAddTag}
                placeholder="Add a tags..."
              />
              {tags && tags.map((tag) => <RenderTag name={tag} />)}
              <p className="text-xs text-gray">
                Add a tag to describe what task is about. You need to press enter to add a tag.
              </p>
            </div>
            <div>
              <Label htmlFor="members">Members</Label>
              <Input id="members" placeholder="Search a member" />
              <RenderTeam />
              <RenderTeam />
              <RenderTeam />
              <RenderTeam />
              <RenderTeam />
            </div>
          </div>
        </div>

        <DialogFooter className="flex flex-col gap-2 lg:flex-row">
          <Button variant="hollow" className="order-2 w-full sm:order-1 sm:w-[130px]" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="default" className="order-1 w-full sm:order-2 sm:w-[130px]">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default TodoAddModal
