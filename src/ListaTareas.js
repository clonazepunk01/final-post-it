import React, { useEffect, useRef, useState } from "react";
import ItemTarea from "./ItemTarea";
import { v4 as uuid } from 'uuid';
import './style.css';

export default function ListaTareas() {
    const [tareas, setTareas] = useState([]);
    const tituloRef = useRef();
    const descripcionRef = useRef();
    const importanteRef = useRef();

    useEffect(() => {
        const listaTareas = JSON.parse(localStorage.getItem("tareas-app-lista"));
        if (listaTareas) {
            setTareas(listaTareas);
        }
    }, []);

    useEffect(() => {
        const json = JSON.stringify(tareas);
        localStorage.setItem("tareas-app-lista", json);
    }, [tareas]);

    const agregarTarea = (e) => {
        e.preventDefault();
        const titulo = tituloRef.current.value;
        const descripcion = descripcionRef.current.value;
        const importante = importanteRef.current.checked;

        if (descripcion === "") return;

        const nuevaTarea = {
            id: uuid(),
            titulo,
            descripcion,
            importante
        };

        setTareas((prev) => [...prev, nuevaTarea]);

        tituloRef.current.value = "";
        descripcionRef.current.value = "";
        importanteRef.current.checked = false;
    };

    const eliminarTarea = (id) => {
        setTareas(tareas.filter(tarea => tarea.id !== id));
    };

    return (
        <div className="app-container p-5 bg-light rounded shadow-lg mt-5">
            <h1>Notas PoP-It</h1>
            <form className="formulario" onSubmit={agregarTarea}>
                <div className= "input-group mb-3">
                <input ref={tituloRef} className="form-control" placeholder="Título" />
                </div>
                <div className= "input-group mb-3">
                <input ref={descripcionRef} className="form-control" placeholder="Descripción" required />
                <button type="submit" className="btn btn-dark">Agregar</button>
                </div>
                <div className= "input-group my-3 mb-4">
                    <label className="form-check-label">
                        <input ref={importanteRef} className="form-check-input" type="checkbox" />
                        Importante
                    </label>
                </div>
                <div className= "input-group mb-3">
                </div>
            </form>
            <ul className="post-it-list">
                {tareas.map((item) => (
                    <ItemTarea key={item.id} tarea={item} onDelete={eliminarTarea} />
                ))}
            </ul>
        </div>
    );
}