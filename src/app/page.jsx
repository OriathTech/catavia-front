import Banner from "@/app/components/Banner/Banner"
import About from "@/app/components/About/About"
import Carousel from "@/app/components/Carousel/Carousel"



export default function Home() {
  return (
    <>
      <Banner />
      <div className="catBG">
        <Carousel />
        <About />
      </div>
    </>
  )
}
