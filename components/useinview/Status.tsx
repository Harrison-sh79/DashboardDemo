import React from "react";

type Props = { inView: boolean };

function Status({ inView }: Props) {
    return (
      <div style={{ position: "sticky", top: 0 }}>
        <div className="absolute top-0 right-0 w-8 h-8 bg-violet-600 flex justify-center items-center rounded-md">
          {inView ? (
            <span role="img" aria-label="In view" className="h-[1em] w-[1em]">
              ✅
            </span>
          ) : (
            <span role="img" aria-label="Outside the viewport" className="h-[1em] w-[1em]">
              ❌
            </span>
          )}
        </div>
      </div>
    );
  }
  
  export default Status;