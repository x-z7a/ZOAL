import { Box, Flex, Heading, Text, Button } from "@radix-ui/themes";
import "./App.css"; // Put animations here

function App() {
  return (
    <Box
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #1a1a1a, #0a0a0a)",
        padding: "4rem 1rem",
      }}
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        gap="6"
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          animation: "fadeIn 1.2s ease-out both",
        }}
      >
        <Heading
          size="9"
          as="h1"
          highContrast
          style={{
            textAlign: "center",
            letterSpacing: "-0.015em",
            lineHeight: 1.1,
            animation: "fadeInUp 1.4s ease-out both",
          }}
        >
          WebGA is purpose-built to elevate your X-Plane simulation experience
        </Heading>

        <Text
          as="p"
          size="5"
          color="gray"
          style={{
            textAlign: "center",
            maxWidth: "720px",
            animation: "fadeInUp 1.6s ease-out both",
          }}
        >
          Welcome to the next generation of X-Plane simulation. <br />
          Bring your simulation to life with WebGA.
        </Text>

        <img
          src="./zoalipad1.png"
          alt="WebGA UI Screenshot"
          style={{
            width: "100%",
            maxWidth: "900px",
            borderRadius: "var(--radius-4)",
            boxShadow: "0px 40px 80px rgba(0, 0, 0, 0.5)",
            animation: "float 6s ease-in-out infinite, fadeInUp 2s ease-out both",
          }}
        />

        <Button size="4" color="sky" variant="solid" style={{ animation: "fadeInUp 2.2s ease-out both" }}>
          Get Started
        </Button>
      </Flex>
    </Box>
  );
}

export default App;
