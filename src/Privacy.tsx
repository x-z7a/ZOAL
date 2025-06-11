import { Box, Heading, Text } from "@radix-ui/themes";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { motion } from "framer-motion";

export default function Privacy() {
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
              Privacy Policy
            </Heading>

            <Text
              as="p"
              size="4"
              style={{ lineHeight: 1.8, marginBottom: "2rem" }}
            >
              Effective Date: {new Date().toLocaleDateString()}
            </Text>

            <Heading as="h2" size="6" mb="3" mt="6">
              Introduction
            </Heading>
            <Text as="p" size="4" mb="4">
              ZOAL ("we", "our", or "us") is a flight simulation companion
              platform designed to enhance your X-Plane experience through a
              responsive web interface and plugin system. This Privacy Policy
              explains how we collect, use, and protect your information across
              our services, including the WebGA plugin, xGot server, G1000 and
              SR22 modules, and the zoal.app website.
            </Text>

            <Heading as="h2" size="6" mb="3" mt="6">
              What We Collect
            </Heading>
            <ul
              style={{
                paddingLeft: "1.5rem",
                lineHeight: 2,
                marginBottom: "2rem",
              }}
            >
              <li>
                <strong>Beta Registration:</strong> We collect your name, email,
                and optional Discord handle when you sign up for beta access to
                WebGA or its modules.
              </li>
              <li>
                <strong>Authentication:</strong> GumRoad is used to handle authentication for your license key. We do not store any of your GumRoad credentials.
                We can, and do, verify that your license key is valid and active at the time of activation.
              </li>
              <li>
                <strong>Plugin Activity:</strong> The WebGA plugin installed in
                X-Plane operates over your local network only. No flight data is
                transmitted to external servers.
              </li>
              <li>
                <strong>Device & Browser Info:</strong> We may collect anonymous
                technical details like browser type, viewport size, and
                operating system for UX debugging and analytics.
              </li>
            </ul>

            <Heading as="h2" size="6" mb="3">
              How We Use Your Information
            </Heading>
            <ul
              style={{
                paddingLeft: "1.5rem",
                lineHeight: 2,
                marginBottom: "2rem",
              }}
            >
              <li>
                To provide access to WebGA, including xGot and all simulation
                modules.
              </li>
              <li>
                To deliver customized tools such as the G1000 and SR22
                interfaces.
              </li>
              <li>
                To improve performance and identify issues via anonymized usage
                data.
              </li>
              <li>
                To notify users of updates, issues, or availability during beta
                testing.
              </li>
              <li>
                To ensure your license key is being used in compliance with our
                terms of use.
              </li>
            </ul>

            <Heading as="h2" size="6" mb="3">
              Local Network and Data Isolation
            </Heading>
            <Text as="p" size="4" mb="4">
              All real-time interaction between the WebGA tablet interface and
              the simulator (via the xGot server and plugin) occurs locally. No
              simulator inputs, positional data, or aircraft telemetry is
              transmitted externally. You maintain full control of your flight
              environment at all times.
            </Text>

            <Heading as="h2" size="6" mb="3" mt="6">
              Data Storage and Security
            </Heading>
            <Text as="p" size="4" mb="4">
              www.ZOAL.app uses Netlify for deployment. Any collected
              information is stored securely and is encrypted in transit and
              stored securely. We do not sell or share your personal data with
              third parties, advertisers, or affiliates. WebGA does not collect
              any personal information of yours, not is it transmitted to any
              external servers.
            </Text>

            <Heading as="h2" size="6" mb="3" mt="6">
              Cookies and Local Storage
            </Heading>
            <Text as="p" size="4" mb="4">
              ZOAL does not use third-party cookies. Local storage may be used
              to enhance in-browser UI responsiveness (e.g., saving panel layout
              preferences). No information is tracked between sessions unless
              explicitly submitted.
            </Text>

            <Heading as="h2" size="6" mb="3" mt="6">
              Your Rights
            </Heading>
            <ul
              style={{
                paddingLeft: "1.5rem",
                lineHeight: 2,
                marginBottom: "2rem",
              }}
            >
              <li>Access or update your registration data at any time.</li>
              <li>Request deletion of your account and related metadata.</li>
              <li>
                Contact us at <strong>support@zoal.app</strong> for any
                questions or privacy concerns.
              </li>
            </ul>

            <Heading as="h2" size="6" mb="3">
              Future Enhancements
            </Heading>
            <Text as="p" size="4" mb="4">
              As we expand support for other aircraft, integrations (such as
              multiplayer syncing or real-time charts), or advanced features, we
              will notify users and update this policy to reflect new data
              handling practices, if any.
            </Text>

            <Heading as="h2" size="6" mb="3">
              Policy Updates
            </Heading>
            <Text as="p" size="4" mb="6">
              We may update this Privacy Policy as needed to reflect service
              changes or improvements. All updates will be published on this
              page and include a new effective date at the top.
            </Text>
          </Box>
        </Box>
      </motion.div>
      <Footer />
    </>
  );
}
