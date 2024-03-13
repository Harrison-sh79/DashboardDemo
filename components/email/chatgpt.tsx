import React from "react";
import { Icons } from "@/components/icon/icons";
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./newmail";
import { htmlSerialize } from "@/lib/serializer/slate-to-html";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";

function ChatGPTButton({
    form,setEditorInput
  }: {
    form: UseFormReturn<z.infer<typeof formSchema>>;
    setEditorInput: React.Dispatch<React.SetStateAction<any>>;
  }) {
  return (
    <Button
      variant="vmax_outline"
      onClick={(e) => {
        e.preventDefault();
        setEditorInput([
            {
              id: "1",
              type: ELEMENT_PARAGRAPH,
              children: [{ text: "Hello ChatGPT" }],
            },
          ]);
        // form.setValue("html", "Test ChatFPT");
      }}
    >
      <div className="flex flex-row gap-0.5 items-center justify-center">
        {" "}
        <Icons.sparkles className="mr-2 size-5" />
        <span className="px-2 py-1.5 text-sm font-[500] lg:inline">
          ChatGPT
        </span>
      </div>
    </Button>
  );
}

export default ChatGPTButton;
