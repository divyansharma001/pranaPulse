import { useState } from "react";
import { Button } from "../constants/Button";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const closeMobileMenu = () => {
    setOpen(false);
  };

  const links = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Chat with AI", link: "/ai" },
  ];

  return (
    <div className="flex flex-col md:flex-row p-5 md:p-3 text-xl justify-between shadow-2xl font-normal bg-white">
      <div className="cursor-pointer">
        <img
          src="https://img.freepik.com/premium-vector/yoga-logo-design-stock-human-meditation-lotus-flower-vector-illustration_841298-1250.jpg?w=740"
          alt="logo"
          className="w-12 md:w-24"
        />
      </div>

      <div className="text-3xl absolute right-8 top-7 cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
        <ion-icon name={open ? "close" : "menu"}></ion-icon>
      </div>

      <ul
        className={`pb-7 md:pb-0 md:flex md:gap-20 items-center absolute md:static bg-white w-full md:w-auto transition-all duration-500 ease-in z-10 ${
          open ? "top-20 opacity-100" : "top-[-490px] opacity-0 md:opacity-100"
        } left-0 pl-9 md:pl-0 z-[1] md:z-auto justify-center`}
      >
        {links.map((link) => (
          <li key={link.name} className="hover:scale-110 duration-500 my-8 md:my-0 underline-animate">
            <Link to={link.link} className="" onClick={closeMobileMenu}>
              {link.name}
            </Link>
          </li>
        ))}
        <Button>Login</Button>
      </ul>
    </div>
  );
};

export default NavBar;
