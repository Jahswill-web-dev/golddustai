import Link from "next/link";
function Footer() {
    return ( 
        <div className="py-20 px-10">
            <div className="flex flex-col gap-7 sm:gap-20 sm:flex-row text-secondary text-xl sm:justify-center">
                <p>©Golddust</p>
                <p>Address:Lagos, Nigeria </p> {/*St. Louis, USA*/}
                <Link href="mailto:info@golddustai.com">Email:info@golddustai.com</Link>
            </div>
        </div>
     );
}

export default Footer;