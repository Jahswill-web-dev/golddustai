import Image from "next/image";
import banner from "../public/images/banner-image.png";
import Link from "next/link";
import Button from "./button";

function Banner() {
    return (
        <div className="relative h-screen flex items-center justify-center">
            <div className="z-10 flex flex-col gap-3 w-[80%]">
                <h1 className="text-white text-5xl">Golddust AI</h1>
                <h4 className="text-3xl text-white w-80 sm:w-[90%]">
                    AI consulting that <i className="text-primary not-italic">empowers</i> your business with Limitless <i className="text-primary not-italic">cutting-Edge</i> AI/ML solutions.
                </h4>
                {/* <Button bcontent="Schedule A Free Consultation Call" stb="heoll"/> */}
                <Link href="/">
                    <div className="text-white text-lg text-center max-w-[20rem] bg-primary rounded-md px-1 my-2 py-2.5">
                    Schedule A Free Consultation Call
                    </div>
                </Link>
            </div>
            <Image
                src={banner}
                alt="hero image of goldustai"
                fill
                style={{ objectFit: "cover" }}
            />
        </div>
    );
}

export default Banner;