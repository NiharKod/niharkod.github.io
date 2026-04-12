import "./globals.css";

export const metadata = {
  title: "Nihar Kodkani",
  description: "Personal website of Nihar Kodkani",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
