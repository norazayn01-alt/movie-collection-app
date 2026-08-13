import { Group, Button } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextInput } from "@mantine/core";
import { Search } from "lucide-react";

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
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            navigate(`/search?query=${query}`);
          }
        }}
        placeholder="Search movies..."
        leftSection={<Search size={16} color="white" />}
        radius="xl"
        styles={{
          input: {
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.25)",
            color: "white",
            width: 600
          },
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
