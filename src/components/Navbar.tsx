import { NAV_LINKS } from "@/constans"; // Ensure this file contains the correct structure for NAV_LINKS
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-container px-6 py-5 relative z-30">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      {/* Desktop Navigation Links */}
      <ul className="hidden lg:flex gap-12 items-center">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link href={link.href} className="text-base text-gray-800 font-medium transition-all hover:font-bold hover:text-blue-600">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Login Button (Desktop) */}
      <div className="hidden lg:flex items-center">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="dark"
        />
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden">
        <Image 
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
