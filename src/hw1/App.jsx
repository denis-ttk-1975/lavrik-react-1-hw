import { useState } from 'react';
import { tasks } from './tasks_bd.js';
import css from './card.module.css';

function App() {
  const [tasks, setTasks] = useState(stub());

  function makeStep(name) {
    const newTasks = tasks.map((item) => (item.title === name ? { ...item, executed: item.executed < item.steps ? item.executed + 1 : item.steps } : item));
    setTasks(newTasks);
  }

  return (
    <div className='container py-2'>
      {tasks.map((pr, index) => (
        <div key={index} className={css.card}>
          <div className={css.card_section}>
            <h2>{pr.title}</h2>
          </div>
          <div className={`${css.card_section_column}`}>
            <hr />
            <input readOnly type='range' min='0' max={pr.steps} value={pr.executed > -1 ? (pr.executed <= pr.steps ? pr.executed : pr.steps) : 0} step='1' className={css['styled-slider']} />{' '}
            <p>
              {pr.executed} / {pr.steps}
            </p>
            <hr />
          </div>
          <div className={css.card_section}>
            <button onClick={() => makeStep(pr.title)} className='btn btn-success'>
              Make step
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;

function stub() {
  return tasks;
}
