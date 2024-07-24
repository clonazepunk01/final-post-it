import React from "react";
import './style.css';

export default function ItemTarea({ tarea, onDelete }) {
    return (
        <li className={`post-it ${tarea.importante ? 'importante' : ''}`}>
            <h5>{tarea.titulo || 'Sin título'}</h5>
            <p>{tarea.descripcion}</p>
            <button className="delete-btn" onClick={() => onDelete(tarea.id)}>X</button>
        </li>
    );
}