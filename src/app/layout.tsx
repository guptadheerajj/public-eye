import type React from "react";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
	title: "Sentiment Analysis Dashboard",
	description: "AI-powered social media sentiment analysis dashboard",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute="data-theme"
					defaultTheme="light"
					enableSystem={false}
					themes={["light", "dark", "cyberpunk", "pink", "purple"]}
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
