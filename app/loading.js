import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <Image 
        src="/loader.gif" 
        alt="Loading"
        width={80}
        height={80}
      />
    </div>
  );
}
