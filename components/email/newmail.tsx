"use client";
import React, { FormEvent, MutableRefObject, RefObject } from "react";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";
import PlateEditor from "../editor/plate-editor";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Send } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { FaRegSadCry, FaRegSmile } from "react-icons/fa";

export const formSchema = z.object({
  to: z.string().min(1, { message: "Must be filled." }).email("Invalid email."),
  cc: z.union([z.literal(""), z.string().email("Invalid email.")]).optional(),
  bcc: z.union([z.literal(""), z.string().email("Invalid email.")]).optional(),
  subject: z.string().min(1, { message: "Must be filled." }),
  html: z
    .union([z.literal(""), z.string().min(1, { message: "Must be filled." })])
    .optional(),
  style: z.string().optional(),
});

function NewMail() {
  const [ccVisiable, setCcVisiable] = React.useState(false);
  const [bccVisiable, setBccVisiable] = React.useState(false);
  const { toast } = useToast();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      to: "[your email]@[domain].com",
      cc: "",
      bcc: "",
      subject: "[input your subject...] from [your name]",
      html: "Hi [name], \n\n" + 
      "Thanks for requesting the [company name] [product] about [topic]. As promised, this email contains the materials that you signed up to receive. \n\n" + 
      "Please find the detailed information at the bottom of this message. \n\n" + 
      "[product detail ...] \n\n" + 
      "Kind regards, \n" + 
      "[Name], [position] at [company] \n",
      style: "",
    },
  });

  async function EmailSubmit(e: FormEvent) {
    e.preventDefault();
    await form.handleSubmit(onSubmit)(e);
  }

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // async function onSubmit(e: React.FormEvent<HTMLFormElement> ) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values)
    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      toast({
        title: "Email sent successfully",
        description: (
          <div className="flex flex-row justify-center items-center gap-2">
            <FaRegSmile className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            <span>{result.message}</span>
          </div>
        ),
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Email sent failed",
        description: (
          <div className="flex flex-row justify-center items-center gap-2">
            <FaRegSadCry className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            <span>{(error as Error).message}</span>
          </div>
        ),
        action: (
          <ToastAction altText="Try again" onClick={() => form.handleSubmit}>
            Try again
          </ToastAction>
        ),
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={EmailSubmit} className="space-y-8">
        <div className="w-full flex flex-col gap-3">
          <FormField
            control={form.control}
            name="to"
            render={({ field }) => (
              <FormItem className="w-full space-y-0">
                <div className="flex flex-row justify-between items-center">
                  <FormLabel className="w-[50px] flex-grow-0 flex-shrink-0 items-center font-bold text-violet-800">
                    To:
                  </FormLabel>
                  <FormControl className="flex items-center space-y-0">
                    <Input
                      placeholder="please input your email address"
                      className="border-none shadow-none focus-visible:ring-0 caret-violet-800"
                      {...field}
                    />
                  </FormControl>
                  <div className="flex flex-row gap-2">
                    <Toggle
                      variant="vmax"
                      onClick={() => {
                        setCcVisiable(!ccVisiable);
                        if (!ccVisiable) form.setValue("cc", "");
                      }}
                    >
                      Cc
                    </Toggle>
                    <Toggle
                      variant="vmax"
                      onClick={() => {
                        setBccVisiable(!bccVisiable);
                        if (!bccVisiable) form.setValue("bcc", "");
                      }}
                    >
                      Bcc
                    </Toggle>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="w-[61px] flex-grow-0 flex-shrink-0"></div>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <Separator />
          {ccVisiable && (
            <>
              <FormField
                control={form.control}
                name="cc"
                render={({ field }) => (
                  <FormItem className="w-full space-y-0">
                    <div className="flex flex-row justify-between items-center">
                      <FormLabel className="w-[50px] flex-grow-0 flex-shrink-0 items-center font-bold text-violet-800">
                        Cc:
                      </FormLabel>
                      <FormControl className="flex items-center space-y-0">
                        <Input
                          placeholder="please input your email address"
                          className="border-none shadow-none focus-visible:ring-0 caret-violet-800"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <div className="flex flex-row">
                      <div className="w-[61px] flex-grow-0 flex-shrink-0"></div>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <Separator />
            </>
          )}
          {bccVisiable && (
            <>
              <FormField
                control={form.control}
                name="bcc"
                render={({ field }) => (
                  <FormItem className="w-full space-y-0">
                    <div className="flex flex-row justify-between items-center">
                      <FormLabel className="w-[50px] flex-grow-0 flex-shrink-0 items-center font-bold text-violet-800">
                        Bcc:
                      </FormLabel>
                      <FormControl className="flex items-center space-y-0">
                        <Input
                          placeholder="please input your email address"
                          className="border-none shadow-none focus-visible:ring-0 caret-violet-800"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <div className="flex flex-row">
                      <div className="w-[61px] flex-grow-0 flex-shrink-0"></div>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <Separator />
            </>
          )}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="w-full space-y-0">
                <div className="flex flex-row justify-between items-center">
                  <FormLabel className="w-[50px] flex-grow-0 flex-shrink-0 items-center font-bold text-violet-800">
                    Subject:
                  </FormLabel>
                  <FormControl className="flex items-center space-y-0">
                    <Input
                      placeholder="please input your email address"
                      className="border-none shadow-none focus-visible:ring-0 caret-violet-800"
                      {...field}
                    />
                  </FormControl>
                </div>
                <div className="flex flex-row">
                  <div className="w-[61px] flex-grow-0 flex-shrink-0"></div>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <Separator />
          <div className="hidden">{form.getValues("style")}</div>
          <div className="relative border rounded-md mt-6">
            <PlateEditor form={form} />
            <Button
              variant="vmax_selected"
              type="submit"
              className="absolute animate-pulse bottom-4 right-4 rounded-full w-12 h-12 overflow-hidden text-center shadow-lg z-50"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default NewMail;
