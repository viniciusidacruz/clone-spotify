import "@/styles/global.css";

export const metadata = {
  title: "Spotify - Web Player: Music for everyone | Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href="./fav.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
