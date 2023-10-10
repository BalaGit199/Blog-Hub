import React from "react";
import Author from "./_child/author";
import Link from "next/link";
import Image from "next/image";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";


export default function Section4() {
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
    <section className="container mx-auto md:px-20 py-5">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-4xl px-15 py-10">Business</h1>
          <div className="flex flex-col gap-6">
           {data[1]?<Post data={data[1]}></Post>:<></>}
           {data[2]?<Post data={data[2]}></Post>:<></>}
           {data[3]?<Post data={data[3]}></Post>:<></>}

          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-4xl px-15 py-10">Travel</h1>
          <div className="flex flex-col gap-6">
          {data[5]?<Post data={data[5]}></Post>:<></>}
          {data[4]?<Post data={data[4]}></Post>:<></>}
          {data[3]?<Post data={data[3]}></Post>:<></>}

          </div>
        </div>
      </div>
    </section>
  );
}

function Post({data}) {
  const { id, category, title, img, published, author,description } = data;

  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`/posts/${id}`}>
          <a>
            <Image
              src={img}
              className="rounded"
              width={300}
              height={300}
            />
          </a>
        </Link>
      </div>
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
