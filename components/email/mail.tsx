import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";
import Head from "next/head";
import parse from "html-react-parser";

export default function WelcomeEmail({ content, style }: { content: string, style: string }) {
  return (
    <Html>
      <Head>
        <style>{style}</style>
      </Head>
      <Section style={main}>
        <Container style={container}>
          <Text style={heading}>{}</Text>
          <Text style={paragraph}>{}</Text>
          {parse(content)}
        </Container>
      </Section>
    </Html>
  );
}

// Styles for the email template
const main = {
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};
