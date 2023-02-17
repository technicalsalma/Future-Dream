import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
// import bkash from "../../images/footer-img/bkash.svg";
// import amex from "../../images/footer-img/footer-amex.svg";
// import visa from "../../images/footer-img/footer-visa.svg";
import logo from "../../assets/images/download.png";
// import mastercard from "../../images/footer-img/mastercard.svg";
// import nogod from "../../images/footer-img/nagad.svg";
// import dbal from "../../images/footer-img/payment-dbbl.svg";
// import tap from "../../images/footer-img/payment-tap.svg";
// import union from "../../images/footer-img/union.svg";
// import upay from "../../images/footer-img/upay.svg";

const Footer = () => {
  return (
    <footer className=" bg-gray-900 font-poppins w-full">
      <div className="container mx-auto py-10">
        <div className=" grid gap-8 py-8 px-6 md:grid-cols-5 text-white">
          <div>
            <h1 className="mb-2 font-bold">Services</h1>
            <h4 className="text-sm mb-2 text-gray-200">Home</h4>
            <h4 className="text-sm mb-2 text-gray-200">Terms</h4>
            <h4 className="text-sm text-gray-200">Talent & Culture</h4>
          </div>

          <div>
            <h1 className="mb-2 font-bold">Discover</h1>
            <h4 className="text-sm text-gray-200">Refund Policy</h4>
            <h4 className="text-sm my-2 text-gray-200">EMI Policy</h4>
            <h4 className="text-sm text-gray-200">Privacy Policy</h4>
          </div>

          <div>
            <h1 className="mb-2 font-bold">Payment Methods</h1>
           <h4 className="text-sm mb-2 text-gray-200">Home</h4>
            <h4 className="text-sm mb-2 text-gray-200">Terms</h4>
            <h4 className="text-sm text-gray-200">Talent & Culture</h4>
          </div>

          <div>
            <h1 className="mb-2 font-bold">Need Help ?</h1>
            <p className="text-sm text-gray-200">
              We are Always here for you! Knock us on Messenger anytime or Call
              our Hotline (10AM - 10PM).
            </p>
          </div>

          <div className="lg:ml-5 lg:pl-5">
            <h1 className="mb-2 font-bold">Contact</h1>
            <p className="pb-3 text-sm text-gray-200">info@gozayaan.com</p>
            <h1 className="pb-2 text-sm text-gray-200">+88 09678 332211</h1>
            <div className="flex mt-4">
              <a
                className="mr-3 text-2xl p-2 bg-gray-500 rounded-full"
                href="https://www.facebook.com"
              >
                <FaFacebookF />
              </a>
              <a
                className="mr-3 text-2xl p-2 bg-gray-500 rounded-full"
                href="https://www.youtube.com"
              >
                <AiFillYoutube />
              </a>
              <a
                className="text-2xl p-2 bg-gray-500 rounded-full"
                href="https://www.instagram.com"
              >
                <AiFillInstagram />
              </a>
            </div>
          </div>
        </div>
        <hr/>
        <div className="flex justify-between py-5">
          <img className="pl-8 className='w-[100px] h-[70px]" src={logo} alt="" />
          <p className="text-gray-100 text-sm pr-8">
            © Copyright Travel Guru Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
