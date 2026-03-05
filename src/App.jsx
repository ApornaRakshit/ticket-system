import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Tickets from "./Components/Tickets/Tickets";
import Footer from "./Components/Footer/Footer";

function App() {

  const [tickets, setTickets] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  useEffect(() => {
    fetch("/tickets.json")
      .then(res => res.json())
      .then(data => setTickets(data));
  }, []);

  const handleTask = (ticket) => {
    setSelectedTasks([...selectedTasks, ticket]);
  };

  const completeTask = (task) => {

    const remaining = selectedTasks.filter(t => t.id !== task.id);
    setSelectedTasks(remaining);

    setResolvedTasks([...resolvedTasks, task]);
  };

  return (
    <>
      <Navbar />

      <Banner
        progressCount={selectedTasks.length}
        resolvedCount={resolvedTasks.length}
      />

      <Tickets
        tickets={tickets}
        handleTask={handleTask}
        selectedTasks={selectedTasks}
        completeTask={completeTask}
        resolvedTasks={resolvedTasks}
      />
      <Footer />
    </>
  );
}

export default App;