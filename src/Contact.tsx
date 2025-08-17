import { Box, Heading, Text } from "@radix-ui/themes";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Contact() {
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
            Contact & Support
          </Heading>

          <Text mb="4" size="4" as="p" style={{ lineHeight: 1.6, marginBottom: "2rem" }}>
            We're here to help you get the most out of WebGA. Whether you're just getting
            started or need assistance with advanced features, we have resources available
            for you.
          </Text>
          <Box mb="4" /> {/* Radix Box as a spacer */}


          {/* Quick Links Section */}
          <Box
            style={{
              backgroundColor: "#141414",
              borderRadius: "12px",
              padding: "2rem",
              border: "1px solid #2c2c2c",
              marginBottom: "2rem",
            }}
          >
            <Heading as="h2" size="5" mb="4" style={{ color: "#4ea1ff" }}>
              Quick Links
            </Heading>



            <Box style={{ marginBottom: "1.5rem" }}>
              <Link
                to="/instructions"
                style={{
                  color: "#4ea1ff",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  fontWeight: "500",
                }}
              >
                📚 Installation Instructions: {" "}
              </Link>
              <Text
                size="3"
                as="p"
                style={{
                  color: "#ccc",
                  marginTop: "0.5rem",
                  lineHeight: 1.6,
                }}
              >
                Detailed installation guide with video tutorials to help you get
                WebGA up and running smoothly.
              </Text>
            </Box>
            <Box style={{ marginBottom: "1.5rem" }}>
              <Link
                to="/checklist"
                style={{
                  color: "#4ea1ff",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  fontWeight: "500",
                }}
              >
                ✓ Pre-Flight Checklist: {" "}
              </Link>
              <Text
                size="3"
                as="p"
                style={{
                  color: "#ccc",
                  marginTop: "0.5rem",
                  lineHeight: 1.6,
                }}
              >
                Step-by-step checklist to ensure you've completed all necessary
                setup steps for WebGA.
              </Text>
            </Box>

            <Box>
              <a
                href="https://discord.gg/dfkVEzVsuS"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#4ea1ff",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  fontWeight: "500",
                }}
              >
                💬 Join our Discord Community:  {" "}
              </a>
              <Text
                size="3"
                as="p"
                style={{
                  color: "#ccc",
                  marginTop: "0.5rem",
                  lineHeight: 1.6,
                }}
              >
                Connect with other WebGA users, get real-time support, share tips,
                and stay updated on the latest features.
              </Text>
            </Box>
          </Box>

          {/* Contact Information */}
          <Box
            style={{
              backgroundColor: "#141414",
              borderRadius: "12px",
              padding: "2rem",
              border: "1px solid #2c2c2c",
              marginBottom: "2rem",
            }}
          >
            <Heading as="h2" size="5" mb="3" style={{ color: "#4ea1ff" }}>
              Email Support
            </Heading>
            <Text size="4" as="p" style={{ lineHeight: 1.6 }}>
              Although Discord is faster and better for support, we want to remain transparent. For questions or technical support, reach out to us at{" "}
              <a
                href="mailto:support@zoal.app"
                style={{ color: "#4ea1ff", textDecoration: "underline" }}
              >
                support@zoal.app
              </a>
            </Text>
          </Box>

          {/* Thank You Section */}
          <Box
            style={{
              backgroundColor: "#1e1e1e",
              borderRadius: "12px",
              padding: "2rem",
              border: "1px solid #4ea1ff33",
              textAlign: "center",
            }}
          >
            <Heading as="h2" size="5" mb="3" style={{ color: "#4ea1ff" }}>
              Thank You! 🚀
            </Heading>
            <Text
              size="4"
              as="p"
              style={{
                lineHeight: 1.8,
                color: "#ccc",
              }}
            >
              We're grateful for your support in helping us get WebGA off the ground.
              Your feedback, bug reports, and enthusiasm drive us to continuously
              improve and expand what's possible in flight simulation. Together, we're
              building the future of home cockpit interaction.
            </Text>
            <Text
              size="3"
              as="p"
              style={{
                marginTop: "1rem",
                color: "#888",
                fontStyle: "italic",
              }}
            >
              {" "}— The ZOAL Team
            </Text>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}