"use client";

import React, { useRef } from "react";
import { cn } from "@udecode/cn";
import { CommentsProvider } from "@udecode/plate-comments";
import {
  Plate,
  PlateProps,
  useEditorState,
  useEditorRef,
  PlateEditor,
  createPlateEditor,
  useEditorSelector,
  SerializeHtml,
} from "@udecode/plate-common";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { commentsUsers, myUserId } from "@/lib/plate/comments";
import { MENTIONABLES } from "@/lib/plate/mentionables";
import { plugins, editor } from "@/lib/plate/plate-plugins";
import { CommentsPopover } from "@/components/plate-ui/comments-popover";
import { CursorOverlay } from "@/components/plate-ui/cursor-overlay";
import { Editor } from "@/components/plate-ui/editor";
import { FixedToolbar } from "@/components/plate-ui/fixed-toolbar";
import { FixedToolbarButtons } from "@/components/plate-ui/fixed-toolbar-buttons";
import { FloatingToolbar } from "@/components/plate-ui/floating-toolbar";
import { FloatingToolbarButtons } from "@/components/plate-ui/floating-toolbar-buttons";
import { MentionCombobox } from "@/components/plate-ui/mention-combobox";
import { UseFormReturn } from "react-hook-form";
import { formSchema } from "../email/newmail";
import { z } from "zod";
// import { serializeHtml } from "@udecode/plate-serializer-html";
// import { slateToHtml, payloadSlateToHtmlConfig } from "@slate-serializers/html";
import { htmlSerialize, getTableInfo } from "@/lib/serializer/slate-to-html";
import parse from "html-react-parser";

export default function PlateEditor({
  form,
}: {
  form: UseFormReturn<z.infer<typeof formSchema>>;
}) {
  const containerRef = useRef(null);

  const initialValue = [
    {
      id: "1",
      type: ELEMENT_PARAGRAPH,
      children: [{ text: form.getValues("html") || "Hello World" }],
    },
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <CommentsProvider users={commentsUsers} myUserId={myUserId}>
        <Plate
          plugins={plugins}
          initialValue={initialValue}
          onChange={(value) => {
            form.setValue("html", htmlSerialize(value));
            form.setValue("style", getTableInfo());
          }}
        >
          <div
            ref={containerRef}
            className={cn(
              "relative",
              // Block selection
              "[&_.slate-start-area-left]:!w-[64px] [&_.slate-start-area-right]:!w-[64px] [&_.slate-start-area-top]:!h-4"
            )}
          >
            <FixedToolbar>
              <FixedToolbarButtons />
            </FixedToolbar>

            <Editor
              className="p-6 mb-10"
              autoFocus
              focusRing={false}
              variant="ghost"
              size="md"
            />

            <FloatingToolbar>
              <FloatingToolbarButtons />
            </FloatingToolbar>

            <MentionCombobox items={MENTIONABLES} />

            <CommentsPopover />

            <CursorOverlay containerRef={containerRef} />
          </div>
        </Plate>
      </CommentsProvider>
    </DndProvider>
  );
}
