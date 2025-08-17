// Checklist.tsx
import { Box, Heading, Text } from "@radix-ui/themes";
import NavBar from "./NavBar";
import Footer from "./Footer";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { useState } from "react";

type ChecklistItem = {
    id: string;
    label: React.ReactNode;
};

export default function Checklist() {
    const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

    const handleCheckChange = (itemId: string, checked: boolean) => {
        setCheckedItems(prev => {
            const newSet = new Set(prev);
            if (checked) {
                newSet.add(itemId);
            } else {
                newSet.delete(itemId);
            }
            return newSet;
        });
    };

    const hostMachineItems: ChecklistItem[] = [
        {
            id: "host-browser",
            label: (
                <>
                    Go to{" "}
                    <a
                        href="http://localhost:8080"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#4ea1ff", textDecoration: "underline" }}
                    >
                        localhost:8080
                    </a>{" "}
                    from your browser of choice
                </>
            ),
        },

        {
            id: "ensure-popout",
            label: (
                <>
                    Pop-out the PFD, MFD, or device you wish to control from your remote device. This is not pop-up, this is pop-out into a separate X-Plane windoe.
                </>
            ),
        },
        {
            id: "host-select-device",
            label: (
                <>
                    In WebGA, select the device mode you wish to stream, i.e., G1000 PFD, MFD; G530, etc.                </>
            ),
        },
        {
            id: "host-select-device-popout",
            label: (
                <>
Following the instruction on screen, select the window you wish to stream.                </>
            ),
        },
        {
            id: "host-activate-stream",
            label: (
                <>
Activate stream ensuring the device has been chosen.                </>
            ),
        },

    ];

    const tabletItems: ChecklistItem[] = [
        {
            id: "tablet-access",
            label: (
                <>
                    Go to{" "}
                    <a
                        href="http://webga.local:8080"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#4ea1ff", textDecoration: "underline" }}
                    >
                        webga.local:8080
                    </a>{" "}
                    or{" "}
                    <a
                        href="http://yourmachineip:8080"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#4ea1ff", textDecoration: "underline" }}
                    >
                        {"<your machine IP>:8080"}
                    </a>
                </>
            ),
        },
                {
            id: "viewer-select-device",
            label: (
                <>
                    Select the device mode you wish to view, the same one selected from the previous set of steps.
                </>
            ),
        },
                        {
            id: "viewer-confirmation",
            label: (
                <>
                    Your iPad or tablet should now display the selected device's stream, giving you control over the chosen device.
                </>
            ),
        },
                                {
            id: "viewer-resize",
            label: (
                <>
                    Resize the popped-out window, if necessary, to fit your iPad or tablet screen.
                </>
            ),
        },
                                {
            id: "viewer-multiple-devices",
            label: (
                <>
To view multiple avionics devices from X-Plane, activate a new stream from the desktop view and repeat the process in a new tab or different iPad/tablet                </>
            ),
        },
    ];

    const ChecklistSection = ({
        title,
        items
    }: {
        title: string;
        items: ChecklistItem[]
    }) => (
        <>
            <Heading as="h3" size="4" mt="4" mb="3" style={{ color: "#ccc" }}>
                {title}
            </Heading>
            <Box style={{ marginBottom: "2rem" }}>
                {items.map((item) => (
                    <Box
                        key={item.id}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "0.75rem 1rem",
                            backgroundColor: "#1e1e1e",
                            borderRadius: "8px",
                            marginBottom: "0.75rem",
                            border: "1px solid #333",
                            transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#252525";
                            e.currentTarget.style.borderColor = "#4ea1ff33";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#1e1e1e";
                            e.currentTarget.style.borderColor = "#333";
                        }}
                    >
                        <Checkbox.Root
                            className="CheckboxRoot"
                            checked={checkedItems.has(item.id)}
                            onCheckedChange={(checked) =>
                                handleCheckChange(item.id, checked as boolean)
                            }
                            style={{
                                backgroundColor: checkedItems.has(item.id) ? "#4ea1ff" : "#2c2c2c",
                                width: "24px",
                                height: "24px",
                                borderRadius: "4px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "2px solid #4ea1ff",
                                cursor: "pointer",
                                flexShrink: 0,
                                transition: "all 0.2s ease",
                            }}
                        >
                            <Checkbox.Indicator>
                                <CheckIcon style={{ color: "white", width: "18px", height: "18px" }} />
                            </Checkbox.Indicator>
                        </Checkbox.Root>
                        <label
                            htmlFor={item.id}
                            style={{
                                marginLeft: "1rem",
                                color: checkedItems.has(item.id) ? "#4ea1ff" : "#ccc",
                                fontSize: "1rem",
                                lineHeight: 1.6,
                                cursor: "pointer",
                                transition: "color 0.2s ease",
                                textDecoration: checkedItems.has(item.id) ? "line-through" : "none",
                                opacity: checkedItems.has(item.id) ? 0.8 : 1,
                            }}
                            onClick={() =>
                                handleCheckChange(item.id, !checkedItems.has(item.id))
                            }
                        >
                            {item.label}
                        </label>
                    </Box>
                ))}
            </Box>
        </>
    );

    return (
        <>
            <NavBar />
            <Box
                style={{
                    minHeight: "100vh",
                    background: "radial-gradient(circle at top, #1a1a1a, #0a0a0a)",
                    padding: "4rem 1rem",
                }}
            >
                <Box style={{ maxWidth: "800px", margin: "0 auto", color: "white" }}>
                    <Heading mt="6" as="h1" size="8" mb="4" highContrast>
                        WebGA Checklist
                    </Heading>
                    <Text size="4" as="p" style={{ lineHeight: 1.6, marginBottom: "2rem" }}>
                        Use this checklist to ensure you've completed all the necessary steps
                        to get WebGA up and running. Check off each item as you complete it.
                    </Text>
                    <Box mb="4" /> {/* Radix Box as a spacer */}
                    <Text mb="6" size="4" as="p" style={{ lineHeight: 1.6, marginBottom: "2rem" }}>
                        You can open this page from both your host simulator machine's browser and your iPad or tablet's browser.
                    </Text>
                    <Box mb="4" /> {/* Radix Box as a spacer */}


                    <Box
                        style={{
                            backgroundColor: "#141414",
                            borderRadius: "12px",
                            padding: "2rem",
                            border: "1px solid #2c2c2c",
                        }}
                    >
                        <ChecklistSection
                            title="From your Host machine - Ensure X-Plane is running"
                            items={hostMachineItems}
                        />

                        <ChecklistSection
                            title="From your iPad or Tablet"
                            items={tabletItems}
                        />
                    </Box>

                    <Box mt="4" style={{ textAlign: "center" }}>
                        <Text size="3" style={{ color: "#888" }}>
                            {checkedItems.size} of {hostMachineItems.length + tabletItems.length} items completed
                        </Text>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    );
}