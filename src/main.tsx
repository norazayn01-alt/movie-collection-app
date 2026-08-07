import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          theme={{
            colors: {
              netflixRed: [
                "#FFE9EA",
                "#FFD0D3",
                "#FB9FA4",
                "#F86B72",
                "#F64048",
                "#F5252D",
                "#F5161F",
                "#E50914",
                "#FC3000",
                "#AB0009",
              ],
              dark: [
                "#C1C2C5",
                "#A6A7AB",
                "#909296",
                "#5c5f66",
                "#373A40",
                "#2C2E33",
                "#25262b",
                "#000000",
                "#141517",
                "#000000",
              ],
            },
            primaryColor: "netflixRed",
            primaryShade: 9,
          }}
          defaultColorScheme="dark"
        >
          <App />
        </MantineProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
);
