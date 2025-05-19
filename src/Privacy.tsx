import { Box, Heading, Text } from "@radix-ui/themes";
import Footer from "./Footer";

export default function Privacy() {
  return (
    <Box p="6" style={{ color: "white" }}>
      <Heading size="7" mb="4">Privacy Policy</Heading>
      <Text>This is the privacy policy for ZOAL.</Text>
      <Footer />
    </Box>
  );
}
