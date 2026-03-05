import React from "react";

const Ticket = ({ ticket, handleTask }) => {

  const priorityColor = {
    HIGH: "text-red-500",
    MEDIUM: "text-yellow-500",
    LOW: "text-green-500",
  };

  return (
    <div
      onClick={() => handleTask(ticket)}
      className="cursor-pointer"
    >
      <div className="card bg-base-100 shadow-md p-4 hover:shadow-lg transition">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg">
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
        <div className="flex justify-between items-center mt-4 text-sm">
          <div className="flex gap-3">
            <span className="text-gray-400">
              {ticket.id}
            </span>
            <span className={`font-medium ${priorityColor[ticket.priority]}`}>
              {ticket.priority} PRIORITY
            </span>
          </div>

          <div className="flex gap-3 text-gray-500">
            <span>{ticket.customer}</span>
            <span>{ticket.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;