import { useState } from "react";
import { FiTrash, FiCheckSquare } from "react-icons/fi";

import type { Task } from "./types";

import * as S from "./styled";

export const TaskList: React.FC = () => {
	const [tasks, setTasks] = useState<Array<Task>>([]);
	const [newTaskTitle, setNewTaskTitle] = useState("");

	const handleCreateNewTask = () => {
		if (!newTaskTitle) return;

		const newTask = {
			id: Math.random(),
			title: newTaskTitle,
			isComplete: false,
		};

		setTasks(updateState => [...updateState, newTask]);
		setNewTaskTitle("");
	};

	const handleToggleTaskCompletion = (id: number) => {
		const newTasks = tasks.map(task =>
			task.id === id
				? {
						...task,
						isComplete: !task.isComplete,
				  }
				: task,
		);
		setTasks(newTasks);
	};

	const handleRemoveTask = (id: number) => {
		const removedTask = tasks.filter(task => task.id !== id);
		setTasks(removedTask);
	};

	return (
		<S.Container>
			<header>
				<h2>Minhas tasks</h2>

				<S.InputGroup>
					<input
						type="text"
						placeholder="Adicionar novo todo"
						onChange={e => setNewTaskTitle(e.target.value)}
						value={newTaskTitle}
					/>
					<button type="submit" onClick={handleCreateNewTask}>
						<FiCheckSquare />
					</button>
				</S.InputGroup>
			</header>

			<S.TaskListContainer>
				<ul>
					{tasks.map(task => (
						<S.TaskItem isComplete={task.isComplete} key={task.id}>
							<div>
								<S.CheckBoxContainer>
									<input
										type="checkbox"
										readOnly
										checked={task.isComplete}
										onClick={() => handleToggleTaskCompletion(task.id)}
									/>
									<span aria-details="checkbox" />
								</S.CheckBoxContainer>
								<p>{task.title}</p>
							</div>

							<button
								type="button"
								about="delete task"
								onClick={() => handleRemoveTask(task.id)}
							>
								<FiTrash />
							</button>
						</S.TaskItem>
					))}
				</ul>
			</S.TaskListContainer>
		</S.Container>
	);
};
