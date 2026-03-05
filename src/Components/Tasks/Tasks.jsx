const Tasks = ({ selectedTasks, completeTask, resolvedTasks }) => {

    return (
        <div>
            <h2 className="font-semibold mb-4">Task Status</h2>
            {
                selectedTasks.length === 0
                    ? <p className="text-gray-400">Select a ticket to add to task status</p>

                    : selectedTasks.map(task => (
                        <div key={task.id} className="bg-white p-3 rounded shadow mb-3">

                            <p>{task.title}</p>

                            <button
                                onClick={() => completeTask(task)}
                                className="btn btn-success btn-sm w-full mt-2"
                            >
                                Complete
                            </button>

                        </div>
                    ))
            }

            <h3 className="font-semibold mt-6">Resolved Task</h3>

            {
                resolvedTasks.length === 0
                    ? <p className="text-gray-400">No resolved tasks yet.</p>

                    : resolvedTasks.map(task => (
                        <div key={task.id} className="bg-gray-200 p-2 rounded mt-2">
                            {task.title}
                        </div>
                    ))
            }

        </div>
    );
};

export default Tasks;