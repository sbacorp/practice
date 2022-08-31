import { React, useRef, useEffect, useState } from "react";
import { useTasks } from "./hooks/usePosts";

import "./styles/App.scss";

import CreatorTODO from "./components/CreatorTODO/CreatorTODO";
import AddButton from "./components/UI/AddButton/AddButton";
import CreatorForm from "./components/CreatorTODO/CreatorForm";
import TaskList from "./components/TaskList/TaskList";
import TaskFilter from "./components/TaskFilter";
import Task from "./components/Task/Task";
import TaskEditor from "./components/TaskEditor";

function App() {
	/**
	 * *ссылка на компонент, который изменяет ширину, и ссылка на изменяемый компонент
	 */
	const refTasks = useRef(null);
	const refResizer = useRef(null);
	/**
	 * *метод изменения ширины колонки
	 */
	useEffect(() => {
		const tasksElement = refTasks.current;
		//getting tasks element styles
		const styles = window.getComputedStyle(tasksElement);

		/**
		 * *"парсинг ширины"
		 */
		let width = parseInt(styles.width, 10);
		/**
		 * *координата курсора
		 * TODO : ПРИДУМАТЬ ЧТО НАПИСАТЬ
		 */
		let x = 0;

		//resize
		const onMouseMoveResize = (event) => {
			const dx = event.clientX - x;
			x = event.clientX;
			width = width + dx;
			tasksElement.style.width = `${width}px`;
		};

		const onMouseUpResize = () => {
			document.removeEventListener("mousemove", onMouseMoveResize);
		};

		const onMouseDownResize = (event) => {
			x = event.clientX;
			document.addEventListener("mousemove", onMouseMoveResize);
			document.addEventListener("mouseup", onMouseUpResize);
		};

		// Add mouse down event listener
		const resizer = refResizer.current;
		resizer.addEventListener("mousedown", onMouseDownResize);

		return () => {
			resizer.removeEventListener("mousedown", onMouseDownResize);
		};
	}, []);

	const [isCreatorActive, setCreatorActive] = useState(false);

	const [editorFilling, setEditorFilling] = useState({
		title: "",
		status: "",
	});

	// const setFilling = (task) => {
	// 	setEditorFilling({
	// 		title: task.title,
	// 		status: task.status,
	// 	});
	// };

	const [tasks, setTasks] = useState([]);

	function loadTasks() {
		let loadedTasks = localStorage.getItem("tasks");

		let tasks = JSON.parse(loadedTasks);

		if (tasks) {
			setTasks(tasks);
		}
	}
	useEffect(() => {
		loadTasks();
	}, []);

	const setFilling =(task)=> {
		setEditorFilling({title: task.title,status: task.status})
		console.log(editorFilling);
	}
	const [filter, setFilter] = useState({ query: "" });

	const SearchedTasks = useTasks(tasks, filter.query);
	//*ининициализация заданий

	return (
		<div className="App">
			<aside ref={refTasks} className="tasks">
				<TaskFilter filter={filter} setFilter={setFilter} />
				<TaskList tasks={SearchedTasks}>
					{SearchedTasks.map((task, index) => {
						return (
							<Task
								onClick={() => setFilling(task)}
								task={task}
								key={index + 1}
							/>
						);
					})}
				</TaskList>
				<div ref={refResizer} className="resizer" />
			</aside>
			<main className="main">
				{editorFilling.length === 0 ? (
					<div className="title">
						Выбирите TODO для редактирования
					</div>
				) : (
					<TaskEditor editorFilling={editorFilling} />
				)}

				<AddButton
					active={isCreatorActive}
					onClick={() => setCreatorActive(true)}
				/>
				<CreatorTODO
					active={isCreatorActive}
					setActive={setCreatorActive}
				>
					<CreatorForm
						tasks={tasks}
						setTasks={setTasks}
						setActive={setCreatorActive}
					></CreatorForm>
				</CreatorTODO>
			</main>
		</div>
	);
}
export default App;
