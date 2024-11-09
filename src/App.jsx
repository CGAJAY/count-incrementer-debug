import { useState } from "react";
import UserCard from "./components/UserCard";
const App = () => {
	const [count, setCount] = useState(0);
	const user = { id: 1, name: "John Doe" };

	const handleClick = () =>
		setCount((prevCount) => prevCount + 1);
	return (
		<div className="container flex justify-center flex-col items-center">
			<h1 className="text-2xl font-extrabold my-4">
				Welcome to the User App
			</h1>
			<button
				className="bg-blue-300 p-2 shadow shadow-slate-500"
				onClick={handleClick}
			>
				Increment Count
			</button>
			<p className="my-2">Count: {count}</p>
			<UserCard key={user.id} name={user.name} />
		</div>
	);
};

export default App;
