import React from 'react';
import MyInput from "./UI/MyInput/MyInput";

const TaskFilter = ({ filter, setFilter }) => {
	return (
		<div>
			<MyInput
				value={filter.query}
				onChange={(e) =>
					setFilter({ ...filter, query: e.target.value })
				}
				placeholder="Поиск..."
			/>
		</div>
	);
};

export default TaskFilter;