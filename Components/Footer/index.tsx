import Image from "next/image"
import Contacts from "./Contacts"
import Link from "next/link"

const socials = [
  {
    socialUrl: "#facebook",
    alt: "facebook",
    icon: "ri_facebook-fill.svg",
  },
  {
    socialUrl: "#twitter",
    alt: "twitter",
    icon: "mdi_twitter.svg",
  },
  {
    socialUrl: "#github",
    alt: "github",
    icon: "mdi_github.svg",
  },
  {
    socialUrl: "#linkedin",
    alt: "linkedin",
    icon: "mdi_linkedin.svg",
  },
  {
    socialUrl: "#slack",
    alt: "slack",
    icon: "ri_slack-fill.svg",
  },
]

// dummy data
const footerLinks = [
  {
    name: "Lorem Ipsum",
    footerUrl: "#link1",
  },
  {
    name: "Lorem Ipsum",
    footerUrl: "#link2",
  },
  {
    name: "simply dummy",
    footerUrl: "#link3",
  },
  {
    name: "simply dummy",
    footerUrl: "#link4",
  },

  {
    name: "Lorem Ipsum ",
    footerUrl: "#link5",
  },
  {
    name: "Lorem Ipsum ",
    footerUrl: "#link6",
  },
  {
    name: "simply dummy",
    footerUrl: "#link7",
  },
  {
    name: "simply dummy",
    footerUrl: "#link8",
  },
  {
    name: "Lorem",
    footerUrl: "#link9",
  },
  {
    name: "Lorem",
    footerUrl: "#link10",
  },
]

const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-backgroundColor text-primaryColor">
      <div className="w-screen mt-28">
        {/* TOP */}
        <div className="max-w-7xl w-90 mx-5 lg:mx-10 xl:mx-auto grid grid-cols-1 place-items-center  gap-16
                                        lg:grid-cols-3
        ">
          <Contacts
            imageUrl="/carbon_location-filled.svg"
            alt="Find us"
            name="Find us"
            description="Lorem Ipsum is simply dummy text of the printing"
          />
          <Contacts
            imageUrl="/material-symbols_call.svg"
            alt="Contact us"
            name="Contact us"
            description="Lorem Ipsum is simply dummy text of the printing"
          />
          <Contacts
            imageUrl="/mingcute_mail-open-fill.svg"
            alt="Mail us"
            name="Mail us"
            description="Lorem Ipsum is simply dummy text of the printing"
          />
        </div>
        <hr className="max-w-7xl my-16 mx-5 lg:mx-10 xl:mx-auto opacity-25"/>

        {/* MIDDLE */}
        <div className="max-w-7xl mt-10 mb-28 mx-5 lg:mx-10 xl:mx-auto grid grid-cols-1 place-items-center gap-16
                                                      lg:grid-cols-3
        ">
          <div className="flex flex-col gap-2">
            <div>
              <Link href="/"> 
                <Image src="/companyLogo.png" alt="Codebility" width={250} height={30} />
              </Link>
            </div>
            <div className="max-w-xs text-sm text-secondaryColor">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <h1 className="text-xl font-semibold">Lorem Ipsum</h1>
            <div className="flex max-w-sm relative">
              <input
                type="text"
                placeholder="Email Address..."
                className="h-10 w-80 rounded-full pr-14 bg-inputColor px-7 text-sm focus:outline-none"
              />
               <Image src="/send.svg" alt="send" width={53} height={53} className="absolute -right-3 hover:cursor-pointer" />
            </div>
            <p className="text-sm text-secondaryColor">Lorem Ipsum is simply dummy text of the printing</p>
            <h2 className="text-md font-semibold">Follow us</h2>
            <div className="flex gap-5">
              {socials.map((social) => (
                <Link href={social.socialUrl}>
                  <Image src={social.icon} alt={social.alt} width={30} height={30} />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold">Lorem Ipsum</h1>
            <div className="grid grid-cols-2 gap-x-10 gap-y-3">
              {footerLinks.map((footerLink, index) => (
                <Link href={footerLink.footerUrl} key={index} className="text-sm text-secondaryColor">
                  {footerLink.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="h-20 flex justify-center items-center bg-footerColor">
          <p className="text-sm text-secondaryColor">
            Copyright &copy; All Right Reserved <Link href="/"><span className="text-primaryColor font-bold hover:underline">CODEBILITY</span></Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
