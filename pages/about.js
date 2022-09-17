import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Woman from "../public/woman.jpg";

export default function About() {
  return (
    <div className="mx-10 container mx-auto bg-white shadow-md rounded-lg">
      <p className="flex justify-center pt-12 text-4xl font-bold text-red-600">
        O mnie
      </p>
      <div className="flex justify-center pt-12 pb-12">
        <Image
          src={Woman}
          unoptimized
          alt="photo person"
          width={380}
          height={360}
        />
      </div>

      <p className="flex justify-center text-center bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 text-base  pl-6 pr-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum illo quia
        maxime consequuntur tempora odit omnis optio quaerat minus ut molestias
        quo, similique sed facere. Consectetur magnam quidem obcaecati
        distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Illum illo quia maxime consequuntur tempora odit omnis optio quaerat
        minus ut molestias quo, similique sed facere. Consectetur magnam quidem
        obcaecati distinctio. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Illum illo quia maxime consequuntur tempora odit omnis optio
        quaerat minus ut molestias quo, similique sed facere. Consectetur magnam
        quidem obcaecati distinctio. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Illum illo quia maxime consequuntur tempora odit omnis
        optio quaerat minus ut molestias quo, similique sed facere. Consectetur
        magnam quidem obcaecati distinctio.
      </p>
    </div>
  );
}
About.getLayout = function getLayout(page) {
  return (
    <>
      <Navbar />
      {page}
    </>
  );
};
