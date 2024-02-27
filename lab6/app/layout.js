import "./index.scss";

export const metadata = {
  title: "Lab 6: React Website with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
