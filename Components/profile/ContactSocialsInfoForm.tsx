import React, { useState } from "react"
import { SvgCheckCircle, SvgEdit } from "../../assets/icons"
import { SubmitHandler, useForm } from "react-hook-form"

interface IFormData {
  phone?: string
  github?: string
  facebook?: string
  whatsApp?: string
  telegram?: string
  skype?: string
  linkedIn?: string
}

interface Props {
  data: IFormData
}

const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center justify-between border-b border-gray03 py-[19px] pl-[39px]">{children}</div>
}

const ContactSocialsInfoForm: React.FC<Props> = ({ data }) => {
  const [isEdit, setIsEdit] = useState<Record<string, boolean>>({
    phone: false,
    github: false,
    facebook: false,
    whatsApp: false,
    telegram: false,
    skype: false,
    linkedIn: false,
  })

  const [formData, setFormData] = useState<string | any>(data)

  const onEdit = (key: string, value: boolean) => {
    setIsEdit((prevIsEdit) => ({ ...prevIsEdit, [key]: value }))
  }

  const onUpdate = async () => {
    await onSubmit(watch())
    setIsEdit({
      phone: false,
      github: false,
      facebook: false,
      whatsApp: false,
      telegram: false,
      skype: false,
      linkedIn: false,
    })
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormData>({
    defaultValues: data,
  })

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    console.log(data)
    setFormData(data)
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
      <div>{Object.entries(data).map(([key, value]) => renderField(key, value))}</div>
    </form>
  )
}

export default ContactSocialsInfoForm
