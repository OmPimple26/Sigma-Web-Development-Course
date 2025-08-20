"use client";
import Image from "next/image";
import { submitAction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {
  let ref = useRef();

  return (
    <div className="w-2/3 mx-auto my-12">
      <form ref={ref} action={(e) => {submitAction(e); ref.current.reset();}}>
        <div>
          <label htmlFor="name">Name</label>
          <input placeholder="Name" name="name" id="name" className="text-green-500 mx-4" type="text" />
        </div>
        <div>
          <label htmlFor="add">Address</label>
          <input placeholder="Address" name="add" id="add" className="text-green-500 mx-4" type="text" />
        </div>
        <button className="border border-white px-3">Submit</button>
      </form>
    </div>
  );
}
