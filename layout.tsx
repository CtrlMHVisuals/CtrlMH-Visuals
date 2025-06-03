
export const metadata = {
  title: 'Ctrl+MH Visuals',
  description: 'A portfolio website for Ctrl+MH Visuals',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
