import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constans';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-container px-6 flex flex-col gap-12">
        {/* Logo and Links Section */}
        <div className="flex flex-col items-center sm:flex-row justify-between gap-10 sm:gap-16">
          {/* Logo Section */}
          <Link href="/" className="flex justify-center sm:justify-start">
            <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
          </Link>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-10 sm:gap-16 justify-center sm:justify-between w-full sm:w-auto">
            {FOOTER_LINKS.map((column) => (
              <FooterColumn key={column.title} title={column.title}>
                <ul className="text-gray-400 space-y-4">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link href="/" className="hover:text-white transition-all">{link}</Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col gap-5 sm:w-1/4">
            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              {FOOTER_CONTACT_INFO.links.map((link) => (
                <Link href="/" key={link.label} className="flex gap-4 sm:flex-col lg:flex-row">
                  <p className="whitespace-nowrap text-gray-400">{link.label}:</p>
                  <p className="text-blue-500">{link.value}</p>
                </Link>
              ))}
            </FooterColumn>
          </div>

          {/* Socials Section */}
          <div className="flex flex-col gap-5 sm:w-1/4">
            <FooterColumn title={SOCIALS.title}>
              <div className="flex gap-4">
                {SOCIALS.links.map((link) => (
                  <Link href="/" key={link}>
                    <Image src={link} alt="social-icon" width={24} height={24} className="hover:opacity-75 transition-all" />
                  </Link>
                ))}
              </div>
            </FooterColumn>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-600 pt-6">
          <p className="text-center text-gray-400 text-sm">2023 Hilink | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
