import { SectionWrapper, H1, Paragraph } from '@/Components/landingPage'
import MissionVisionImage from '@/public/assets/icons/MissionVision.svg'
import Image from "next/image"

const MissionVision = () => {
  return (
    <SectionWrapper style={{ background: 'radial-gradient(circle at center,rgba(255, 255, 255, 0.2) 0%, transparent 50%)' }}>
      <div className="flex flex-col lg:flex-row gap-14 lg:gap-0">
        <div className="flex flex-col gap-4 basis-[45%] text-end pr-6 xl:pr-[initial] relative top-12">
          <H1 className="text-primaryColor text-5xl lg:text-6xl !font-extrabold">
            Mission
          </H1>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </Paragraph>
          <p className="text-primaryColor">
            Lorem Ipsum
          </p>
        </div>
        <div className="flex basis-[100%] items-center justify-center w-full h-full">
          <Image src={MissionVisionImage} alt='missionvision-image'/>
        </div>
        <div className="flex flex-col gap-4 text-start basis-[45%] relative -top-12 lg:top-12 pl-6 xl:pl-[initial]">
          <p className="text-primaryColor">
            Lorem Ipsum
          </p>
          <H1 className="text-primaryColor text-5xl lg:text-6xl !font-extrabold">
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
