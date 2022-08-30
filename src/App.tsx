/* eslint-disable import/no-default-export */
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

const App: React.FC = () => {
	return (
		<>
			<Header />
			<TaskList />
		</>
	);
};

export default App;
