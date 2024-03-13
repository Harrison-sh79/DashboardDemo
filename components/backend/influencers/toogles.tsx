import React from "react";
import { Toggle } from "@/components/ui/toggle";

type ToggleType = {
  id: string;
  name: string;
};

function Toogles({ categories }: { categories: ToggleType[] }) {
  return (
    <>
      {categories.length > 0 &&
        categories.map((c) => (
          <Toggle variant="vmax" key={c.id} aria-label="Toggle italic">
            {c.name}
          </Toggle>
        ))}
    </>
  );
}

export default Toogles;
