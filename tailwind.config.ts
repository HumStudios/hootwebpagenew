import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
     colors:{
      black:{
        DEFAULT : '#000',
        100: '#040E1A'
      },
      hoot:{
        DEFAULT : '#FE6D00',
        100:"#18CCFC"
      }
     }
    },
  },
  plugins: [],
};
export default config;
