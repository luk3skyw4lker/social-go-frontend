import { GetStaticProps } from 'next';

import Layout from '../../components/Layout';
import { Posts } from '../../@types/Post';

interface PostListProps {
	posts: Posts[];
}

export default function PostsList({ posts }: PostListProps) {
	return (
		<Layout title="Post List">
			<main className="h-full flex">
				<div className="w-1/2 h-full bg-black self-center justify-self-center mx-auto flex justify-center">
					<p className="self-center text-white">POST LIST</p>
				</div>
			</main>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps<PostListProps> = async () => {
	const response = await fetch('http://localhost:8080/posts', {
		method: 'GET'
	});

	const posts = (await response.json()) as Posts[];

	return {
		props: {
			posts
		}
	};
};
