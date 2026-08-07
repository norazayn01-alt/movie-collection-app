import { Group, Button } from "@mantine/core";

export function Navbar() {
  return (
    <Group
      justify="space-between"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        padding: 20,
        zIndex: 1,
      }}
    >
      <h3 style={{ color: "white" }}>
        <span style={{ color: "#E50914" }}>MoV</span>iE
      </h3>

      <Group>
        <Button
          styles={{
            root: {
              "&:hover": {
                backgroundColor: "#E50914",
              },
            },
          }}
        >
          Login
        </Button>
        <Button
          styles={{
            root: {
              "&:hover": {
                backgroundColor: "#E50914",
              },
            },
          }}
        >
          Sign Up
        </Button>
      </Group>
    </Group>
  );
}
