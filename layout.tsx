import "./globals.css";
export const metadata = { title: "Ctrl+MH Visuals", description: "Portfolio site" };
export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}