import React from "react";
import "../../styles/App.scss";

const TaskList = ({ tasks, children }) => {

	if (!tasks.length) {
		return <div style={{ fontSize: "22px" }}>Задачи не найдены!</div>;
	}

	return (
		<div className="tasks_list">
			{children}
		</div>
	);
};

export default TaskList;
