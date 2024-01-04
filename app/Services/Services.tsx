import Image from "next/image" // Import the next/image component
import Card from "../../Components/Card"

const Services = () => {
  //dummy
  const Text = [
    {
      num: "01",
      title: "Lorem Ipsum ",
    },
    {
      num: "02",
      title: "Lorem Ipsum ",
    },
    {
      num: "03",
      title: "Lorem Ipsum ",
    },
    {
      num: "04",
      title: "Ipsum Lorem ",
    },
  ]

  return (
    <section
      id="services"
      className="my-auto flex flex-col items-center justify-center bg-backgroundColor px-5 lg:pt-48 xl:px-56 "
    >
      {/*Moon Image*/}
      <div className="">
        <Image
          src="/Moon.png"
          alt="Moon"
          className="absolute -top-10 right-0 h-[200px] w-[200px] scale-x-[-1] transform md:h-[300px] md:w-[300px] lg:-top-10   lg:left-24 lg:transform-none"
          width={200}
          height={200}
        />
      </div>
      <div className="mt-32 flex flex-col justify-center lg:mt-0 lg:flex-row lg:gap-16">
        {/*What We Do Column*/}
        <div className="xl:w-1/2">
          <p className=" text-primaryColor">Our Services</p>
          <h1 className="text-5xl font-semibold">What We Do</h1>
          <p className="mt-2 text-secondaryColor">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s,
          </p>
          {/* Hover Text */}
          <div className="mt-10 flex flex-col gap-3">
            {Text.map((item, index) => (
              <div key={index} className="flex w-[180px] justify-end gap-5  duration-300 hover:w-[200px]">
                <p className="font-semibold hover:text-primaryColor">{item.num}</p>
                <div className="w-[25px] -translate-y-2 border-b-2 border-white hover:w-[50px]"></div>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
          <p className="mt-10">
            Explore the limitless possibilities of what we do, as we turn dreams into code and aspirations into reality.
          </p>
        </div>

        <div className="mt-32 flex gap-2 md:gap-3 lg:mt-0 ">
          {/* Cards Column */}
          <div className="flex flex-col gap-2 md:gap-3">
            <Card
              title="Skill Mastery"
              description="Committed to empowering individuals to become Full Stack Developers."
              imageUrl="mastery.png"
              CardColor="#0D0D0D"
              Align="center"
            />
            <Card
              title="Community Building"
              description="Committed to empowering individuals to become 
            Full Stack Developers."
              imageUrl="community.png"
              CardColor="#111111"
              Align="center"
            />
          </div>
          {/* Cards Column Translate-y*/}
          <div className="flex -translate-y-10 flex-col gap-2 md:gap-3">
            <Card
              title="Innovation"
              description="We serve as a dynamic hub for innovation, fostering a creative environment "
              imageUrl="innovation.png"
              CardColor="#111111"
              Align="center"
            />
            <Card
              title="Skill Mastery"
              description="Committed to empowering individuals to become 
            Full Stack Developers."
              imageUrl="Bulb.png"
              CardColor="#0D0D0D"
              Align="center"
            />
          </div>
        </div>
      </div>

      <div className="mb-16 mt-32 flex w-full flex-col gap-10 md:mt-56 ">
        <div>
          <div className="">
            <h1 className="services z-10 text-center text-4xl font-bold tracking-wider md:text-5xl">SERVICES</h1>
            <h1 className="services -translate-y-[50px] text-center text-6xl font-bold tracking-wider opacity-5 md:-translate-y-[75px] md:text-8xl">
              SERVICES
            </h1>
          </div>

          <p className="text-center text-secondaryColor ">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.{" "}
          </p>
        </div>
        {/* Services Cards */}
        <div className="flex flex-col justify-center gap-5 bg-backgroundColor px-20 md:mx-0 md:flex-row md:gap-20 lg:mt-10">
          <Card
            title="Web Design"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
            imageUrl="WebIcon.png"
            link="Read More"
            icon="Arrow.png"
            CardColor=""
          />
          <Card
            title="Graphic Design"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
            imageUrl="SharpIcon.png"
            link="Read More"
            icon="Arrow.png"
            CardColor=""
          />
          <Card
            title="CMS"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
            imageUrl="Cms.png"
            link="Read More"
            icon="Arrow.png"
            CardColor=""
          />
        </div>
        <p className="mx-auto mt-10 max-w-[550px] text-sm text-secondaryColor md:text-center">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.{" "}
        </p>
      </div>
    </section>
  )
}

export default Services
