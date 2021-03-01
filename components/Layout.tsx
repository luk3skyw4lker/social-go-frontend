import Head from 'next/head';

interface LayoutProps {
	title: string;
	children?: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
	return (
		<div className="w-full h-full bg-gray-800">
			<Head>
				<title>{title}</title>
			</Head>

			{children}
		</div>
	);
}
