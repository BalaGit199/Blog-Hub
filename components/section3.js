import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import Image from "next/image";
import Link from "next/link";
import Author from "../components/_child/author";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

export default function Section3() {
  const { data, isLoading, isError } = fetcher("api/Popular");
  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    );
  if (isError)
    return (
      <div>
        <Error />
      </div>
    );
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-3xl py-10 text-center">Most Popular</h1>
      <Swiper
      breakpoints={{
        640:{
          slidesPerView:2,
          spaceBetween:30
        }
      }}
      >
        {
          data.map((value,index) => (
            <SwiperSlide key={index}>{<Post data={value}></Post>}</SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  );
}

function Post({data}) {
  const { id, category, title, img, published, author,description } = data;

  return (
    <div className="item">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <a>
            <Image
              src={img}
              width={500}
              height={350}
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={`/posts/${id}`}>
            <a className="text-yellow-500 hover:text-yellow-900">
              {category || "unknown"}
            </a>
          </Link>
          <Link href={`/posts/${id}`}>
            <a className="text-gray-800 hover:text-gray-600">
              {published || "unknown"}
            </a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}>
            <a className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-gray-600">
              {title || "unknown"}
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
         {description || "unknown"}
        </p>
        {author ? <Author data={author}></Author> : <></>}
      </div>
    </div>
  );
}
