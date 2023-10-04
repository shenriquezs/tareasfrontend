import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddTarea() {
  let navigate = useNavigate();

  const [tarea, setTarea] = useState({
    descripcion: "",
    fecha: "",
    vigente: "",
  });

  const { descripcion, fecha, vigente } = tarea;

  const onInputChange = (e) => {
    setTarea({ ...tarea, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/tarea", tarea);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Agregar Tarea</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Descripcion" className="form-label">
              Descripción
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingrese Descripción"
                name="descripcion"
                value={descripcion}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Fecha" className="form-label">
                Fecha
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingrese Fecha"
                name="fecha"
                value={fecha}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Vigente" className="form-label">
                Vigente
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingrese si está vigente"
                name="vigente"
                value={vigente}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
