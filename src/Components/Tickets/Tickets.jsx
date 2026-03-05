import Ticket from "./Ticket";
import Tasks from "../Tasks/Tasks";

const Tickets = ({
  tickets,
  handleTask,
  selectedTasks,
  completeTask,
  resolvedTasks
}) => {

  return (
    <div className="max-w-7xl mx-auto mt-10">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2">

          <h2 className="text-xl font-semibold mb-4">
            Customer Tickets
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            {tickets.map(ticket => (
              <Ticket
                key={ticket.id}
                ticket={ticket}
                handleTask={handleTask}
              />
            ))}

          </div>

        </div>

        <Tasks
          selectedTasks={selectedTasks}
          completeTask={completeTask}
          resolvedTasks={resolvedTasks}
        />

      </div>

    </div>
  );
};

export default Tickets;