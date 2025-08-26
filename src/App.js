import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Tarefa from './components/Tarefa';

const LOCAL_STORAGE_KEY = 'minha-lista-de-tarefas:savedTasks';

function App() {
  const [tarefas, setTarefas] = useState(() => {
    const tarefasSalvas = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (tarefasSalvas) {
      return JSON.parse(tarefasSalvas);
    } else {
      return [];
    }
  });

  const [novaTarefa, setNovaTarefa] = useState('');

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarTarefa = (e) => {
    e.preventDefault();
    if (novaTarefa.trim() !== '') {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa('');
    }
  };

  const removerTarefa = (tarefaParaRemover) => {
    setTarefas(tarefas.filter(tarefa => tarefa !== tarefaParaRemover));
  };

  return (
    <div className='App'>
      <header className='App-Header'>
        <h1>Minha Lista de Tarefas</h1>
        <form onSubmit={adicionarTarefa}>
          <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Adicione uma nova tarefa"
          />
          <button type="submit">Adicionar</button>
        </form>
        <div className='Lista-tarefas'>
          {tarefas.map((tarefa, index) => (
            <Tarefa key={index} tarefa={tarefa} onRemoverTarefa={removerTarefa} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
