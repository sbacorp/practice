import {useMemo} from "react";

export const useTasks = (tasks, query) => {

    const SearchedTasks = useMemo(() => {
        return tasks.filter(task => task.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, tasks])

    return SearchedTasks;
}
