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
      <h3 style={{color: 'white'}}>MoViE</h3>

      <Group>
        <Button>Login</Button>
        <Button>Sign Up</Button>
      </Group>
    </Group>
  );
}
