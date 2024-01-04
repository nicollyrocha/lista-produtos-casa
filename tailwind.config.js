/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{html,js,tsx,jsx}"],
 corePlugins: {
  preflight: false,
  divideStyle: true,
 },
 important: true,
 theme: {
  fontFamily: {
   sans: ["ui-sans-serif", "system-ui"],
   serif: ["Quicksand"],
   mono: ["ui-monospace", "SFMono-Regular"],
   display: ["Oswald"],
   body: ['"Open Sans"'],
  },
  extend: {
   minHeight: (theme) => ({
    ...theme("spacing"),
   }),
   maxHeight: (theme) => ({
    ...theme("spacing"),
   }),
   fontSize: {
    xxs: ["10px", "14px"],
    lg: ["18px", "22px"],
    xl: ["20px", "24px"],
   },
   colors: {
    white: "#ffffff",

    dark: "#272827",

    "blue-000": "#EBF1FE",
    "blue-100": "#CDDAFD",
    "blue-200": "#9BB1FA",
    "blue-300": "#6886F4",
    "blue-400": "#4363EA",
    "blue-500": "#4363EA", // cor principal
    "blue-600": "#0825BE",
    "blue-700": "#061A9E",
    "blue-800": "#031480",
    "blue-900": "#020D69",

    "green-000": "#F9FEEC",
    "green-100": "#EAFCD0",
    "green-200": "#CFF9A2",
    "green-300": "#AAED71",
    "green-400": "#85DB4C",
    "green-500": "#85DB4C", // cor principal
    "green-600": "#3AA813",
    "green-700": "#268D0D",
    "green-800": "#167108",
    "green-900": "#0B5E04",

    "neutral-000": "#F8FAFC",
    "neutral-100": "#F1F5F9",
    "neutral-200": "#E2E8F0",
    "neutral-300": "#CBD5E1",
    "neutral-400": "#94A3B8",
    "neutral-500": "#64748B", // cor principal
    "neutral-600": "#475569",
    "neutral-700": "#334155",
    "neutral-800": "#1E293B",
    "neutral-900": "#0F172A",

    "orange-000": "#FFF9EA",
    "orange-100": "#FFECCC",
    "orange-200": "#FED498",
    "orange-300": "#FEB566",
    "orange-400": "#FF983F",
    "orange-500": "#FF983F", // cor principal
    "orange-600": "#DB4C00",
    "orange-700": "#B73400",
    "orange-800": "#932100",
    "orange-900": "#7A1300",

    "red-000": "#FEF5EA",
    "red-100": "#FDDCCB",
    "red-200": "#FDB197",
    "red-300": "#F97D63",
    "red-400": "#F44D3D",
    "red-500": "#F44D3D", // cor principal
    "red-600": "#CB0111",
    "red-700": "#AA001D",
    "red-800": "#8A0022",
    "red-900": "#700026",

    "yellow-000": "#FEFDEB",
    "yellow-100": "#FCF8CB",
    "yellow-200": "#FBEF99",
    "yellow-300": "#F6E068",
    "yellow-400": "#EFD041",
    "yellow-500": "#EFD041", // cor principal
    "yellow-600": "#C49B05",
    "yellow-700": "#A47E03",
    "yellow-800": "#846302",
    "yellow-900": "#6C4F01",

    "purple-000": "#FCECFE",
    "purple-100": "#F0D0FE",
    "purple-200": "#DCA1FE",
    "purple-300": "#C372FD",
    "purple-400": "#AB4FFB",
    "purple-500": "#AB4FFB", // cor principal
    "purple-600": "#6710D6",
    "purple-700": "#4C0BB3",
    "purple-800": "#360790",
    "purple-900": "#260477",
   },
  },
 },
 plugins: [require("tailwindcss")],
};
