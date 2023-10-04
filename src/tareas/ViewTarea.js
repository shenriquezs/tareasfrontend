import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewTarea() {
  const [tarea, setTarea] = useState({
    descripcion: "",
    fecha: "",
    vigente: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadTarea();
  }, []);

  const loadTarea = async () => {
    const result = await axios.get(`http://localhost:8080/tarea/${id}`);
    setTarea(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Tarea</h2>

          <div className="card">
            <div className="card-header">
              id Tarea : {tarea.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Descripción:</b>
                  {tarea.descripcion}
                </li>
                <li className="list-group-item">
                  <b>Fecha:</b>
                  {tarea.fecha}
                </li>
                <li className="list-group-item">
                  <b>Vigente:</b>
                  {tarea.vigente}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Volver
          </Link>
        </div>
      </div>
    </div>
  );
}
