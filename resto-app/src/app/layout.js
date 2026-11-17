import "./globals.css";

export const metadata = {
  title: "Resto App",
  description: "Designed and Developed by Hamza Nabil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
