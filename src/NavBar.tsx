import { Link } from "react-router-dom";
import { Flex, Text } from "@radix-ui/themes";

export default function NavBar() {
  return (
    <Flex
      justify="center"
      align="center"
      gap="6"
      style={{
        padding: "1.5rem 0",
        backgroundColor: "#111",
        borderBottom: "1px solid #333",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <Text size="4" weight="regular">
          Home
        </Text>
      </Link>

      <Link
        to="/instructions"
        style={{ color: "white", textDecoration: "none" }}
      >
        <Text size="4" weight="regular">
          Instructions
        </Text>
      </Link>

            <Link
        to="/documentation"
        style={{ color: "white", textDecoration: "none" }}
      >
        <Text size="4" weight="regular">
          Documentation
        </Text>
      </Link>
      

      <a
        href="https://store.zoal.app"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "white", textDecoration: "none" }}
      >
        <Text size="4" weight="regular">
          Join Early Access
        </Text>
      </a>
    </Flex>
  );
}
