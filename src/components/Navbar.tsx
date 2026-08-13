import { Group, Button } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextInput } from "@mantine/core";

export function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
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
      <TextInput
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            navigate(`/search?query=${query}`);
          }
        }}
      />
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
