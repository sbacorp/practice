import React from 'react'
//подключаю модульные стили
import classes from "./Task.module.scss"


const Task = (props,{click}) => {
	return (
		<div
			className={
				props.task.status === "whaiting"
					? `${classes.task} ${classes.gray}`
					: props.task.status === "process"
					? `${classes.task} ${classes.green}`
					: `${classes.task} ${classes.red}`
			}
		>
			<div className={classes.task__title}>{props.task.title}</div>
			<div className={classes.task__status}>{props.task.status}</div>
			<button onClick={click} className={classes.edit}/>
		</div>
	);
};

export default Task