import Link from "next/link"

const SigninFooter = () => {
  return (
    <div className="flex justify-evenly">
      <Link href="/privacy" className="lg:text-md md:text-md cursor-pointer text-sm hover:underline lg:text-lg">
        Privacy Policy
      </Link>
      <Link href="/terms" className="lg:text-md md:text-md cursor-pointer text-sm hover:underline lg:text-lg">
        Terms and Conditions
      </Link>
    </div>
  )
}

export default SigninFooter
