import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <header class="text-white body-font">
      <div class="container mx-auto flex flex-wrap p-5 md:flex-row">
        <a class="flex title-font font-medium text-white mb-4 md:mb-0 pr-4" href="/">
          <span class="ml-3 text-3xl">MittiLand</span>
        </a>
        <button
            className="text-white cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none ml-auto pb-3"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold pl-7">
          <a
          onClick={e=>navigate('/about')}
          class="mr-6 hover:text-white cursor-pointer">About us</a>
          <a class="mr-6 hover:text-white cursor-pointer" >Contact</a>
          <a class="mr-6 hover:text-white" >Contact</a>

        </nav>
        
        </div>
      </div>
    </header>
  );
}
