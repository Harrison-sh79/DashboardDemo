/*
 * @Author: Harrison Song, harrison.sh@v-max.ca
 * @Date: 2024-02-26 21:23:35
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2024-03-08 08:41:30
 */

"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

const menus = ["home", "about", "project", "contact"];

export default function RootPage() {
  const [visibleSection, setVisibleSection] = React.useState(menus[0]);
  const { ref, inView } = useInView({
    threshold: 0.8,
    onChange: (inView, entry) => {
      if (inView) {
        setVisibleSection(entry.target.id);
        // console.log(entry.target.id);
      }
    },
  });
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.8,
    onChange: (inView, entry) => {
      if (inView) {
        setVisibleSection(entry.target.id);
        // console.log(entry.target.id);
      }
    },
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.8,
    onChange: (inView, entry) => {
      if (inView) {
        setVisibleSection(entry.target.id);
        // console.log(entry.target.id);
      }
    },
  });
  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.8,
    onChange: (inView, entry) => {
      if (inView) {
        setVisibleSection(entry.target.id);
        // console.log(entry.target.id);
      }
    },
  });
  // console.log(isInView)
  return (
    /* Home page , it is can be replace by company main page */
    <main className="flex min-h-screen flex-col items-center justify-between px-8 scroll-smooth">
      
      <div className="flex flex-row w-full p-3 justify-between items-center sticky top-0 inset-x-0 z-50 bg-background text-foreground border-b border-gray-200">
        <header className="flex flex-row gap-10 items-center justify-self-center">
          <nav>
            <ul className="list-none flex flex-row gap-14">
              {menus.map((menu, index) => (
                <li
                  key={index}
                  className={`text-xl font-bold ${
                    visibleSection === menu
                      ? "transition-all duration-500 delay-200 border-b-2 border-violet-800"
                      : "border-b-none"
                  }`}
                  // className={"w-full border-none hover:border-2 hover:transition-all hover:ease-in-out hover:border-amber-500 hover:duration-500"}
                >
                  <a href={`#${menu}`} className="block p-1 capitalize">
                    {menu}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </div>
      
      <section ref={ref} id="home" className="h-[100vh] w-full py-[61px]">
        This is Home section
      </section>
      <section ref={ref1} id="about" className="h-[100vh] w-full  py-[61px]">
        This is About section
      </section>
      <section ref={ref2} id="project" className="h-[100vh] w-full py-[61px]">
        This is Project section
      </section>
      <section ref={ref3} id="contact" className="h-[100vh] w-full  py-[61px]">
        This is Contact section
      </section>

      
    </main>
  );
}
