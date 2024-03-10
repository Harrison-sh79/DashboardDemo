// import { useEffect } from "react";

import { useInView } from "react-intersection-observer";

const Page = ({ section, setVisibleSection, headerRef }: any) => {
  const { title, subtitle } = section;

  const { ref, inView } = useInView({
    threshold: 0.9,
    // triggerOnce: true,
    onChange: (inView, entry) => {
      if (inView) {
        setVisibleSection(entry.target.id);
        console.log(entry.target.id);
      }
    },
  });

  return (
    <section
      id={title}
      ref={ref}
      //   className={`h-[80vh] flex items-center justify-center opacity-0 ${inView && "translate-y-[-200px] opacity-100 transition-all duration-1000 ease-in-out delay-500"}`}
      className="h-[80vh] flex items-center justify-center border"
    >
      <span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </span>
    </section>
  );
};

export default Page;
