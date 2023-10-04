import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [tareas, setTareas] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadTareas();
  }, []);

  const loadTareas = async () => {
    const result = await axios.get("http://localhost:8080/tareas");
    setTareas(result.data);
  };

  const deleteTarea = async (id) => {
    await axios.delete(`http://localhost:8080/tarea/${id}`);
    loadTareas();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Tarea</th>
              <th scope="col">Fecha</th>
              <th scope="col">Vigencia</th>
              <th scope="col">Acción</th>
            </tr>
          </thead>
          <tbody>
            {tareas.map((tarea, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{tarea.descripcion}</td>
                <td>{tarea.fecha}</td>
                <td>{tarea.vigente}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewtarea/${tarea.id}`}
                  >
                    Ver
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edittarea/${tarea.id}`}
                  >
                    Editar
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteTarea(tarea.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
