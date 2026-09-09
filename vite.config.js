import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If you deploy to a PROJECT page (bhargav-rue.github.io/your-repo-name),
// set base to "/your-repo-name/". If you deploy to your USER page
// (a repo literally named BHARGAV-RUE.github.io, served at the domain
// root), leave this as "/".
export default defineConfig({
  plugins: [react()],
  base: "/Ad-Compromizer_Site/",
});
