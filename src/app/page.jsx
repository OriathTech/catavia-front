import Welcome from "@/components/Home/Welcome/Welcome"
import About from "@/components/Home/About/About"
import Carousel from "@/components/Home/Carousel/Carousel"



export default function Home() {
  return (
    <div className="allPage">
      <Welcome />
      <div className="catBG">
        <Carousel />
        <About />
      </div>
    </div>
  )
}
