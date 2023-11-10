import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import Backlog from "./pages/Backlog";
import PageNotFound from "./pages/PageNotFound";
import { TasksProvider } from "./contexts/TasksContext";
import Navbar from "./components/Navbar";
import { PopupProvider } from "./contexts/PopupContext";
import Popup from "./components/Popup";

export default function App() {
  return (
    <PopupProvider>
      <TasksProvider>
        <BrowserRouter>
          <Popup />
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="add-task" element={<AddTask />} />
            <Route path="backlog" element={<Backlog />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </TasksProvider>
    </PopupProvider>
  );
}
