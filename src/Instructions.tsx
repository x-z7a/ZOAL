// Instructions.tsx
import { Box, Heading, Text } from "@radix-ui/themes";
import NavBar from "./NavBar";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Footer from "./Footer";

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

          <ul
            style={{ paddingLeft: "1.5rem", lineHeight: 2, marginTop: "1rem" }}
          >
            <li>
              <a
                href="https://github.com/x-z7a/webga-release/releases/latest/download/WebGA.zip"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#4ea1ff", textDecoration: "underline" }}
              >
                Download the latest release
              </a>{" "}
              , unzip it and drag it into your X-Plane 12 plugins folder like:{" "}
              <pre>X-Plane 12/Resources/Plugins/WebGA</pre>
            </li>
            <li>Free Trial: You will have unlimited time experimenting with WebGA if using the defaul Laminar C172 G1000.</li>
            <li>
              Once X-plane 12 is running, and as part of your checklist process,
              go to{" "}
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
              On your tablet or whichever device you will use as your avionics,
              visit{" "}
              <a
                href="http://webga.local:8080"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#4ea1ff", textDecoration: "underline" }}
              >
                webga.local:8080
              </a>
              <span className="tooltip-container">
                <span className="tooltip-icon">(what's this?) &nbsp;</span>
                <span className="tooltip-text">
                  ".local" lets your device find others on the same Wi-Fi by
                  name (e.g., "webga.local") instead of needing the IP address.
                  Supported on Apple and newer Android devices.
                </span>
              </span>
              (When using an Apple device or an Android device released after
              2021) or{" "}
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
{/* instructions */}
          <Heading as="h2" size="6" mt="6" mb="2" highContrast>
            More Detailed Instructions
          </Heading>

          <Text size="4" as="p" style={{ lineHeight: 1.6 }}>
            For those who prefer a more detailed guide, we have provided a
            comprehensive set of instructions. This includes step-by-step
            guidance on how to set up your system, configure your devices, and
            optimize your experience with WebGA.
          </Text>
          <Text mt="4" size="4" as="p" style={{ lineHeight: 1.6 }}>
            <strong>Note:</strong> The visuals and layout of WebGA in the videos below may be different than your version. That being said, the processes should remain the same. We'll do our best to update the videos with each major WebGA release.
          </Text>

          <Box mt="6">
            <Accordion.Root type="single" collapsible>
              <Accordion.Item value="download-and-installation">
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
                    Download and Installation
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
                  <p>
                    Download and installation is easy. Just follow the steps in
                    the video below.
                  </p>
                  <Box
                    style={{
                      position: "relative",
                      paddingBottom: "56.25%",
                      height: 0,
                      marginBottom: "1rem",
                    }}
                  >
                    <iframe
                      src="https://www.loom.com/embed/1d3574bc27db4b48a0007dc4732cd5ea?sid=4baf7bfd-e5a3-4e4c-b4ae-dc4cca76e92a"
                      frameBorder="0"
                      allowFullScreen
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: "8px",
                      }}
                      title="WebGA Download and Installation Video"
                    />
                  </Box>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="loading-webga">
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
                    Loading WebGA for the first time
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
                  <p>Running WebGA for the first time is pretty easy, and once you watch this video - you'll be a pro!</p>
                  <p><strong>Key Notes:</strong> From your simulator machine, access <strong>localhost:8080</strong> in the browser</p>
                  <p>From your iPad or tablet, access either <strong>webga.local:8080</strong> (if your device supports it) or <strong>yoursimulatoripaddress:8080</strong></p>
                  <Box py="4"><h3>Getting Started</h3></Box>
                  <Box mb="4"
                    style={{
                      position: "relative",
                      paddingBottom: "56.25%",
                      height: 0,
                      marginBottom: "1rem",
                    }}
                  >
                    <iframe
                      src="https://www.loom.com/embed/e83e91fe0d984388920a478f4b4e7579?sid=8b5838f7-7951-4619-a01d-a3f8066eadb1"
                      frameBorder="0"
                      allowFullScreen
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: "8px",
                      }}
                      title="WebGA Loading for the First Time Video"
                    />
                  </Box>
                  <Box py="4"><h3>From your iPad or Tablet</h3></Box>
                    <Box mb="4"
                    style={{
                      position: "relative",
                      paddingBottom: "56.25%",
                      height: 0,
                      marginBottom: "1rem",
                    }}
                  >
                    <iframe
                      src="https://www.youtube.com/embed/LZyPVmtVpI8?si=YKOg99zSmaK12Jl5"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: "8px",
                      }}
                    />

                  </Box>
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
                    Another Coming Soon
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
                  Another Coming Soon!
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </Box>
          {/* faq */}
          <Heading as="h2" size="6" mt="9" mb="2" highContrast>
           Frequently Asked Questions
          </Heading>

          <Text size="4" as="p" style={{ lineHeight: 1.6 }}>
            We get questions from time to time about some quirks. Here, we attempt to answer some of those the most commonly asked questions.
          </Text>
          

          <Box mt="6">
            <Accordion.Root type="single" collapsible>
              <Accordion.Item value="resize-the-window">
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
                    My stream isn't sized properly, what do I do?
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
                  <p>
                    This is most commonly caused by the popped out window not being sized correctly. Watch this video to see how to fix this.
                  </p>
                  <Box
                    style={{
                      position: "relative",
                      paddingBottom: "56.25%",
                      height: 0,
                      marginBottom: "1rem",
                    }}
                  >
                    <iframe
                      src="https://www.loom.com/embed/6259530563ff42999b8ab1b84d64132f?sid=12d6bd0a-032d-439e-817b-edab2dc4bd51"
                      frameBorder="0"
                      allowFullScreen
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: "8px",
                      }}
                      title="WebGA Download and Installation Video"
                    />
                  </Box>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="loading-webga">
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
                    Another Coming Soon
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
                  <p>Running WebGA for the first time is pretty easy, and once you watch this video - you'll be a pro!</p>
                  <p><strong>Key Notes:</strong> From your simulator machine, access <strong>localhost:8080</strong> in the browser</p>
                  <p>From your iPad or tablet, access either <strong>webga.local:8080</strong> (if your device supports it) or <strong>yoursimulatoripaddress:8080</strong></p>
                  <Box py="4"><h3>Getting Started</h3></Box>
                  <Box mb="4"
                    style={{
                      position: "relative",
                      paddingBottom: "56.25%",
                      height: 0,
                      marginBottom: "1rem",
                    }}
                  >
                    <iframe
                      src="https://www.loom.com/embed/e83e91fe0d984388920a478f4b4e7579?sid=8b5838f7-7951-4619-a01d-a3f8066eadb1"
                      frameBorder="0"
                      allowFullScreen
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: "8px",
                      }}
                      title="WebGA Loading for the First Time Video"
                    />
                  </Box>
                  <Box py="4"><h3>From your iPad or Tablet</h3></Box>
                    <Box mb="4"
                    style={{
                      position: "relative",
                      paddingBottom: "56.25%",
                      height: 0,
                      marginBottom: "1rem",
                    }}
                  >
                    <iframe
                      src="https://www.youtube.com/embed/LZyPVmtVpI8?si=YKOg99zSmaK12Jl5"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: "8px",
                      }}
                    />

                  </Box>
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
                    Another Coming Soon
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
                  Another Coming Soon
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
