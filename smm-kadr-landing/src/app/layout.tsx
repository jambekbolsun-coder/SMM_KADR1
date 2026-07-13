import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SMM_KADR — рекламная компания и медиа-холдинг",
  description:
    "Маркетинг, видеопродакшен, SMM, таргет, сайты, CRM, чат-боты и свадебная съёмка в Бишкеке. Команда около 40 специалистов.",
  keywords: [
    "SMM Бишкек",
    "рекламная компания Кыргызстан",
    "видеопродакшен",
    "таргет",
    "создание сайтов",
    "SMM_KADR",
  ],
  openGraph: {
    title: "SMM_KADR — рекламная компания",
    description: "Не один специалист, а целая команда под ваш проект.",
    type: "website",
    locale: "ru_KG",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
