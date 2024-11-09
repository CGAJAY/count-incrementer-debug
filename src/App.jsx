import { useState } from "react";
import UserCard from "./components/UserCard";
const App = () => {
	const [count, setCount] = useState(0);
	const user = { id: 1, name: "John Doe" };

	const handleClick = () =>
		setCount((prevCount) => prevCount + 1);
	return (
		<div className="container">
			<h1>Welcome to the User App</h1>
			<button onClick={handleClick}>Increment Count</button>
			<p className="count">Count: {count}</p>
			<UserCard key={user.id} name={user.name} />
		</div>
	);
};

export default App;
