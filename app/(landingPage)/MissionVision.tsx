import H1 from "@/Components/landingPage/H1"
import Paragraph from "@/Components/landingPage/Paragraph"
import SectionWrapper from "@/Components/landingPage/SectionWrapper"
import MissionVisionImage from '@/public/assets/icons/MissionVision.svg'
import Image from "next/image"

const MissionVision = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="text-end">
          <H1 className="text-primaryColor text-5xl lg:text-6xl">
            Mission
          </H1>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </Paragraph>
          <p className="text-primaryColor">
            Lorem Ipsum
          </p>
        </div>
        <div>
          <Image src={MissionVisionImage} alt='missionvision-image' />
        </div>
        <div className="text-start">
          <p className="text-primaryColor">
            Lorem Ipsum
          </p>
          <H1 className="text-primaryColor text-5xl lg:text-6xl">
            Vision
          </H1>
          <Paragraph className="text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </Paragraph>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default MissionVision
