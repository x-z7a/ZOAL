import { Box, Heading, Text } from "@radix-ui/themes";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { motion } from "framer-motion";

export default function Terms() {
  return (
    <>
      <NavBar />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Box
          style={{
            minHeight: "100vh",
            background: "radial-gradient(circle at top, #1a1a1a, #0a0a0a)",
            padding: "4rem 1rem",
            color: "white",
          }}
        >
          <Box style={{ maxWidth: "800px", margin: "0 auto" }}>
            <Heading size="8" mb="6" highContrast>
              Terms of Use
            </Heading>

            <Text
              as="p"
              size="4"
              style={{ lineHeight: 1.8, marginBottom: "2rem" }}
            >
              Effective Date: {new Date().toLocaleDateString()}
            </Text>

            <Heading as="h2" size="6" mb="3">
              1. Acceptance of Terms
            </Heading>
            <Text as="p" size="4" mb="4">
              By accessing or using the WebGA plugin or the ZOAL.app website
              (collectively, the “Service”), you agree to be bound by these
              Terms of Use. If you do not agree to these terms, please do not
              use the Service.
            </Text>

            <Heading as="h2" size="6" mb="3">
              2. License Grant
            </Heading>
            <Text as="p" size="4" mb="4">
              ZOAL grants you a non-exclusive, non-transferable, limited license
              to install and use the WebGA plugin for personal, non-commercial
              use within your household, in accordance with your license key.
              This license does not permit sharing, sublicensing, resale, or use
              in commercial training environments.
            </Text>

            <Heading as="h2" size="6" mb="3">
              3. Restrictions
            </Heading>
            <ul
              style={{
                paddingLeft: "1.5rem",
                lineHeight: 2,
                marginBottom: "2rem",
              }}
            >
              <li>
                You may not distribute, resell, or publicly host the plugin or
                its source code.
              </li>
              <li>
                You may not share your license key with others outside your
                household.
              </li>
              <li>
                You may not reverse engineer, decompile, disassemble, or modify
                any part of the WebGA plugin.
              </li>
              <li>
                Use of the plugin is limited to the duration and scope of your
                valid license key.
              </li>
            </ul>

            <Heading as="h2" size="6" mb="3">
              4. Intellectual Property
            </Heading>
            <Text as="p" size="4" mb="4">
              All content, branding, modules (such as the G1000 and SR22
              interfaces), and documentation made available by ZOAL remain the
              exclusive intellectual property of ZOAL and its contributors.
            </Text>

            <Heading as="h2" size="6" mb="3">
              5. Disclaimer of Warranty
            </Heading>
            <Text as="p" size="4" mb="4">
              The Service is provided “as is” and “as available.” ZOAL makes no
              warranties, express or implied, regarding performance,
              compatibility, or fitness for a particular purpose. You use the
              plugin at your own risk.
            </Text>

            <Heading as="h2" size="6" mb="3">
              6. Limitation of Liability
            </Heading>
            <Text as="p" size="4" mb="4">
              In no event shall ZOAL be liable for any direct, indirect,
              incidental, or consequential damages resulting from the use or
              inability to use the Service, including but not limited to loss of
              data, simulator crashes, or system incompatibility.
            </Text>

            <Heading as="h2" size="6" mb="3">
              7. Termination
            </Heading>
            <Text as="p" size="4" mb="4">
              ZOAL reserves the right to terminate your license or access to the
              Service at any time if these Terms are violated, or if misuse,
              piracy, or unauthorized access is detected.
            </Text>

            <Heading as="h2" size="6" mb="3">
              8. Changes to Terms
            </Heading>
            <Text as="p" size="4" mb="6">
              We may update these Terms periodically. Continued use of the
              Service following the posting of changes means you accept the
              updated terms. The latest version will always be available at{" "}
              <strong>zoal.app/terms</strong>.
            </Text>
            <Heading as="h2" size="6" mb="3">
              9. Third-Party Trademarks
            </Heading>
            <Text as="p" size="4" mb="6">
              WebGA and associated modules may emulate the look and behavior of
              real-world avionics systems, including the Garmin G1000, other
              Garmin-branded technologies, and those specifically licensed to
              aircraft manufacturers, such as the Cirrus, Embraer, etc., line of aircraft. All
              trademarks, logos, and brand names are the property of their
              respective owners. ZOAL makes no claim to ownership of Garmin's or any other manufacturers
              intellectual property, and our software is not affiliated with,
              endorsed by, or sponsored by Garmin Ltd. or any of its
              subsidiaries. The WebGA plugin is intended solely for use within
              flight simulator environments and does not represent or replicate
              certified aviation systems.
            </Text>
          </Box>
        </Box>
      </motion.div>
      <Footer />
    </>
  );
}
