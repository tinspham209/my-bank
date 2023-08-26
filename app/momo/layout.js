export const metadata = {
	title: `MoMo - 0932.535.175`,
	description: `MoMo - 0932.535.175`,

	twitter: {
		card: "summary_large_image",
		title: `MoMo - 0932.535.175`,
		description: `MoMo - 0932.535.175`,
		creator: "@tinspham209",
		images: {
			url: "/opengraph-image.webp",
			alt: `MoMo - 0932.535.175`,
		},
	},
	metadataBase: new URL("https://bank.tinspham.dev/momo"),
	openGraph: {
		title: `MoMo - 0932.535.175`,
		description: `MoMo - 0932.535.175`,
		url: "https://bank.tinspham.dev/momo",
		images: "/opengraph-image.webp",
		siteName: `MoMo - 0932.535.175`,
		type: "website",
		locale: "vi_VN",
	},
	themeColor: "#fff",
};

export default function RootLayout({ children }) {
	return <div className="min-h-screen">{children}</div>;
}
