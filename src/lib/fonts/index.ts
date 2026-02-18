import localFont from "next/font/local";

export const Iosevka = localFont({
  src: [
    { path: "./iosevka/Iosevka-Light.woff2", weight: "300" },
    { path: "./iosevka/Iosevka-Regular.woff2", weight: "400" },
    { path: "./iosevka/Iosevka-Medium.woff2", weight: "500" },
    { path: "./iosevka/Iosevka-Bold.woff2", weight: "700" },
  ],
});
