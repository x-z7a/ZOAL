import { Text, Flex } from "@radix-ui/themes";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #333",
        padding: "2rem 1rem",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Text size="2">© {new Date().getFullYear()} ZOAL. All rights reserved.</Text>
      <Flex gap="4" justify="center" mt="3">
        <Link to="/privacy" style={{ color: "gray", textDecoration: "underline" }}>
          Privacy Policy
        </Link>
        <Link to="/terms" style={{ color: "gray", textDecoration: "underline" }}>
          Terms of Use
        </Link>
        <Link to="/contact" style={{ color: "gray", textDecoration: "underline" }}>
          Contact
        </Link>
      </Flex>
    </footer>
  );
}
