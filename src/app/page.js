import Image from "next/image";
import bg from "../../public/background/home-background.jpg";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      {/* Background Image */}
      <Image
        priority
        src={bg}
        alt="background-image"
        fill
        sizes="100vw"
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />
      
      {/* Centered Content */}
      <div className="w-full h-screen flex flex-col justify-center items-center text-center">
        {/* Navigation Component */}
        <Navigation />
        
        {/* Text Section */}
        <div className="text-center p-1">
          <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold">
            Hi, I&apos;m <span className="text-blue-300 animate-pulse">Swikar</span>,<br />
            web developer
          </h1>
          <p className="text-white text-xl bg-transparent p-2 mt-1 lg:mt-0 border-white lg:border-2 lg:bg-blue-800 rounded">
            Front End Developer / Developer
          </p>
        </div>
      </div>
    </main>
  );
}
