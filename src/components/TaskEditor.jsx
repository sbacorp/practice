import React, { useState } from "react";
import classes from "./TaskEditor.module.scss";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";

function TaskEditor({ editorFilling }) {
	const [task, setTask] = useState({ title: "", status: "" });
	// setTask(editorFilling);

	return (
		<div className={classes.editor}>
			<div className={classes.editor__title}>Редактирование TODO</div>
			<form className={classes.task}>
				<MyInput
					value={editorFilling.title}
					onChange={(e) =>
						setTask({ ...task, title: e.target.value })
					}
				/>

				<ul className={classes.task__status}>
					<li>
						<input
							checked={task.status === "whaiting"}
							label="ожидает"
							type="radio"
							id="whaiting"
							name="status"
							value="whaiting"
						/>
					</li>
					<li>
						<input
							checked={task.status === "active"}
							label="активный"
							type="radio"
							id="active"
							name="status"
							value="active"
						/>
					</li>
					<li>
						<input
							checked={task.status === "finished"}
							label="закончен"
							type="radio"
							id="finished"
							name="status"
							value="finished"
						/>
					</li>
				</ul>
				<MyButton>Сохранить изменения</MyButton>
			</form>
		</div>
	);
}

export default TaskEditor;
