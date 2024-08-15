"use client"
import Image from 'next/image'
import Link from 'next/link';
import useSWR from 'swr';
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation';

import 'swiper/css';
import 'swiper/css/pagination';
import urlFor from './helpers/displaySanityImages';
import fetcher from './helpers/fetcher';

export default function Home() {
  const [showPopup, setShowPopup] = useState<boolean>(false)
  const url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22Products%22%5D+%7B%0A++ProductName%2C%0A++++_id%2C%0A++++ProductCoverImage%2C%0A++++ProductDataSheet%2C%0A++++ProductType%2C%0A++++ProductImage%2C%0A++%22ProductDataSheet%22%3A+ProductDataSheet.asset-%3Eurl%0A%7D`
  const { data } = useSWR(url, fetcher)
  const router = useRouter()
  const path = usePathname()


  useEffect(() => {
    let count: number = 0
    setInterval(() => {
      count += 1
      console.log(count)
      if (count % 4) { setShowPopup(true) } else { setShowPopup(false) }
    }, 5000)

  })

  return (
    <main className=''>
      <section className="text-center pb-[69px] pt-[198px] sm:pb-[98px] sm:pt-[196px] bg-[#F9F9F9]">
        <div className="container mx-auto">
          <h1 className="pb-[24px] text-[48px] font-heading leading-[47px] sm:text-[96px] sm:leading-[94px]" data-aos="fade-up">
            <span className="text-[#714E2D] ">Sustainably Grown,</span> <br />
            <span className="text-[#EE821F]">Globally Shipped.</span>
          </h1>
          <p className="font-body text-[#696969] text-[16px] sm:text-[20px] leading-normal font-[400] w-[80%] lg:w-[40%] mx-auto" data-aos="fade-down">Our commitment to quality, freshness, and ethical farming sets us apart as your go-to source for premium agricultural products.</p>
        </div>
      </section>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper relative"
      >
        <SwiperSlide className=''>
          <Image src="https://images.pexels.com/photos/55766/pexels-photo-55766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={1500} height={500} alt="" objectFit='cotain' className="w-[100%] h-[600px] 2xl:h-[800px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://images.pexels.com/photos/1580982/pexels-photo-1580982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={1500} height={500} alt="" objectFit='cotain' className="w-[100%] h-[600px] 2xl:h-[800px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={1500} height={500} alt="" objectFit='cotain' className="w-[100%] h-[600px] 2xl:h-[800px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://res.cloudinary.com/dqew5naa7/image/upload/v1705222619/Rectangle_5901_hwjpyv.webp" width={1500} height={500} alt="" objectFit='cotain' className="w-[100%] h-[600px] 2xl:h-[800px] object-cover" />
        </SwiperSlide>
        <div className={`absolute bg-white w-[448px] top-[40%] right-0 z-[1] p-[30px] hidden ${showPopup ? "opacity-[1]" : "opacity-0"} sm:block transition-one`}>
          <h1 className='font-heading text-[#49D94F] text-[24px] leading-normal'>Did you know?</h1>
          <p className='font-body text-[#696969] text-[13px]'>Rooted in our dedication to value addition and sustainability, we{"'"}ve partnered with smallholder farmers in rural areas, offering them training in sustainable agriculture while overseeing our farms.</p>
        </div>
      </Swiper>

      <section className="mt-[100px] container mx-auto sm:px-[20px] xl:px-0">
        <h1 className="text-[40px] sm:text-[64px] font-heading leading-[47px] xl:text-[80px] sm:leading-normal text-center" data-aos="fade-up">
          <span className="text-[#714E2D]">OUR</span>{" "}
          <span className="text-[#EE821F]">PRODUCTS</span>
        </h1>
        <p className="text-[#696969] font-body text-[16px] sm:text-[20px] leading-normal font-[400] w-[80%] lg:w-[40%] mx-auto text-center" data-aos="fade-up" data-aos-duration="1000">Our commitment to quality, freshness, and ethical farming sets us apart as your go-to source for premium agricultural products.</p>
        <div className='pt-[100px] hidden lg:flex'>
          <div className='flex gap-[40px] xl:gap-[75px]'>
          {data?.result?.filter((e: any, id: number) => e.ProductType == "Itaja").map((e: any, id: React.Key | null | undefined) => {
                return (
                  <div key={id} className='cursor-pointer relative group hover:scale-[1.03] transition-one'>
                    <Image src={urlFor(e.ProductImage.asset._ref).url()} width={1500} height={500} alt="" objectFit='contain' className="w-[100%] h-[550px] 2xl:h-[750px] object-cover group-hover:scale-[1.03] shadow-md" data-aos="fade-right" />
                    <div className='text-[#3E4A31] bg-[#EBF7EC] h-[143px] items-center justify-center text-[36px] underline font-body absolute z-[1] bottom-0 w-[100%] opacity-0 group-hover:opacity-100 flex transition-one'>
                      <Link href={`/Products/${e._id}`}>
                        <h1 data-aos="zoom-in">{e.ProductName}</h1>
                      </Link>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className='pt-[100px] flex flex-col gap-[40px] lg:hidden px-[20px]'>
        {data?.result?.filter((e: any, id: number) => e.ProductType == "Itaja").map((e: any, id: React.Key | null | undefined) => {
            return (
              <div className='cursor-pointer relative group' key={id}>
                <Image src={urlFor(e.ProductImage.asset._ref).url()} width={1500} height={500} alt="" objectFit='contain' className="w-[100%] h-[370px] object-cover" />
                <div className='text-[#3E4A31] bg-[#EBF7EC] h-[80px] items-center justify-center text-[20px] font-body absolute z-[1] bottom-0 w-[100%] flex'>
                  <Link href={`/Products/${e._id}`}>
                    <h1 data-aos="zoom-in">{e.ProductName}</h1>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
        <div className='pt-[60px] sm:pt-[110px] flex justify-center' data-aos="zoom-in">
          <button className='group flex items-center gap-[8px] text-[16px] sm:text-[24px] font-body bg-white text-[#2D714A] hover:bg-[#2D714A] hover:text-white px-[30px] sm:px-[97px] py-[15px] sm:py-[21px] border border-[#2D714A] transition-one' onClick={() => { router.push("/Products") }}>
            DISCOVER <FaArrowRightLong className="rotate-[-45deg] group-hover:rotate-[0] transition-one" />
          </button>
        </div>
      </section>

      <section className='pt-[50px] sm:pt-[100px] mt-[50px] sm:mt-[100px] flex flex-col lg:flex-row gap-[40px] xl:gap-[100px] items-center overflow-hidden'>
        <div className='w-[100%] px-[20px] sm:pl-[20px] xl:pl-[80px] 2xl:pl-[127px]' data-aos="fade-right">
          <h1 className='text-[40px]  text-center lg:text-start sm:text-[64px] lg:text-[72px] font-heading leading-normal pb-[20px]'><span className='text-[#EE821F]'>WHO </span><span className='text-[#714E2D]'>ARE WE?</span></h1>
          <p className='text-[#696969] font-body text-[16px] sm:text-[20px] leading-normal text-justify'>
          Bonteva Iis a distinguished Indigenous Nigerian Agro-Allied Company cultivated from a wealth of Agriculture, Freight, and Logistics expertise. Our journey encompasses various agricultural domains, including Poultry Farming, Aquaculture, Piggeries, and Vegetable Farming. With a seasoned management team boasting over 30 years of hands-on experience, we bring a unique blend of proficiency to the dynamic agro-allied landscape.
            We are more than just a company; we are passionate stewards of sustainable agricultural practices, unwavering champions of innovation, and dedicated contributors to Nigeria{"'"}s economic development.
            At Bonteva, our identity is forged by a steadfast commitment to excellence, a customer-centric ethos, and a visionary pursuit of leading Nigeria{"'"}s agricultural value chain. Join us on this exciting journey of growth and sustainability!
          </p>
        </div>
        <div className='w-[100%] px-[20px] sm:px-0' data-aos="fade-left">
          <Image src="/assets/whoarewe.png" width={1500} height={500} alt="" objectFit='contain' className="w-[100%] h-[550px] 2xl:h-[750px] object-cover sm:px-0" />
        </div>
        <div className='pt-[60px] flex sm:hidden justify-center '>
          <button className='group flex items-center gap-[8px] text-[16px] sm:text-[24px] font-body bg-white text-[#2D714A] hover:bg-[#2D714A] hover:text-white px-[30px] sm:px-[97px] py-[15px] sm:py-[21px] border border-[#2D714A]' onClick={() => { router.push("/About") }}>
            DISCOVER <FaArrowRightLong className="rotate-[-45deg] group-hover:rotate-[0] transition-one" />
          </button>
        </div>
      </section>

      <section className='pt-[50px] sm:pt-[100px] my-[50px] sm:mt-[100px] flex flex-col lg:flex-row-reverse gap-[40px] xl:gap-[100px] items-center overflow-hidden'>
        <div className='w-[100%] px-[20px] sm:pr-[20px] xl:pr-[80px] 2xl:pr-[127px]' data-aos="fade-left">
          <h1 className='text-[40px]  text-center lg:text-start sm:text-[64px] xl:text-[72px] font-heading leading-normal pb-[20px]'><span className='text-[#EE821F]'>WHY </span><span className='text-[#714E2D] uppercase'>Bonteva?</span></h1>
          <p className='text-[#696969] font-body text-[16px] sm:text-[20px] leading-normal pt-[10px] text-justify'>
            We are a prominent Indigenous Nigerian Agro-Allied Company with over 30 years of hands-on experience in Agriculture, Freight, and Logistics, is a leader in Poultry Farming, Aquaculture, Piggeries, and Vegetable Farming. Distinguished by its commitment to fairtrade practices, sustainability, and innovation, the company aims to be a trailblazer in Nigeria{"'"}s agricultural value chain. Beyond being a company, we see ourselves as stewards of sustainable agricultural practices, strategically focusing on excellence, customer satisfaction, and environmental stewardship. Through a diversified portfolio and a vision to reshape the agricultural landscape, Bonteva strives to provide high-quality products and services that positively impact the communities it serves, making it the ideal partner for those dedicated to excellence and positive change in Nigeria{"'"}s agro-allied industry.
          </p>
        </div>
        <div className='w-[100%] px-[20px] sm:px-0' data-aos="fade-right">
          <Image src="/assets/whybonbridge.png" width={1500} height={500} alt="" objectFit='contain' className="w-[100%] h-[550px] 2xl:h-[750px] object-cover sm:px-0" />
        </div>
        <div className='pt-[60px] flex sm:hidden justify-center '>
          <button className='group flex items-center gap-[8px] text-[16px] sm:text-[24px] font-body bg-white text-[#2D714A] hover:bg-[#2D714A] hover:text-white px-[30px] sm:px-[97px] py-[15px] sm:py-[21px] border border-[#2D714A] transition-one' onClick={() => { router.push("/About") }}>
            DISCOVER <FaArrowRightLong className="rotate-[-45deg] group-hover:rotate-[0] transition-one" />
          </button>
        </div>
      </section>
    </main >
  )
}
