import { Box, Heading, Text } from "@radix-ui/themes";
import Footer from "./Footer";

export default function Contact() {
  return (
    <Box p="6" style={{ color: "white" }}>
      <Heading size="7" mb="4">Contact</Heading>
      <Text>For questions, contact us at support@zoal.app.</Text>
      <Footer />
    </Box>
  );
}
