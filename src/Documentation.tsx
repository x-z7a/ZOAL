// Documentation.tsx
import { Box, Heading, Text } from "@radix-ui/themes";
import NavBar from "./NavBar";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Footer from "./Footer";

export default function Documentation() {
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
            WebGA Documentation
          </Heading>

          <Text size="4" as="p" style={{ lineHeight: 1.6 }}>
            This page provides technical documentation for installing, configuring,
            and extending WebGA. Ideal for developers, advanced simmers, and cockpit builders.
          </Text>

          <Box mt="6">
            <Accordion.Root type="single" collapsible>
              <Accordion.Item value="system-requirements">
                <Accordion.Header>
                  <Accordion.Trigger
                    style={accordionTriggerStyle}
                  >
                    System Requirements & Compatibility
                    <ChevronDownIcon />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content style={accordionContentStyle}>
                  <ul>
                    <li>X-Plane 12 (tested with version 12.0.9 and above)</li>
                    <li>Modern web browser (Chrome, Safari, Edge)</li>
                    <li>Device on same network (local Wi-Fi) for tablet control</li>
                  </ul>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="network-configuration">
                <Accordion.Header>
                  <Accordion.Trigger
                    style={accordionTriggerStyle}
                  >
                    Network & Port Configuration
                    <ChevronDownIcon />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content style={accordionContentStyle}>
                  <p>
                    WebGA runs a local server on port 8080. Make sure your firewall
                    allows this port, and that your tablet or other device can access
                    your simulator machine via IP or .local hostname.
                  </p>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="customizing-layouts">
                <Accordion.Header>
                  <Accordion.Trigger
                    style={accordionTriggerStyle}
                  >
                    Customizing Panel Layouts
                    <ChevronDownIcon />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content style={accordionContentStyle}>
                  <p>
                    Layouts are stored in <code>config/panels.json</code>. You can
                    define new views, re-order components, or assign them to specific
                    aircraft profiles.
                  </p>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="developer-api">
                <Accordion.Header>
                  <Accordion.Trigger
                    style={accordionTriggerStyle}
                  >
                    Developer API (Experimental)
                    <ChevronDownIcon />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content style={accordionContentStyle}>
                  <p>
                    WebGA exposes a small JavaScript API at <code>window.webga</code>
                    which allows you to interact with stream state, panels, and
                    event listeners. More documentation coming soon.
                  </p>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="faq">
                <Accordion.Header>
                  <Accordion.Trigger
                    style={accordionTriggerStyle}
                  >
                    FAQ
                    <ChevronDownIcon />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content style={accordionContentStyle}>
                  <p><strong>Q:</strong> Can I use WebGA remotely over the internet?<br />
                  <strong>A:</strong> WebGA is designed for LAN use only. Remote access is not recommended without tunneling.</p>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

const accordionTriggerStyle: React.CSSProperties = {
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
};

const accordionContentStyle = {
  backgroundColor: "#1e1e1e",
  color: "#ccc",
  padding: "1rem",
  borderRadius: "8px",
  marginBottom: "1rem",
};
