import "./globals.css";
import { Roboto } from "next/font/google";

export const font = Roboto({
	weight: ["300", "400", "500", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
});

export const metadata = {
	title: `VPBank - 1234.200.999`,
	description: `VPBank - 1234.200.999`,

	twitter: {
		card: "summary_large_image",
		title: `VPBank - 1234.200.999`,
		description: `VPBank - 1234.200.999`,
		creator: "@tinspham209",
		images: {
			url: "/opengraph-image.webp",
			alt: `VPBank - 1234.200.999`,
		},
	},
	metadataBase: new URL("https://bank.tinspham.dev"),
	openGraph: {
		title: `VPBank - 1234.200.999`,
		description: `VPBank - 1234.200.999`,
		url: "https://bank.tinspham.dev",
		images: "/opengraph-image.webp",
		siteName: `VPBank - 1234.200.999`,
		type: "website",
		locale: "vi_VN",
	},
	themeColor: "#fff",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={font.className}>
			<body className="min-h-screen" suppressHydrationWarning={true}>
				{children}
			</body>
		</html>
	);
}
