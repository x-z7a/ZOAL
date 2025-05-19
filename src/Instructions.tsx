// Instructions.tsx
import { Box, Heading, Text } from "@radix-ui/themes";
import NavBar from "./NavBar";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function Instructions() {
  return (
    <>
      <NavBar />
      <Box
        style={{
          minHeight: "100vh",
          background: "radial-gradient(circle at top, #1a1a1a, #0a0a0a)",
          padding: "4rem 1rem",
        }}
      >
        <Box style={{ maxWidth: "800px", margin: "0 auto", color: "white" }}>
          <Heading mt="6" as="h1" size="8" mb="4" highContrast>
            Getting Started
          </Heading>

          <Text size="4" as="p" style={{ lineHeight: 1.6 }}>
            Welcome to the future of home cockpit interaction. Getting started
            with WebGA is simple:
          </Text>

          <ul style={{ paddingLeft: "1.5rem", lineHeight: 2, marginTop: "1rem" }}>
            <li>
              <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4ea1ff", textDecoration: "underline" }}
              >
              Download the latest release
              </a>{" "}
              and drag it into your X-Plane 12 plugins folder like: <pre>X-Plane 12/Resources/Plugins/WebGA</pre>
            </li>
            <li>
              Once X-plane 12 is running, and as part of your checklist process, go to{" "}
              <a
              href="http://localhost:8080"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4ea1ff", textDecoration: "underline" }}
              >
              http://localhost:8080
              </a>{" "}
              from your simulator machine's preferred browser
            </li>
            <li>
              On your tablet or whichever device you will use as your avionics, visit{" "}
              <a
              href="http://webga.local:8080"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4ea1ff", textDecoration: "underline" }}
              >
              webga.local:8080
              </a>{" "}
              (if using an Apple device) or{" "}
              <a
              href="http://&lt;your-machine-ip-address&gt;:8080"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4ea1ff", textDecoration: "underline" }}
              >
              {"<your machine IP address>:8080"}
              </a>
            </li>
          </ul>

          <Heading as="h2" size="6" mt="6" mb="2" highContrast>
            More Detailed Instructions
          </Heading>

          <Text size="4" as="p" style={{ lineHeight: 1.6 }}>
            For those who prefer a more detailed guide, we have provided a comprehensive
            set of instructions. This includes step-by-step guidance on how to set up
            your system, configure your devices, and optimize your experience with WebGA.
          </Text>

          <Box mt="6">
            <Accordion.Root type="single" collapsible>
              <Accordion.Item value="item-1">
                <Accordion.Header>
                  <Accordion.Trigger
                    style={{
                      all: "unset",
                      backgroundColor: "#2c2c2c",
                      color: "white",
                      padding: "1rem",
                      width: "100%",
                      textAlign: "left",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Sample Item 1
                    <ChevronDownIcon />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content
                  style={{
                    backgroundColor: "#1e1e1e",
                    color: "#ccc",
                    padding: "1rem",
                    borderRadius: "8px",
                    marginBottom: "1rem",
                  }}
                >
                  Placeholder content for sample item 1.
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="item-2">
                <Accordion.Header>
                  <Accordion.Trigger
                    style={{
                      all: "unset",
                      backgroundColor: "#2c2c2c",
                      color: "white",
                      padding: "1rem",
                      width: "100%",
                      textAlign: "left",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Sample Item 2
                    <ChevronDownIcon />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content
                  style={{
                    backgroundColor: "#1e1e1e",
                    color: "#ccc",
                    padding: "1rem",
                    borderRadius: "8px",
                    marginBottom: "1rem",
                  }}
                >
                  Placeholder content for sample item 2.
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="item-3">
                <Accordion.Header>
                  <Accordion.Trigger
                    style={{
                      all: "unset",
                      backgroundColor: "#2c2c2c",
                      color: "white",
                      padding: "1rem",
                      width: "100%",
                      textAlign: "left",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Sample Item 3
                    <ChevronDownIcon />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content
                  style={{
                    backgroundColor: "#1e1e1e",
                    color: "#ccc",
                    padding: "1rem",
                    borderRadius: "8px",
                    marginBottom: "1rem",
                  }}
                >
                  Placeholder content for sample item 3.
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </Box>
        </Box>
      </Box>
    </>
  );
}
