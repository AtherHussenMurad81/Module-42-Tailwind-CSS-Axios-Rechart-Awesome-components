import React, { useState } from "react";
import Link from "./Link";
import { MdMenu } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Products",
    path: "/products",
  },
  {
    id: 3,
    name: "About Us",
    path: "/about",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
  {
    id: 5,
    name: "Dashboard",
    path: "/dashboard",
  },
];

const Navbar = () => {
  //   const [open, setOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const links = navigationData.map((route) => <Link route={route}></Link>);

  return (
    <nav className="flex justify-between mx-10">
      {/* <span className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? <IoIosCloseCircle></IoIosCloseCircle> : <MdMenu></MdMenu>}
        <ul className=" md:hidden">{links}</ul>
      </span>
      <h2>My navbar</h2> */}

      <span onClick={() => setOpen(!open)} className="flex">
        {open ? <IoIosCloseCircle /> : <MdMenu className="md:hidden" />}

        <ul
          className={`md:hidden absolute duration-1000
          ${open ? "top-6" : "-top-44"}
            bg-red-700`}
        >
          {links}
        </ul>

        <h2 className="ml-4">My Navbar</h2>
      </span>
      <ul className="md:flex hidden">
        {navigationData.map((route) => (
          <Link route={route}></Link>
        ))}
      </ul>

      {/* <ul className="flex ">
        <li className="mr-10">
          <a href="/">Home</a>
        </li>
        <li className="mr-10">
          <a href="/about">About</a>
        </li>
        <li className="mr-10">
          <a href="/blog">Blog</a>
        </li>
      </ul> */}
      <button>Sign In</button>
    </nav>
  );
};

export default Navbar;
