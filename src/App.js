import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTarea from "./tareas/AddTarea";
import EditTarea from "./tareas/EditTarea";
import ViewTarea from "./tareas/ViewTarea";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addtarea" element={<AddTarea />} />
          <Route exact path="/edittarea/:id" element={<EditTarea />} />
          <Route exact path="/viewtarea/:id" element={<ViewTarea />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
