import React from 'react';
import ReactDOM from 'react-dom';
import ListaTareas from './ListaTareas';
import "./style.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='container pt-3'>
        <ListaTareas />
    </div>
);
