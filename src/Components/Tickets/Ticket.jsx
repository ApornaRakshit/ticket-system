const Ticket = ({ ticket, handleTask }) => {

    return (
      <div
        onClick={() => handleTask(ticket)}
        className="cursor-pointer"
      >
  
        <div className="card bg-base-100 shadow p-4">
  
          <div className="flex justify-between">
  
            <h2 className="font-semibold">
              {ticket.title}
            </h2>
  
            {
              ticket.status === "Open"
                ? <span className="badge badge-success">Open</span>
                : <span className="badge badge-warning">In Progress</span>
            }
  
          </div>
  
          <p className="text-sm text-gray-500 mt-2">
            {ticket.description}
          </p>
  
        </div>
  
      </div>
    );
  };
  
  export default Ticket;