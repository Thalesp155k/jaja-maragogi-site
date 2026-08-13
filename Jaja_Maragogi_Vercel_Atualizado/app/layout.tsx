import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jajá Maragogi | Passeios de Buggy",
  description:
    "Passeios de buggy pelo Litoral Norte, Litoral Sul e Ponta a Ponta de Maragogi, com atendimento local e paradas para fotos.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Jajá Maragogi | Passeios de Buggy",
    description:
      "Escolha entre Litoral Norte, Litoral Sul ou Ponta a Ponta e viva Maragogi por outros caminhos.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#013f5a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
