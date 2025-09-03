import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
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
        // 新的Leto主题色彩
        letoWarmStart: "#F75C03", // 深橙
        letoWarmMid: "#FFB100", // 橙黄
        letoWarmEnd: "#F15BB5", // 粉红

        letoCoolStart: "#F15BB5", // 紫粉
        letoCoolMid: "#8E8EFF", // 淡蓝紫
        letoCoolEnd: "#00BBF9", // 青蓝

        // 也可以用于 button background 或 border 色
        letoAccent: "#FFB100",

        // 更新原有的Leto颜色以匹配新logo
        letoOrange: "#F75C03", // 更新为深橙色
        letoYellow: "#FFB100", // 更新为橙黄色
        letoPink: "#F15BB5", // 更新为粉红色
        letoPurple: "#8E8EFF", // 更新为淡蓝紫色
        letoTurquoise: "#00BBF9", // 更新为青蓝色

        // 更新渐变色起始点
        letoGradientStart: "#F75C03", // 深橙
        letoGradientMid: "#F15BB5", // 粉红
        letoGradientEnd: "#00BBF9", // 青蓝

        // 主题色更新
        primary: {
          DEFAULT: "#F75C03", // 深橙色作为主色
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#00BBF9", // 青蓝色作为强调色
          foreground: "#ffffff",
        },

        // 保留原有的界面元素颜色
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        "gradient-warm": "linear-gradient(to right, #F75C03, #FFB100, #F15BB5)",
        "gradient-cool": "linear-gradient(to right, #F15BB5, #8E8EFF, #00BBF9)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
