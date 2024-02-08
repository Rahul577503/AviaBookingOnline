import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4 md:flex-row md:justify-between md:items-center">
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p>Email: example@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>

        <div className="text-center">
          <h2 className="text-lg font-semibold mb-2">Helpful Links</h2>
          <ul>
            <li className="hover:underline">
              <Link href="/faq">FAQ</Link>
            </li>
            <li className="hover:underline">
              <Link href="/terms">Terms of Service</Link>
            </li>
            <li className="hover:underline">
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-lg font-semibold mb-2">Connect With Us</h2>
          <div className="flex justify-center space-x-4">
            <Link href="#" className="text-xl">
              <FaFacebook />
            </Link>
            <Link href="#" className="text-xl">
              <FaTwitter />
            </Link>
            <Link href="#" className="text-xl">
              <FaInstagram />
            </Link>
            <Link href="#" className="text-xl">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <p>
          &copy; {new Date().getFullYear()} AviaBookingOnline. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
