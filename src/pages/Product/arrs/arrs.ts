import facebook from "../../../assets/png/facebook";
import instagram from "../../../assets/png/instagram";
import telegram from "../../../assets/png/telegram";

export const size: number[] = [
  35, 36.5, 37, 37.5, 38, 39, 39.5, 40, 41, 41.5, 42, 43, 43.5, 44, 44.5, 45,
  46, 46.5, 47.5,
];

export const socials = <{ title: string; img: string; route: string }[]>[
  {
    title: "Telegram",
    img: telegram.telegram,
    route: "https://web.telegram.org/k/",
  },
  {
    title: "Instagram",
    img: instagram.instagram,
    route: "https://www.instagram.com/",
  },
  {
    title: "Facebook",
    img: facebook.facebook,
    route: "https://www.facebook.com/",
  },
];
