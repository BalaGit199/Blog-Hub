import React from "react";
import Link from "next/link";
import Image from "next/image";
import Author from "../components/_child/author";
import getPost from "../lib/helper";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";
export default function Section2() {
  const { data, isLoading, isError } = fetcher("api/posts");
    if(isLoading) return <div><Spinner/></div>
    if(isError) return <div><Error/></div>
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-3xl py-10 text-center">Latest Post</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {data.map((value, index) => (
          <Post data={value} key={index}></Post>
        ))}
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, category, title, img, published, author,description } = data;

  return (
    <div className="item">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <a>
            <Image src={img} width={400} height={250} />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={`/posts/${id}`}>
            <a className="text-yellow-500 hover:text-yellow-900">{category}</a>
          </Link>
          <Link href={`/posts/${id}`}>
            <a className="text-gray-800 hover:text-gray-600">{published}</a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}>
            <a className="text-1xl md:text-2xl font-bold text-gray-800 hover:text-gray-600">
              {title}
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Even the all-pointing has a no control about the blind texts it is an
          almost unorthographic life One day however a small line of blind text
          by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </p>
        {author ? <Author data={author}></Author> : <></>}
      </div>
    </div>
  );
}
