import React from "react";
import Image from "next/image";
import Link from "next/link";
import Author from "./author";
import fetcher from "../../lib/fetcher";
import Spinner from "../_child/spinner";
import Error from "../_child/error";
export default function Related() {
  const { data, isLoading, isError } = fetcher("api/posts");
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
    <section className="py-20">
      <h1 className="font-bold text-3xl py-10">Related</h1>
      <div className="flex flex-col gap-3">
        {data.map((value, index) => (
          <Post data={value} key={index}></Post>
        ))}
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, category, title, img, published, author, description } = data;
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`/posts/${id}`}>
          <a>
            <Image src={img} className="rounded" width={300} height={250} />
          </a>
        </Link>
      </div>{" "}
      <div className="info flex justify-center flex-col">
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
            <a className="text-xl md:text-1xl font-bold text-gray-800 hover:text-gray-600">
              {title || "unknown"}
            </a>
          </Link>
        </div>
        {author ? <Author data={author}></Author> : <></>}
      </div>
    </div>
  );
}
