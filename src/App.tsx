import "@radix-ui/themes/styles.css";
import "./App.css";
import { useState } from "react";
import { Box, Flex, Heading, Text, Button, TextField } from "@radix-ui/themes";
import * as Dialog from "@radix-ui/react-dialog";
import * as Toast from "@radix-ui/react-toast";
import * as Label from "@radix-ui/react-label";
import { Theme } from "@radix-ui/themes";
import { motion } from "framer-motion";

function App() {
  const [openDialog, setOpenDialog] = useState(false);
  const [openToast, setOpenToast] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    discord: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const formElement = e.target as HTMLFormElement;

  const formData = new FormData(formElement);

  try {
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    });

    setOpenDialog(false);
    setOpenToast(true);
    setForm({ name: "", email: "", discord: "" });
  } catch (error) {
    console.error("Form submission error:", error);
  }
};
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
            maxWidth: "960px",
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

          <Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
            <Dialog.Trigger asChild>
              <Button
                size="4"
                color="sky"
                mt="6"
                variant="solid"
                style={{ animation: "fadeInUp 2.2s ease-out both" }}
              >
                Join the Beta
              </Button>
            </Dialog.Trigger>

            <Dialog.Overlay className="dialog-overlay" />
            <Dialog.Content className="dialog-content">
              <Dialog.Title className="dialog-title">
                Join the Beta
              </Dialog.Title>
              <form
                name="beta"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="form-grid"
              >
                <input type="hidden" name="form-name" value="beta" />
                <input type="hidden" name="bot-field" />

                <Label.Root htmlFor="name">Name</Label.Root>
                <TextField.Root
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  color="sky"
                />

                <Label.Root htmlFor="email">Email</Label.Root>
                <TextField.Root
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  color="sky"
                />

                <Label.Root htmlFor="discord">
                  Discord Name - optional
                </Label.Root>
                <TextField.Root
                  id="discord"
                  name="discord"
                  value={form.discord}
                  onChange={handleChange}
                  color="sky"
                />

                <Flex gap="3" justify="end" mt="4">
                  <Dialog.Close asChild>
                    <Button variant="soft">Cancel</Button>
                  </Dialog.Close>
                  <Button type="submit" color="sky" variant="solid">
                    Submit
                  </Button>
                </Flex>
              </form>
            </Dialog.Content>
          </Dialog.Root>

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
                Have full view of  your aircraft systems from your very own home cockpit system. <br />
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
                Your avionics at the tip of your finger: Say goodbye to the days of mouse frustrations on approach or on the ground. <br />
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
