import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export default function Mynavbar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="/HRadio-app"
          className="flex items-center hover:underline text-white font-LexendDeca text-xl"
        >
          HomePage1
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="/HRadio-app/2"
          className="flex items-center hover:underline text-white font-LexendDeca text-xl"
        >
          HomePage2
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="/HRadio-app/3"
          className="flex items-center hover:underline text-white font-LexendDeca text-xl"
        >
          HomePage3
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="/HRadio-app/4"
          className="flex items-center hover:underline text-white font-LexendDeca text-xl"
        >
          HomePage4
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      className="relative w-full flex flex-wrap items-center justify-between py-3 bg-black  shadow-lg navbar navbar-expand-lg navbar-light z-40"
     
    >
      <div className="container mx-auto flex items-center justify-center">
        <Typography
          as="a"
          href="/"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <span className="text-white font-LexendDeca text-2xl">
            Material Tailwind
          </span>
        </Typography>
        <div className="hidden lg:block ">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
}
