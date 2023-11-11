import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import Backlog from "./pages/Backlog";
import PageNotFound from "./pages/PageNotFound";
import { TasksProvider } from "./contexts/TasksContext";
import Navbar from "./ui/navbar/Navbar";
import { PopupProvider } from "./contexts/PopupContext";
import Popup from "./ui/popup/Popup";
import { FilterProvider } from "./contexts/FilterContext";

export default function App() {
  return (
    <PopupProvider>
      <FilterProvider>
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
      </FilterProvider>
    </PopupProvider>
  );
}
