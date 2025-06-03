export const metadata = {
  title: "Ctrl+MH Visuals",
  description: "Portfolio and Contact"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}