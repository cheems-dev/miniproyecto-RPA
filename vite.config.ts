/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
