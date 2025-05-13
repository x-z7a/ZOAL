import "./App.css";
import { Flex, Heading, Text, Button, ThemePanel, Box } from "@radix-ui/themes";

function App() {
  return (
    <Flex justify="center">
      <Box width="60%">
        <Flex direction="column" gap="2">
          <Box width="85%">
            <Heading size="9" weight="bold" color="sky">
              WebGA is purpose built to elevate your X-plane Simulation
              Experience
            </Heading>
            <Heading size="4" color="sky" mt="6">
              Welcome to the next generation of X-plane simulation. <br />
              Bring your simulation to life with WebGA!
            </Heading>
          </Box>
          <img
            src="./zoalipad1.png"
            alt="Description of the image"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Flex>
      </Box>
    </Flex>
  );
}

export default App;
