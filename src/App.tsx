import "@radix-ui/themes/styles.css";
import "./App.css";
import { Box, Button, Callout, Flex, Heading, Text, Theme } from "@radix-ui/themes";
import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";


function App() {
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
          // padding: "4rem 1rem",
        }}
      >
        <NavBar />

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
            mt="6"
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
          <Callout.Root style={{ animation: "fadeInUp 2.2s ease-out both" }} color="blue" size="3" mt="4">
            <Callout.Text>
              ✨ Update: Try WebGA for free with the Laminar C172! &nbsp;
              <Link to="/instructions" style={{ textDecoration: "underline", color: "#60a5fa" }}>
                Get started for free today!
              </Link>
            </Callout.Text>
          </Callout.Root>

          <Flex
            direction={{ initial: "column", md: "row" }}
            gap="4"
            justify="center"
            align="center"
            style={{
              width: "100%",
              marginTop: "2rem",
            }}
          >
            <Button
              size="4"
              color="sky"
              mt="2"
              variant="solid"
              style={{ animation: "fadeInUp 2.2s ease-out both", minWidth: "180px" }}
              onClick={() =>
                window.open("https://store.zoal.app", "_blank")
              }
            >
              Join Early Access
            </Button>
            <Button
              size="4"
              color="sky"
              mt="2"
              variant="outline"
              style={{ animation: "fadeInUp 2.2s ease-out both", minWidth: "180px" }}
              onClick={() =>
                window.open("https://discord.gg/bXGa9K4pme", "_blank")
              }
            >
              Join the Discord
            </Button>
          </Flex>

          <motion.img
            src="./zoalipad.png"
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
              <Heading size="7" as="h2" highContrast style={{ color: "white" }}>
                Experience X-Plane like never before
              </Heading>
              <Heading size="5" as="h2" mt="6" highContrast style={{ color: "white" }}>
                Have full view of your aircraft systems from your very own home cockpit devices.
              </Heading>
              <Heading size="5" as="h2" mt="6" highContrast style={{ color: "white" }}>
                Your avionics at the tip of your finger: Say goodbye to the days of mouse frustrations - whether on
                approach or on the ground.
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              marginTop: "6rem",
              maxWidth: "1000px",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
              color: "white",
            }}
          >
            <Heading size="6" as="h2" mb="4">
              What is WebGA?
            </Heading>

            <Text
              as="p"
              style={{
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                lineHeight: 1.6,
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              <strong>WebGA</strong> is a lightweight companion plugin for X-Plane 12 that extends your aircraft's
              avionics directly to your iPad or tablet — no clunky software bridges or extra hardware required. It
              mirrors your cockpit's G1000 PFD/MFD, Garmin G530, or almost any other popout X-Plane 12 window in near
              real-time over Wi-Fi, allowing you to interact with the avionics as if they were built into your home
              cockpit.
              <br /><br />
              Whether you're managing an approach, tuning radios, or just want to declutter your monitor, WebGA gives
              you the freedom to fly your sim the way it was meant to be flown — hands-on, heads-up.
            </Text>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
            >
              <Button
                size="4"
                color="sky"
                variant="solid"
                mt="8"
                onClick={() => window.location.href = "/instructions"}
              >
                See It In Action
              </Button>
            </motion.div>
          </motion.div>

          {/* Supported Aircraft / Devices / Features / Release Notes */}
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
            <Box style={{ flex: "1 1 400px", minWidth: "300px" }}>
              <Heading size="6" as="h2" mb="4">
                ✅ Supported Aircraft
              </Heading>
              <ul style={{ listStyleType: "square", paddingLeft: "1.5rem", lineHeight: "2" }}>
                <li>AFL C172 Analog & Digital</li>
                <li>TorqueSim Cirrus SR22</li>
                <li>Aerobask Phenom 300</li>
                <li>C90B G1000/G530</li>
                <li>AFL KingAir 350</li>
                <li>Virtually any aircraft using default Garmin G1000/G530 stack</li>
              </ul>
            </Box>

            <Box style={{ flex: "1 1 400px", minWidth: "300px" }}>
              <Heading size="6" as="h2" mb="4">
                📱 Supported Devices
              </Heading>
              <Text size="4">WebGA runs on any modern tablet with a browser:</Text>
              <ul style={{ listStyleType: "square", paddingLeft: "1.5rem", lineHeight: "2" }}>
                <li>iPad</li>
                <li>Android Tablets</li>
                <li>Windows Surface</li>
                <li>Amazon Fire</li>
                <li>... and more</li>
              </ul>
            </Box>

            <Box style={{ flex: "1 1 400px", minWidth: "300px" }}>
              <Heading size="6" as="h2" mb="4">
                🎛️ Included Simulation Modules
              </Heading>
              <ul style={{ listStyleType: "square", paddingLeft: "1.5rem", lineHeight: "2" }}>
                <li>G1000 PFD</li>
                <li>G1000 MFD</li>
                <li>Garmin G530</li>
                <li>GCU 478 Control Unit</li>
                <li>SR22 GCU</li>
              </ul>
            </Box>

            <Box style={{ flex: "1 1 400px", minWidth: "300px" }}>
              <Heading size="6" as="h2" mb="4">
                🛫 Release Notes: <code>v001b2</code>
              </Heading>
              <Text size="4">
                New aircraft support added: <br />
                ✅ X-Plane 12 SR22 GCU integration <br />
                ✅ Improved G1000 wrapper <br />
                ✅ Improved compatibility with non-Garmin stack avionics
              </Text>
            </Box>
          </motion.div>

          {/* Footer */}
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
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              letterSpacing: "0.02em",
              padding: "0 1rem",
            }}
          >
            <Box mb="6">WebGA is powered by</Box>
            <Box>
              <img
                src="./zoalsimmods.svg"
                alt="ZOAL Logo"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
          </motion.div>
          <Footer />
        </Flex>
      </Box>
    </Theme>
  );
}

export default App;
