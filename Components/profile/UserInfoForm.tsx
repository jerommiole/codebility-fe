"use client"

import React, { useState } from "react"
import { SvgCheckCircle, SvgEdit } from "../../public/assets/icons"
import { SubmitHandler, useForm } from "react-hook-form"
import { updateProfile } from "../../app/api"

enum GenderEnum {
  female = "female",
  male = "male",
}

interface IFormData {
  name: string
  address: string
  email: string
  gender: GenderEnum
}

const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center justify-between border-b border-gray03 py-[19px] pl-[39px]">{children}</div>
}

const UserInfoForm = () => {
  const [isEdit, setIsEdit] = useState({
    name: false,
    address: false,
    email: false,
    gender: false,
  })
  const [formData, setFormData] = useState()

  const onEdit = (key: string, value: boolean) => {
    setIsEdit((prevIsEdit) => ({ ...prevIsEdit, [key]: value }))
  }

  const onUpdate = async () => {
    await onSubmit(watch())
    setIsEdit({
      name: false,
      address: false,
      email: false,
      gender: false,
    })
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormData>()

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    /*   const res = await updateProfile(profileData?.profile[0]?.userId, data)
    setFormData(res)*/
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormWrapper>
        <div className="flex w-full items-center">
          <label htmlFor="name" className="w-24 text-xs capitalize text-secondaryColor">
            Name
          </label>
          <div className="w-full max-w-xs">
            {isEdit.name ? (
              <input
                id="name"
                type="text"
                {...register("name")}
                className="w-full rounded border border-gray03 bg-transparent px-3 py-2 focus:outline-none"
              />
            ) : (
              <p className="px-3 py-2">name</p>
            )}
          </div>
        </div>
        {isEdit.name ? (
          <button onClick={onUpdate}>
            <SvgCheckCircle className="h-6 w-6 cursor-pointer text-green-500 hover:scale-110" />
          </button>
        ) : (
          <SvgEdit
            fill="#363636"
            className="cursor-pointer hover:scale-110 hover:text-secondaryColor"
            onClick={() => onEdit("name", true)}
          />
        )}
      </FormWrapper>
      <FormWrapper>
        <div className="flex w-full items-center">
          <label htmlFor="address" className="w-24 text-xs capitalize text-secondaryColor">
            Address
          </label>
          <div className="w-full max-w-xs">
            {isEdit.address ? (
              <input
                id="address"
                type="text"
                {...register("address")}
                className="w-full rounded border border-gray03 bg-transparent px-3 py-2 focus:outline-none"
              />
            ) : (
              <p className="px-3 py-2">{"address" || "- -"}</p>
            )}
          </div>
        </div>
        {isEdit.address ? (
          <button onClick={onUpdate}>
            <SvgCheckCircle className="h-6 w-6 cursor-pointer text-green-500 hover:scale-110" />
          </button>
        ) : (
          <SvgEdit
            fill="#363636"
            className="cursor-pointer hover:scale-110 hover:text-secondaryColor"
            onClick={() => onEdit("address", true)}
          />
        )}
      </FormWrapper>
      {/*<FormWrapper>
        <div className="flex w-full items-center">
          <label htmlFor="email" className="w-24 text-xs capitalize text-secondaryColor">
            Email
          </label>
          <div className="w-full max-w-xs">
            {isEdit.email ? (
              <input
                id="email"
                type="text"
                {...register("email")}
                className="w-full rounded border border-gray03 bg-transparent px-3 py-2 focus:outline-none"
              />
            ) : (
              <p className="px-3 py-2">{user?.email}</p>
            )}
          </div>
        </div>
        {isEdit.email ? (
          <button onClick={onUpdate}>
            <SvgCheckCircle className="h-6 w-6 cursor-pointer text-green-500 hover:scale-110" />
          </button>
        ) : (
          <SvgEdit
            fill="#363636"
            className="cursor-pointer hover:scale-110 hover:text-secondaryColor"
            onClick={() => onEdit("email", true)}
          />
        )}
      </FormWrapper>*/}
      <FormWrapper>
        <div className="flex w-full items-center">
          <label htmlFor="gender" className="w-24 text-xs capitalize text-secondaryColor">
            Gender
          </label>
          <div className="w-full max-w-xs">
            {isEdit.gender ? (
              <select
                id="gender"
                {...register("gender")}
                className="w-full rounded border border-gray03 bg-transparent px-3 py-2 focus:outline-none"
              >
                <option hidden>- -</option>
                <option className="text-xl text-gray-900" value="male">
                  Male
                </option>
                <option className="text-xl text-gray-900" value="female">
                  Female
                </option>
              </select>
            ) : (
              <p className="px-3 py-2 capitalize">{"gender" || "- -"}</p>
            )}
          </div>
        </div>
        {isEdit.gender ? (
          <button onClick={onUpdate}>
            <SvgCheckCircle className="h-6 w-6 cursor-pointer text-green-500 hover:scale-110" />
          </button>
        ) : (
          <SvgEdit
            fill="#363636"
            className="cursor-pointer hover:scale-110 hover:text-secondaryColor"
            onClick={() => onEdit("gender", true)}
          />
        )}
      </FormWrapper>
    </form>
  )
}

export default UserInfoForm
