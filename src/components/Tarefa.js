import React from "react";

function Tarefa({ tarefa, onRemoverTarefa}) {
    return (
        <div className="tarefa">
            <span>{tarefa}</span>
            <button onClick={() => onRemoverTarefa(tarefa)}>Remover</button>
        </div>
    );
}

export default Tarefa;