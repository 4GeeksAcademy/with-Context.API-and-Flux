import React from "react";
import TodoContainer from "./TodoContainer.jsx";


const Home = (props) => {
	return (
		<div className="text-center">
			<h1 className="title">todos</h1>
			<TodoContainer/>
		</div>
	)
};

export default Home;