import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import Link from "next/link";
import Newsletter from "./_child/newsletter";

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <Newsletter />
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
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
          <p className="py-5 text-gray-400">
            Copyright ©2022 All rights reserved | This template is made with by
            Daily tution
          </p>
          <p className="text-gray-400 text-center">Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
}
