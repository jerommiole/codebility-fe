import AuthForm from "./components/AuthForm"
import Image from "next/image"

const Sign = () => {
  return (
    <div className="flex h-full sm:h-screen">
      <div className="flex flex-1 flex-col justify-center">
        <div className="p-12 lg:p-20 2xl:p-36">
          <Image src="/codebilityLogoBlue.png" width={220} height={50} alt="codebilityLogoBlue" />
          <h1 className="my-5 text-5xl font-semibold">Lorem Ipsum</h1>
          <h2 className="my-14 text-xl">Sign in</h2>
          <AuthForm />
          <div className="my-20 text-center">
            Have An Account? <span className="text-blue-500">Sign In</span>
          </div>
          <div className="flex justify-between">
            <span>Privacy Policy</span>
            <span>Terms and Conditions</span>
          </div>
        </div>
      </div>
      <div className="relative hidden flex-1 flex-col justify-between lg:flex">
        <div className="absolute inset-0 ">
          <Image
            src="/SigninSplash.png"
            alt="splash-signin"
            fill
            className="object-cover"
            // className="z-1 absolute top-0 h-full w-full bg-red-500"
          />
        </div>

        <div className="z-10 mt-32 p-10 text-right">
          <h1 className=" text-5xl font-semibold text-white">
            Lorem ipsum dolor <br /> sit amet
          </h1>
        </div>
        <div className="z-10 px-20 py-32 2xl:px-32">
          <div className="2xl:ml-32">
            <h1 className="text-5xl font-semibold text-white">Lorem ipsum</h1>
            <p className="text-base">Nisi lacus sed viverra tellus in hac habitasse platea dictumst</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sign
