import Image from "next/image";

export default function Home() {
	return (
		<main
			className="flex min-h-screen justify-center"
			style={{
				backgroundColor: "#fea5a7",
			}}
		>
			<Image
				src="/opengraph-image-tcb.webp"
				alt="Hero"
				style={{ objectFit: "contain" }}
				width={1233}
				height={694}
			/>
		</main>
	);
}
