import { Button } from "@/Components/ui/button"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const ThankYouPage = () => {
  return (
    <section className="flex h-screen w-screen items-center justify-center overflow-hidden bg-backgroundColor text-primaryColor">
      <div className="flex flex-col gap-8 text-center lg:gap-10">
        <Link href="/">
          <Image
            className="mx-auto h-auto w-[250px] md:w-[350px] lg:w-[400px]"
            src="/assets/svgs/codebility-teal.svg"
            alt="Codebility Logo"
            priority
            width={400}
            height={90}
          />
        </Link>

        <p className="text-lg md:text-3xl lg:text-4xl">You have successfully signed up!</p>
        <div>
          <p className="mx-auto text-xs text-gray md:text-lg lg:max-w-[500px] lg:text-lg">
            Please wait for approval as an intern.
          </p>
          <p className="mx-auto text-xs text-gray md:text-lg lg:max-w-[500px] lg:text-lg">
            You will receive an email notification with the status.
          </p>
        </div>

        <Link
          href="/"
          className="mx-auto h-12 w-44 rounded-full bg-gradient-to-r from-teal via-blue-100 to-violet p-0.5 hover:bg-gradient-to-br"
        >
          <Button className="flex h-full w-full items-center justify-center rounded-full bg-black-500 text-sm text-white lg:text-lg">
            Go to Home Page
          </Button>
        </Link>

        <div className="hero-gradient absolute top-0 z-10 h-[400px] w-[200px] overflow-hidden blur-[200px] lg:w-[500px] lg:blur-[350px]"></div>

        <div className="hero-bubble">
          {Array.from({ length: 4 }, (_, index) => (
            <div key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ThankYouPage
