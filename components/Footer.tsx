"use client";
import Link from "next/link";
import React from "react";
import { LocationOn, Email, LocalPhone } from "@mui/icons-material";

const Footer = () => {
  const footerTitles: [string, string, string] = ["Product", "Media", "Sitemap"];
  const footerLinks: Array<Array<{ routeName: string; route: string }>> = [
    [
      { routeName: "Movies", route: "/movies" },
      { routeName: "TV Shows", route: "/tv" },
      { routeName: "Videos", route: "/videos" },
    ],
    [
      { routeName: "Nice Studio", route: "/nice-studio" },
      { routeName: "Nice News", route: "/nice-news" },
      { routeName: "Nice TV", route: "/nice-tv" },
    ],
    [
      { routeName: "About", route: "/about" },
      { routeName: "Careers", route: "/careers" },
      { routeName: "Press", route: "/press" },
    ],
  ];

  const contactLinks: Array<{ icon: JSX.Element; data: string }> = [
    {
      icon: <LocationOn />,
      data: "Address",
    },
    {
      icon: <Email />,
      data: "mail@mail.com",
    },
    {
      icon: <LocalPhone />,
      data: "+999999999",
    },
  ];

  return (
    <footer className="w-full mt-[100px] lg:mt-[200px] mb-14">
      <div className="w-[90%] lg:w-[85%] mx-auto flex flex-col lg:flex-row items-start gap-[20%]">
        <div className="flex flex-col gap-6 lg:gap-8">
          <Link href={"/"} className="text-white text-4xl lg:text-6xl font-semibold">
            Theflix
          </Link>
          <p className="text-white text-base font-semibold">Join the Newsletter</p>
          <form className="h-16 w-[280px] border border-gray-800 flex items-center justify-between rounded-lg gap-2 px-3">
            <input
              type="text"
              placeholder="Insert your name here"
              className="bg-transparent pr-4 text-[#AAAAB6] opacity-90 font-light h-full focus:outline-none"
            />
            <button className="h-12 w-12 bg-yellow-300 rounded-md text-2xl hover:bg-yellow-500 duration-200">→</button>
          </form>
        </div>

        <div className="flex flex-col justify-between items-start flex-1 gap-[100px] pt-8">
          <div className="flex flex-row flex-wrap items-start gap-14 lg:gap-36">
            {footerTitles.map((title, titleIndex: number) => (
              <div className="flex flex-col gap-6" key={title}>
                <h3 className="text-white font-bold">{title}</h3>
                {footerLinks.map((linksLevel, index: number) => (
                  <Link
                    href={footerLinks[titleIndex][index].route}
                    className="text-[#E6E6E6] text-sm lg:text-base font-light"
                    key={index}
                  >
                    {footerLinks[titleIndex][index].routeName}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="flex gap-6 flex-wrap lg:flex-nowrap justify-center">
            {contactLinks.map((contactLink) => (
              <div className="flex items-center text-white gap-2" key={contactLink.data}>
                {contactLink.icon}
                <span className="text-sm">{contactLink.data}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
