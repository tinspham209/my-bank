export const metadata = {
	title: `Techcombank 1903.7889.5550.19`,
	description: `Techcombank 1903.7889.5550.19`,

	twitter: {
		card: "summary_large_image",
		title: `Techcombank 1903.7889.5550.19`,
		description: `Techcombank 1903.7889.5550.19`,
		creator: "@tinspham209",
		images: {
			url: "/opengraph-image.webp",
			alt: `Techcombank 1903.7889.5550.19`,
		},
	},
	metadataBase: new URL("https://bank.tinspham.dev/tcb"),
	openGraph: {
		title: `Techcombank 1903.7889.5550.19`,
		description: `Techcombank 1903.7889.5550.19`,
		url: "https://bank.tinspham.dev/tcb",
		images: "/opengraph-image.webp",
		siteName: `Techcombank 1903.7889.5550.19`,
		type: "website",
		locale: "vi_VN",
	},
	themeColor: "#fff",
};

export default function RootLayout({ children }) {
	return <div className="min-h-screen">{children}</div>;
}
