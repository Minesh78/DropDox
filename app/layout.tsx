import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "./providers";
import "../styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const openSans = Open_Sans({
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "DropDox",
	description: "Secure cloud storage for your images, powered by ImageKit",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en" className="dark">
				<body
					className={`$openSans.className } antialiased bg-background text-foreground`}>
					<Providers>
						{children}
						<SpeedInsights />
					</Providers>
				</body>
			</html>
		</ClerkProvider>
	);
}
