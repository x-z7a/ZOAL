import "@radix-ui/themes/styles.css";
import "./App.css";
import { useState } from "react";
import { Box, Flex, Heading, Text, Button, TextField } from "@radix-ui/themes";
import * as Toast from "@radix-ui/react-toast";
import { Theme } from "@radix-ui/themes";
import { motion } from "framer-motion";


function App() {
  const [openToast, setOpenToast] = useState(false);

  return (
    <Theme
      appearance="dark"
      accentColor="indigo"
      grayColor="sand"
      radius="large"
      scaling="100%"
    >
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
            maxWidth: "1000px",
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

          <Button
            size="4"
            color="sky"
            mt="6"
            variant="solid"
            style={{ animation: "fadeInUp 2.2s ease-out both" }}
            onClick={() => window.open("https://zoal.gumroad.com/l/WebGA", "_blank")}
          >
            Join Early Access
          </Button>

          <motion.img
            src="./zoalipad1.png"
            alt="WebGA UI Screenshot"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            style={{
              width: "100%",
              marginTop: "4rem",
              maxWidth: "900px",
              borderRadius: "var(--radius-4)",
              boxShadow: "0px 40px 80px rgba(0, 0, 0, 0.5)",
              animation: "float 6s ease-in-out infinite",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "2rem",
              marginTop: "6rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Box style={{ flex: "1 1 200px" }}>
              <Heading
                size="7"
                as="h2"
                highContrast
                style={{
                  color: "white",
                  lineHeight: 1.2,
                  fontWeight: "700",
                }}
              >
                Experience X-Plane like never before
              </Heading>
              <Heading
                size="5"
                as="h2"
                mt="6"
                highContrast
                style={{
                  color: "white",
                  lineHeight: 1.2,
                  fontWeight: "500",
                }}
              >
                Have full view of your aircraft systems from your very own home
                cockpit devices. <br />
              </Heading>
              <Heading
                size="5"
                as="h2"
                mt="6"
                highContrast
                style={{
                  color: "white",
                  lineHeight: 1.2,
                  fontWeight: "500",
                }}
              >
                Your avionics at the tip of your finger: Say goodbye to the days
                of mouse frustrations - whether on approach or on the ground.{" "}
                <br />
              </Heading>
            </Box>

            <Box style={{ flex: "1 1 600px", textAlign: "center" }}>
              <img
                src="./retro1.png"
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  borderRadius: "12px",
                  boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.5)",
                }}
              />
            </Box>
          </motion.div>
          {/* Supported Aircraft */}
          {/* Features Grid Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2rem",
              marginTop: "6rem",
              color: "white",
              maxWidth: "1000px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {/* Supported Aircraft */}
            <Box style={{ flex: "1 1 400px", minWidth: "300px" }}>
              <Heading size="6" as="h2" mb="4">
                ✅ Supported Aircraft
              </Heading>
              <ul
                style={{
                  listStyleType: "square",
                  paddingLeft: "1.5rem",
                  lineHeight: "2",
                }}
              >
                <li>Cessna 172 G1000</li>
                <li>Cirrus SR22</li>
                <li>Laminar Research Baron 58</li>
                <li>Any aircraft using default Garmin G1000/G530 stack</li>
              </ul>
            </Box>

            {/* Supported Devices */}
            <Box style={{ flex: "1 1 400px", minWidth: "300px" }}>
              <Heading size="6" as="h2" mb="4">
                📱 Supported Devices
              </Heading>
              <Text size="4">
                WebGA runs on any modern tablet with a browser:
                <br />
                iPad, Android tablet, Amazon Fire, and more.
              </Text>
            </Box>

            {/* Included Features */}
            <Box style={{ flex: "1 1 400px", minWidth: "300px" }}>
              <Heading size="6" as="h2" mb="4">
                🎛️ Included Simulation Modules
              </Heading>
              <ul
                style={{
                  listStyleType: "square",
                  paddingLeft: "1.5rem",
                  lineHeight: "2",
                }}
              >
                <li>G1000 PFD</li>
                <li>G1000 MFD</li>
                <li>Garmin G530</li>
                <li>GCU 478 Control Unit</li>
                <li>SR22 GCU</li>
              </ul>
            </Box>

            {/* Release Notes */}
            <Box style={{ flex: "1 1 400px", minWidth: "300px" }}>
              <Heading size="6" as="h2" mb="4">
                🛫 Release Notes: <code>v001b2</code>
              </Heading>
              <Text size="4">
                New aircraft support added: <br />
                ✅ X-Plane 12 SR22 GCU integration <br />✅ Improved
                compatibility with non-Garmin stack avionics
              </Text>
            </Box>
          </motion.div>

          {/* Bold ZOAL statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              maxWidth: "900px",
              margin: "4rem auto 6rem auto",
              textAlign: "center",
              fontWeight: "bold",
              color: "#3498db",
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", // scales between mobile and desktop
              letterSpacing: "0.02em",
              padding: "0 1rem", // adds horizontal breathing room
            }}
          >
            <Box mb="6">WebGA is powered by</Box>
            <Box>
              <img
                src="./zoalsimmods.svg"
                alt="ZOAL Logo"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Box>
          </motion.div>

          {/* Footer */}
          <footer
            style={{
              borderTop: "1px solid #333",
              padding: "2rem 1rem",
              textAlign: "center",
              color: "gray",
            }}
          >
            <Text size="2">
              © {new Date().getFullYear()} ZOAL. All rights reserved.
            </Text>
            <Flex gap="4" justify="center" mt="3">
              <a
                href="#"
                style={{ color: "gray", textDecoration: "underline" }}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                style={{ color: "gray", textDecoration: "underline" }}
              >
                Terms of Use
              </a>
              <a
                href="#"
                style={{ color: "gray", textDecoration: "underline" }}
              >
                Contact
              </a>
            </Flex>
          </footer>
        </Flex>
      </Box>

      <Toast.Provider swipeDirection="right">
        <Toast.Root
          open={openToast}
          onOpenChange={setOpenToast}
          duration={4000}
        >
          <Toast.Title>We’ll be in touch soon!</Toast.Title>
        </Toast.Root>
        <Toast.Viewport className="toast-viewport" />
      </Toast.Provider>
    </Theme>
  );
}

export default App;
