module.exports = {
  darkMode: ["class"], // Important for shadcn theme switching
  content: [
    // ... your content paths
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // ... other shadcn colors
      },
      // ... other shadcn extensions
    },
  },
  plugins: [require("tailwindcss-animate")],
}