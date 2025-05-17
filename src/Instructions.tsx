// Instructions.tsx
import { Box, Heading, Text } from "@radix-ui/themes";
import NavBar from "./NavBar";

export default function Instructions() {
  return (
    <><NavBar /><Box
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
          <li>Install the WebGA plugin into your X-Plane 12 plugins folder</li>
          <li>Run X-Plane and enable WebGA from the plugins menu</li>
          <li>
            On your tablet, visit the provided WebGA link to start controlling
            your avionics
          </li>
        </ul>

        <Heading as="h2" size="6" mt="6" mb="2" highContrast>
          Sample Lore Ipsum Section
        </Heading>

        <Text size="4" as="p" style={{ lineHeight: 1.6 }}>
          In a world where sim pilots dreamed of seamless control, WebGA emerged
          like a digital co-pilot. With no wires, no clunky configs, and no
          limits, lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque porta lectus at ipsum rutrum, vel tincidunt arcu
          tristique. Curabitur sodales sapien in lorem vehicula, nec
          scelerisque justo fermentum. 🚀
        </Text>
      </Box>
    </Box></>
  );
}
