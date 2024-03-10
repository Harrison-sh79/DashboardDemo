// import { cookies } from "next/headers";
import Image from "next/image";
import { Mail } from "@/components/email/pages/mail";
import { accounts, mails } from "@/components/email/pages/data";

export default function MailInbox() {
  const layout = document.cookie
    .split("; ")
    .find((row) => row.startsWith("react-resizable-panels:layout="))
    ?.split("=")[1];

  const collapsed = document.cookie
    .split("; ")
    .find((row) => row.startsWith("react-resizable-panels:collapsed="))
    ?.split("=")[1];

  const defaultLayout = layout ? JSON.parse(layout) : undefined;
  const defaultCollapsed = collapsed ? JSON.parse(collapsed) : undefined;

  return (
    <>
      {/* <div className="md:hidden">
        <Image
          src="/examples/mail-dark.png"
          width={1280}
          height={727}
          alt="Mail"
          className="hidden dark:block"
        />
        <Image
          src="/examples/mail-light.png"
          width={1280}
          height={727}
          alt="Mail"
          className="block dark:hidden"
        />
      </div> */}
      <div className="hidden flex-col md:flex max-h-[85%]">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </>
  );
}
