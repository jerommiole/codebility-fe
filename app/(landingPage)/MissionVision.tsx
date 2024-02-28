import { SectionWrapper, H1, Paragraph } from "@/Components/landingPage"
import missionVisionImage from "@/public/assets/images/mission-vision-image.png"
import Image from "next/image"

const MissionVision = () => {
  return (
    <SectionWrapper className="lg:bg-gradient-radial">
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-6">
        <div className="my-auto flex basis-[50%] flex-col gap-4 text-center lg:basis-[25%] lg:text-end">
          <H1 className="text-primaryColor">Mission</H1>
          <Paragraph className="lg:max-w-auto mx-auto max-w-[400px]">
            At Codebility, we ignite a passion for technology, offering immersive programs in Web Development, Mobile
            Development, UI/UX Design, and Digital Marketing.
          </Paragraph>
          <Paragraph className="lg:max-w-auto mx-auto max-w-[400px]">
            {" "}
            Beyond imparting skills, we believe in the transformative power of coding as a tool for a brighter future.
            Join us in sculpting your path as tomorrow's digital architect.
          </Paragraph>
        </div>
        <div className="hidden items-center justify-center lg:flex lg:basis-[50%]">
          <Image src={missionVisionImage} alt="Codebility Devices" width={700} height={466} />
        </div>
        <div className="my-auto flex basis-[50%] flex-col gap-4 text-center lg:basis-[25%] lg:text-start">
          <H1 className="text-primaryColor">Vision</H1>
          <Paragraph className="lg:max-w-auto mx-auto max-w-[400px] lg:text-start">
            Codebility envisions a world where coding unleashes innovation. We aspire to be a global hub, nurturing a
            community proficient in Web, Mobile, UI/UX, and Digital Marketing.
          </Paragraph>
          <Paragraph className="lg:max-w-auto mx-auto max-w-[400px] lg:text-start">
            Our goal is to empower learners, shaping them into accomplished digital architects who drive the future of
            the tech industry.
          </Paragraph>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default MissionVision
