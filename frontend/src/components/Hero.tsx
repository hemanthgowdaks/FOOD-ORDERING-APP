import hero from "../assets/hero.png";

const Hero = () => {
  return(
    <div>
        <img src={hero} alt="landing img" className="w-full max-h-[1000px] object-cover"/>
    </div>
  )
}

export default Hero;