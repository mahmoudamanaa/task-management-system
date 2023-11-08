import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import Backlog from "./pages/Backlog";
import PageNotFound from "./pages/PageNotFound";
import { TasksProvider } from "./contexts/TasksContext";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <TasksProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="add-task" element={<AddTask />} />
          <Route path="backlog" element={<Backlog />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </TasksProvider>
  );
}
