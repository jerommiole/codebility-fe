import React from "react"
import Link from "next/link"
import Image from "next/image"

const Page = () => {
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

  const contactList = [
    {
      name: "phone",
      details: "+63123456789",
    },
    {
      name: "email",
      details: "LoremIpsum@gmail.com",
    },
    {
      name: "website",
      details: "LoremIpsum.com",
    },
    {
      name: "github",
      details: "Lorem@github.io",
    },
  ]

  const educList = [
    {
      name: "Dummy Univ",
      details: "Lorem Ipsum is simply",
      date: "2019-2023",
    },
    {
      name: "Dummy Univ",
      details: "Lorem Ipsum is simply",
      date: "2019-2023",
    },
    {
      name: "Dummy Univ",
      details: "Lorem Ipsum is simply",
      date: "2019-2023",
    },
  ]

  const skillList = [
    {
      name: "Angular",
      icon: "/techStack/angular.png",
    },
    {
      name: "CSS",
      icon: "/techStack/css.png",
    },
    {
      name: "Github",
      icon: "/techStack/mdi_github.png",
    },
    {
      name: "Firebase",
      icon: "/techStack/firebase.png",
    },
    {
      name: "Bootstrap",
      icon: "/techStack/bootstrap.png",
    },
    {
      name: "Oracle",
      icon: "/techStack/oracle.png",
    },
    {
      name: "HTML",
      icon: "/techStack/html.png",
    },
  ]

  return (
    <section className="text-gray01 container mx-auto max-w-5xl">
      <div className="grid h-[30rem] grid-cols-6 grid-rows-3 pt-[6.3rem]">
        <div className="col-span-2 border-b border-b-tealColor">
          <h2 className="mb-3 text-2xl font-medium text-white md:text-5xl">LOREM IPSUM</h2>
          <p className="max-w-60 text-xs font-normal">Lorem Ipsum is simply dummy text has been the industry's </p>
          <span className="w-full"></span>
        </div>
        <div className="row-span-2 flex items-center">
          <div className="h-full w-[10.6875rem] bg-indigo-950"></div>
        </div>
        <div className="col-span-2 col-start-4 row-start-2 flex items-end justify-end">
          <div>
            <div className="flex gap-5">
              {socials.map((social) => (
                <Link href={social.socialUrl}>
                  <Image src={social.icon} alt={social.alt} width={30} height={30} />
                </Link>
              ))}
            </div>
            <p className="text-xs">Lorem Ipsum is simply dummy text has been the industry's </p>
          </div>
        </div>
        <div className="col-span-2 row-start-3">
          <div>
            <p className="text-base text-tealColor">About Me</p>
            <p className="pl-4 pt-4 text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-base text-tealColor">Work Experience</p>
      <section className="grid-row-4 grid grid-cols-6">
        <div className="col-span-2 pb-14">
          <p className="text-base text-tealColor">Contacts</p>
          <div className="pl-4 pt-5 text-xs">
            <ul className="flex w-full flex-col gap-3">
              {contactList.map((contact) => (
                <div className="flex">
                  <li className="flex w-20 capitalize">
                    <p className="text-xs">{contact.name}</p>
                  </li>
                  <li className="flex w-full capitalize">
                    <p className="text-xs">{contact.details}</p>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-2 row-start-2 pb-14">
          <p className="text-base text-tealColor">Education</p>
          <div className="pb-6 pl-4 pt-5 text-xs">
            <ul className="flex w-full flex-col gap-3">
              {educList.map((educ) => (
                <li className="flex flex-col capitalize">
                  <p className="text-xs">{educ.name}</p>
                  <p className="text-xs">{educ.details}</p>
                  <p className="text-xs">{educ.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-2 row-start-3 pb-14">
          <p className="text-base text-tealColor">Skills</p>
          <div className="pb-6 pl-4 pt-5 text-xs">
            <ul className="flex w-full items-center gap-3">
              {skillList.map((skill) => (
                <li>
                  <Image src={skill.icon} alt={skill.name} width={20} height={20} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-2 row-span-10 mt-10">
          <div className="flex flex-col">
            <div className="relative border-l border-tealColor pb-6 pl-10">
              <p className="mb-1 text-xs text-secondaryColor">April 2023</p>
              <p className="text-gray01 mb-2 text-base">Senior UI/UX Designer</p>
              <p className="text-gray01 text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,
              </p>
              <span className="absolute -left-[4px] bottom-0 h-2 w-2 rounded-full bg-tealColor">&nbsp;</span>
            </div>
            <div className="relative border-l border-tealColor pb-6 pl-10">
              <p className="mb-1 text-xs text-secondaryColor">April 2023</p>
              <p className="text-gray01 mb-2 text-base">Senior UI/UX Designer</p>
              <p className="text-gray01 text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,
              </p>
              <span className="absolute -left-[4px] bottom-0 h-2 w-2 rounded-full bg-tealColor">&nbsp;</span>
            </div>
            <div className="relative border-l border-tealColor pb-6 pl-10">
              <p className="mb-1 text-xs text-secondaryColor">April 2023</p>
              <p className="text-gray01 mb-2 text-base">Senior UI/UX Designer</p>
              <p className="text-gray01 text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,
              </p>
              <span className="absolute -left-[4px] bottom-0 h-2 w-2 rounded-full bg-tealColor">&nbsp;</span>
            </div>{" "}
            <div className="relative border-l border-tealColor pb-6 pl-10">
              <p className="mb-1 text-xs text-secondaryColor">April 2023</p>
              <p className="text-gray01 mb-2 text-base">Senior UI/UX Designer</p>
              <p className="text-gray01 text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,
              </p>
              <span className="absolute -left-[4px] bottom-0 h-2 w-2 rounded-full bg-tealColor">&nbsp;</span>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Page
