import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {

  return (
    <div className="w-full h-auto bg-amber-700 text-white p-4 flex justify-center items-center flex-col gap-2 ">
        <div className="flex gap-4">
            <a href="https://www.facebook.com">
                <FaFacebook className="w-6 h-6"/>
            </a>
            <a href="https://www.twitter.com">
                <FaTwitter className="w-6 h-6"/>
            </a>
            <a href="https://www.instagram.com">
                <FaSquareInstagram className="w-6 h-6"/>
            </a>
            <a href="https://www.linkedin.com">
                <FaLinkedin className="w-6 h-6"/>
            </a>
        </div>

    </div>
  )
}

export default Footer;
