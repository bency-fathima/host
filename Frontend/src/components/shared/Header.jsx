import React, { useState } from 'react'
import Logo from "../../assets/images/navbarLogo.svg"
import { useNavigate } from 'react-router-dom';
import menuIcon from "../../assets/Icons/Menu.svg"
import closingMenu from "../../assets/Icons/Xvector.svg"

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="fixed top-0 z-5 w-full bg-white border-b border-b-gray-300">
        <div
          className="flex items-center justify-between mx-4 md:mx-[140px]   p-3"
        >
          <img src={Logo} alt="Logo" className="w-35 h-8" />
          <div className="lg:flex items-center justify-between space-x-5 hidden">
            <span
              className="cursor-pointer text-4 font-semibold "
              onClick={() => navigate("/")}
            >
              Home
            </span>
            <span
              className="cursor-pointer text-4 font-semibold "
              onClick={() => navigate("/programs")}
            >
              All Program
            </span>
            <span
              className="cursor-pointer text-4 font-semibold "
              onClick={() => navigate("/ourstory")}
            >
              Our Story
            </span>
            <span
              className="cursor-pointer text-4 font-semibold "
              onClick={() => navigate("/blog")}
            >
              Blog
            </span>
            <span
              className="cursor-pointer text-4 font-semibold "
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </span>
          </div>
          <button className="py-4 px-16 bg-[#0a4f48] rounded-full text-white text-4 font-semibold hidden lg:block">
            Log in
          </button>
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {!open ? (
              <img src={menuIcon} alt="" />
            ) : (
              <img src={closingMenu} alt="" />
            )}
          </button>
        </div>
      </div>
      {/* mobile menu */}
      {open && (
        <div
          className="fixed inset-0  bg-opacity-40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col items-center justify-between gap-25">
          <div className="flex flex-col items-start gap-5 w-full">
            <div className="flex items-center justify-between p-2 w-full">
              <img src={Logo} alt="Logo" className="w-35 h-8" />
              <button onClick={() => setOpen(!open)}>
                <img src={closingMenu} alt="" />
              </button>
            </div>
            <div className="px-2 py-7 flex flex-col items-start justify-between w-full">
              <div className="flex justify-start border-b border-b-gray-300 w-full py-4">
                <p
                  className="font-semibold text-[16px] tracking-[-2%]"
                  onClick={() => {
                    navigate("/");
                    setOpen(false);
                  }}
                >
                  Home
                </p>
              </div>
              <div className="flex justify-start border-b border-b-gray-300 w-full py-4">
                <p
                  className="font-semibold text-[16px] tracking-[-2%]"
                  onClick={() => {
                    navigate("/programs");
                    setOpen(false);
                  }}
                >
                  All Programs
                </p>
              </div>
              <div className="flex justify-start border-b border-b-gray-300 w-full py-4">
                <p
                  className="font-semibold text-[16px] tracking-[-2%]"
                  onClick={() => {
                    navigate("/ourstory");
                    setOpen(false);
                  }}
                >
                  Our Story
                </p>
              </div>
              <div className="flex justify-start border-b border-b-gray-300 w-full py-4">
                <p
                  className="font-semibold text-[16px] tracking-[-2%]"
                  onClick={() => {
                    navigate("/blog");
                    setOpen(false);
                  }}
                >
                  Blog
                </p>
              </div>
              <div className="flex justify-start border-b border-b-gray-300 w-full py-4">
                <p
                  className="font-semibold text-[16px] tracking-[-2%]"
                  onClick={() => {
                    navigate("/contact");
                    setOpen(false);
                  }}
                >
                  Contact Us
                </p>
              </div>
            </div>
          </div>
          <button className="py-4 px-16 bg-[#0a4f48] rounded-full text-white text-4 font-semibold">
            Start Today
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;