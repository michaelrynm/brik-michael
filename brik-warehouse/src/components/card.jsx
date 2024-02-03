import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function Card(props) {
    const {img, title} = props
  return (
    <div className="max-w-96 shadow-2xl p-5">
      <div>
        <img src={img} alt="" className="w-32" />
      </div>
      <div className="mt-4">
        <p className="font-medium text-xl text-blue-500">{title}</p>
        <p className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro nemo,
          veniam beatae sapiente velit omnis dolorem mollitia ab asperiores
          amet!
        </p>
      </div>
      <div className="mt-5 flex items-center gap-1 text-blue-500">
        <p>Discover</p>
        <p className="text-xl">
          <IoIosArrowForward />
        </p>
      </div>
    </div>
  );
}
