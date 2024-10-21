import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            My journey in web development is powered by an array of mystical tools and languages, with JavaScript as the core of my enchantments. In this role, I harness the power of frameworks like React.js and Next.js, crafting seamless portals that connect users across the digital universe. I develop and optimize user interfaces using Tailwind CSS and modern frontend tools, collaborating with teams to enhance user experiences.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-blue-300"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            0+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-blue-300"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1.5+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=swikar98&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Swikar Singh"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=swikar98&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Swikar Singh"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=css,figma,git,github,html,js,jquery,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,react,redux,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="Swikar Singh"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
