import React, { useState } from "react";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";
import classes from "./CreatorForm.module.scss";

const CreatorForm = ({ setTasks, tasks, setActive }) => {

	function saveTasks(tasks) {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}

	function createTask(newTask) {
		setTasks([newTask,...tasks ]);
		saveTasks([newTask, ...tasks]);
		setActive(false);
	}
	const [task, setTask] = useState({ title: "", status: "whaiting" });

	const addNewTask = (e) => {
		e.preventDefault();
		const newTask = {
			...task,id:Date.now()
		};
		createTask(newTask);
		setTask({ title: "", status: "whaiting" });
	};
	return (
		<form className={classes.form}>
			<MyInput
				value={task.title}
				style={{ width: "50%" }}
				type="text"
				placeholder="Название задачи"
				onChange={(e) => setTask({ ...task, title: e.target.value })}
			/>
			<MyButton disabled={!task.title} onClick={addNewTask}>
				Создать задачу
			</MyButton>
		</form>
	);
};

export default CreatorForm;
