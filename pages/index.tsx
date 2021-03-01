import { useState } from 'react';

import Layout from '../components/Layout';

export default function Home() {
	const [password, setPassword] = useState<string>();
	const [email, setEmail] = useState<string>();

	const login = async event => {
		event.preventDefault();

		const response = await fetch('http://localhost:8080/login', {
			method: 'POST',
			body: JSON.stringify({
				email,
				password
			})
		});

		if (response.status === 200) {
			const parsedResponse = await response.json();

			localStorage.setItem('@SocialGo:Token', parsedResponse);

			return;
		}

		// Implementar toast de erro para login
	};

	return (
		<Layout title="Login">
			<main className="h-full flex">
				<div className="h-1/2 self-center w-full mx-auto bg-black rounded-xl border-4 border-white overflow-hidden px-5 py-9 md:w-1/4 lg:h-2/5">
					<form onSubmit={login} className="h-full w-full">
						<p className="font-bold text-3xl text-center text-white mb-10 lg:mb-5">
							Bem vindo ao Social Go
						</p>

						<label htmlFor="email" className="text-white font-bold">
							Email
						</label>
						<input
							required
							type="text"
							id="email"
							className="w-full border-2 border-white rounded-lg px-2 py-1 bg-black mb-5 text-white"
							placeholder="Insira seu email"
							onChange={event => setEmail(event.target.value)}
						/>
						<label htmlFor="email" className="text-white font-bold">
							Senha
						</label>
						<input
							required
							type="password"
							id="password"
							className="w-full border-2 border-white rounded-lg px-2 py-1 bg-black text-white"
							placeholder="Insira sua senha"
							onChange={event => setPassword(event.target.value)}
						/>

						<button
							className="border-2 border-white text-white rounded-lg px-5 mt-5"
							type="submit"
						>
							Entrar
						</button>
					</form>
				</div>
			</main>
		</Layout>
	);
}
