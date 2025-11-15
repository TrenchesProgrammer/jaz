import Image from "next/image"
import { Bellefair } from "next/font/google";
const bellefair = Bellefair({ subsets: ["latin"], weight: "400" });
const page = () => {
  return (
    <div className='pt-40 padding-container'>
      <section className="mb-20">
        <h2 className={`${bellefair.className} text-4xl md:text-5xl`}>GALLERY</h2>
        <p className="text-[#e0e0e0] mt-2">EXPLORE OUR EVENT PHOTOS</p> 
      </section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-4">
          <Image src="/gallery-1.svg" className="w-full h-full object-cover rounded-lg" alt="" height={200} width={200}/>
          <Image src="/gallery-2.jpeg" className="w-full h-full object-cover rounded-lg" alt="" height={200} width={200}/>
        </div>
        <div className="flex flex-col gap-4">
          <Image src="/gallery-3.jpeg" className="w-full h-full object-cover rounded-lg" alt="" height={200} width={200}/>
          <Image src="/gallery-4.svg" className="w-full h-full object-cover rounded-lg" alt="" height={200} width={200}/>
        </div>
        <div className="flex flex-col gap-4">
          <Image src="/gallery-5.svg" className="w-full h-full object-cover rounded-lg" alt="" height={200} width={200}/>
          <Image src="/gallery-3.jpeg" className="w-full h-full object-cover rounded-lg" alt="" height={200} width={200}/>
        </div>
       </div>  

    </div>

  )
}

export default page