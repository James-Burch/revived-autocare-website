import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "James Burch - Full-Stack Developer & Data Analyst",
  description:
    "Versatile developer specializing in Python, machine learning, and full-stack web development. Ready to contribute from day one.",
  keywords: [
    "James Burch",
    "Full-Stack Developer",
    "Python",
    "Machine Learning",
    "Data Analysis",
    "React",
    "Next.js",
    "DevOps",
  ],
  authors: [{ name: "James Burch" }],
  creator: "James Burch",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://jamesburch.dev",
    title: "James Burch - Full-Stack Developer & Data Analyst",
    description:
      "Versatile developer specializing in Python, machine learning, and full-stack web development.",
    siteName: "James Burch Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "James Burch - Full-Stack Developer & Data Analyst",
    description:
      "Versatile developer specializing in Python, machine learning, and full-stack web development.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
