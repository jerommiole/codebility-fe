import React from "react"

interface props {
  id: string
  checked: boolean
  onChange: () => void
}

const StyledRadio = ({ id, checked, onChange }: props) => {

    return (
      <div className="flex items-center">
        <div
          className={`appearance-none border bg-transparent rounded border-[#8E8E8E] h-4 w-4 flex justify-center items-center cursor-pointer ${checked ? 'border-white bg-purple-500 ' : 'border-white'}`}
          onClick={onChange}
        >
          <input
            id={id}
            type="radio"
            checked={checked}
            onChange={onChange}
            className="appearance-none"
          />
          {checked && <span className="block w-3 h-3 bg-purple-500 rounded-full" />}
        </div>
      </div>
    )
  }


export default StyledRadio
