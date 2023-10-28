import Image from "next/image";

export const Hero = () => {
  return (
    <div className="h-[60vh] mt-7">
      <div className="flex justify-center md:justify-evenly items-center h-full relative bg-gradient-to-r  from-black to-purple-500 overflow-hidden">
        <Image src="/home/hoodie1.png" alt="hoodie" height={300} width={300} />
        <Image src="/home/hoodie2.png" alt="hoodie" height={380} width={380} />
        <Image src="/home/hoodie3.png" alt="hoodie" height={300} width={300} />
        <div className="absolute font-extrabold text-2xl md:text-5xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white tracking-widest">
          <h2>Winter Sale</h2>
          <h3 className="text-sm text-center mt-2">FLAT: 50% OFF</h3>
        </div>
      </div>
    </div>
  );
};
