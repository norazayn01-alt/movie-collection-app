import { Group, Button } from "@mantine/core";

export function Navbar() {
  return (
    <div>
      <Group justify="space-between">
        <img
          style={{ width: 54, height: 54 }}
          src="./src/assets/logo.webp"
          alt="logo"
        />
        <Group>
          <Button>Login</Button>
          <Button>Sign Up</Button>
        </Group>
      </Group>
    </div>
  );
}
