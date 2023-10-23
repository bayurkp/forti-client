import type { Metadata } from "next";
import Providers from "./providers";

export const metadata: Metadata = {
  title: {
    default: "Forti",
    template: "%s - Forti",
  },
  description: "Forti, Forum Mahasiswa Teknologi Informasi Universitas Udayana",
  generator: "Next.js",
  applicationName: "Forti",
  keywords: [
    "Forti",
    "Forum Mahasiswa TI",
    "Universitas Udayana",
    "UNUD",
    "SKP",
  ],
  authors: [{ name: "Bay" }, { name: "Indi" }],
  colorScheme: "dark",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
