import { Box, Heading, Text } from "@radix-ui/themes";
import Footer from "./Footer";

export default function Terms() {
  return (
    <Box p="6" style={{ color: "white" }}>
      <Heading size="7" mb="4">Terms of Use</Heading>
      <Text>These are the terms of use for ZOAL.</Text>
      <Footer />
    </Box>
  );
}
