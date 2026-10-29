import { defineConfig } from "@playwright/test";
import { existsSync } from "node:fs";
export default defineConfig({
  testDir: "./tests",
  timeout: 60000,
  workers: 1,
  use: {
    baseURL: "http://127.0.0.1:4175/Busines-Plan-End-to-End/",
    viewport: { width: 1440, height: 1000 },
    launchOptions: existsSync("/usr/bin/chromium")
      ? { executablePath: "/usr/bin/chromium", args: ["--no-sandbox"] }
      : {},
    trace: "retain-on-failure",
  },
  webServer: {
    command:
      "PORT=4175 BASE_PATH=/Busines-Plan-End-to-End/ node scripts/serve.mjs dist",
    url: "http://127.0.0.1:4175/Busines-Plan-End-to-End/",
    reuseExistingServer: false,
  },
});
