import { useEffect, useState } from 'react'

import axios from 'axios';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
	const [count, setCount] = useState(0)
	const [greeting, setGreeting] = useState("");

	useEffect(() => {
		getGreeting().then((res) => setGreeting(res.greeting));
	}, []);

	// Get function
	const getGreeting = async function () {
		const { data } = await axios.get("/api/test");
		return data;
	};

	// Post function
	const createUser = async () => {
		const { data } = await axios.post("/api/user");
		console.log(data);
	}

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
				<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
				<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<p>Server response: {greeting}</p> 
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<button onClick={createUser}>
					Create user
				</button>
			</div>
		</>
	)
}

export default App
