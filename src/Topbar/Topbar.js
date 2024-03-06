import { Disclosure } from "@headlessui/react";
import { FaInstagram, FaSquareFacebook } from "react-icons/fa6";

export default function Topbar() {
  return (
    <Disclosure
      as="nav"
      className="scorpiongame-color-5-bg scorpiongame-color-4"
    >
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-8 items-center justify-between">
            <div className="flex flex-1 items-center sm:justify-start">
              <div className="flex flex-shrink-0 items-center"></div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 text-xl">
              <div className="ml-2">
                <a href="https://www.instagram.com/jogodoescorpiao">
                  <FaInstagram />
                </a>
              </div>
              <div className="ml-2">
                <a href="https://www.facebook.com/profile.php?id=61556749026220">
                  <FaSquareFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  );
}
