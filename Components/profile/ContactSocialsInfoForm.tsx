"use client"

import React, { useState } from "react"
import { SvgCheckCircle, SvgEdit } from "../../public/assets/icons"
import { SubmitHandler, useForm } from "react-hook-form"
import { updateProfile } from "../../app/api"

interface IFormData {
  phone_no?: string
  github_link?: string
  fb_link?: string
  linkedin_link?: string
  whatsapp_link?: string
  skype_link?: string
  telegram_link?: string
  portfolio_website?: string
  userId?: any
}

interface Props {
  data: any
}

const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center justify-between border-b border-gray03 py-[19px] pl-[39px]">{children}</div>
}

const ContactSocialsInfoForm: React.FC<Props> = ({ data }) => {
  const [isEdit, setIsEdit] = useState<Record<string, boolean>>({
    phone_no: false,
    github_link: false,
    fb_link: false,
    linkedin_link: false,
    whatsapp_link: false,
    telegram_link: false,
    linkedIn: false,
    portfolio_website: false,
  })

  const myUserId = "data?.profile[0]?.userId"

  const filterSocialLink: any = Object.entries(data)
    .filter(([key, value]) => key.endsWith("_link"))
    .reduce((acc: any, [key, value]) => {
      acc[key] = value
      return acc
    }, {})

  const [formData, setFormData] = useState<string | any>(filterSocialLink)

  const onEdit = (key: string, value: boolean) => {
    setIsEdit((prevIsEdit) => ({ ...prevIsEdit, [key]: value }))
  }

  const onUpdate = async () => {
    await onSubmit(watch())
    setIsEdit({
      phone_no: false,
      github_link: false,
      fb_link: false,
      linkedin_link: false,
      whatsapp_link: false,
      telegram_link: false,
      linkedIn: false,
      portfolio_website: false,
    })
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormData>({
    defaultValues: filterSocialLink,
  })

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    const res = await updateProfile(myUserId, data)
    setFormData(res)
  }

  const renderField = (key: keyof IFormData | string | any, value: string) => {
    return (
      <FormWrapper key={key}>
        <div className="flex w-full items-center">
          <label htmlFor={key} className="w-24 text-xs capitalize text-secondaryColor">
            {key}
          </label>
          <div className="w-full max-w-xs">
            {isEdit[key] ? (
              <input
                id={key}
                type="text"
                {...register(key)}
                className="w-full rounded border border-gray03 bg-transparent px-3 py-2 focus:outline-none"
              />
            ) : (
              <p className="px-3 py-2">{formData[key]}</p>
            )}
          </div>
        </div>
        {isEdit[key] ? (
          <button onClick={onUpdate}>
            <SvgCheckCircle className="h-6 w-6 cursor-pointer text-green-500 hover:scale-110" />
          </button>
        ) : (
          <SvgEdit
            fill="#363636"
            className="cursor-pointer hover:scale-110 hover:text-secondaryColor"
            onClick={() => onEdit(key, true)}
          />
        )}
      </FormWrapper>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>{Object.entries(filterSocialLink).map(([key, value]: any) => renderField(key, value))}</div>
    </form>
  )
}

export default ContactSocialsInfoForm
