import React from "react";
import Status from "./Status";

type Props = {
    children: React.ReactNode;
    inView: boolean;
    className?: string | undefined;
  };
/**
 * ScrollWrapper directs the user to scroll the page to reveal it's children.
 * Use this on Modules that have scroll and/or observer triggers.
 */
const ScrollWrapper = ({ children, inView, ...props }: Props) => {
    return (
      <div {...props}>
        <Status inView={inView} />
        <section className="h-[101vh] text-center flex flex-col items-center justify-center text-white bg-amber-500">
          <h1>⬇ Scroll Down ⬇</h1>
        </section>
        {children}
        <section className="h-[101vh] text-center flex flex-col items-center justify-center text-white bg-amber-500">
          <h1>⬆︎ Scroll up ⬆︎</h1>
        </section>
      </div>
    );
  };
  
  export default ScrollWrapper;
  