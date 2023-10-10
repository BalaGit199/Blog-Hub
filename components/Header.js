import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import Link from "next/link";

function header() {
  return (
    <header className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-4">
          <input type="text" className="input-text" placeholder="Search..." />
        </div>
        <div className="shrink w-80 sm:order-2">
          <Link href="/">
            <a className="font-bold uppercase text-4xl">Blog Hub</a>
          </Link>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            <Link href="/">
              <a>
                <BsFacebook color="#888888" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <BsTwitter color="#888888" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <BsYoutube color="#888888" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default header;
