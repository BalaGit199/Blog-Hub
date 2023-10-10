import React from "react";
import Image from "next/image";
import Link from "next/link";
import Author from "../components/_child/author";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";
export default function Section1() {
  SwiperCore.use([Autoplay, Pagination, Navigation]);
  const { data, isLoading, isError } = fetcher("api/Trending");
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
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1500}
          loop={true}
          //   pagination={{
          //     clickable: true,
          //   }}
          //   navigation={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {data.map((value, index) => (
            <SwiperSlide key={index}>
              {<Slider data={value}></Slider>}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function Slider({ data }) {
  const { id, category, title, img, published, author,description} = data;

  return (
    <div className="grid md:grid-cols-2">
      <div className="imagege">
        <Link href={`/posts/${id}`}>
          <a>
            <Image src={img || "/"} width={500} height={500} />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={"/"}>
            <a className="text-yellow-500 hover:text-yellow-900">
              {category || "unknown"}
            </a>
          </Link>
          <Link href={`/posts/${id}`}>
            <a className="text-gray-800 hover:text-gray-600">
             {published ||  "unknown"}
            </a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}>
            <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
              {title ||  "unknown"}
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
