import { Carousel } from "flowbite-react";

import heroImg1 from "../assets/hero1.avif"
import heroImg2 from "../assets/hero2.avif"
import heroImg3 from "../assets/hero3.avif"

export default function Hero() {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-2 md:mt-4">
            <Carousel slideInterval={5000}>
                <img src={heroImg1} alt="heroImg1" />
                <img src={heroImg2} alt="heroImg2" />
                <img src={heroImg3} alt="heroImg3" />
            </Carousel>
        </div>
    )
}
