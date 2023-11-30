//import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";

export const metdata = {
  title: "Tapestry AI",
  openGraph: {
    title: "Multimodal Chat",
    description: "Chat with Tapestry",
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Tapestry AI</title>

      </head>
      <body>
        {children}

      </body>
    </html>
  );
}
