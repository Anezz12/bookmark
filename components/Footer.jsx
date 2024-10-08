import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="py-16 bg-veryDarkBlue">
      {/* <!-- Footer Flex Container --> */}
      <div
        className="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0"
      >
        {/* <!-- Logo/Menu Container --> */}
        <div
          className="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue"
        >
          <img src="images/logo-bookmark-footer.svg" alt="" className="mb-1" />

          <a href="#features" className="uppercase hover:text-softRed">Features</a>
          <a href="#download" className="uppercase hover:text-softRed">Download</a>
          <a href="#faq" className="uppercase hover:text-softRed">FAQ</a>
        </div>

        {/* <!-- Social Container --> */}
        <div className="flex space-x-10">
          <a href="#">
            <FaSquareFacebook className="w-5 h-5 hover:scale-125 transition-all" />
          </a>
          <a href="#">
            <FaTwitter className="w-5 h-5 hover:scale-125 transition-all" />
          </a>
        </div>
      </div>
    </footer>
  )
}