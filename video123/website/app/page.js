import Image from "next/image";

export default function Home() {
  return (
    <div className="container my-5 size-80 bg-red-300 relative">
      {/* I am home */}
      {/* <img className="mx-auto" src="http://www.menucool.com/slider/prod/image-slider-3.jpg" alt="" /> */}
      <Image className="mx-auto object-cover" fill={true} src="http://www.menucool.com/slider/prod/image-slider-3.jpg" alt="" />
    </div>
  );
}
