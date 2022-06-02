import * as C from './App.styles';

import { useState } from 'react';
import { Item } from './types/Item';

import LisItem from './components/ListItem';
import AddArea from './components/AddArea';

function App() {
  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas </C.Header>

        <AddArea  onEnter={handleAddTask} />

        {list.map((item, index)=>(
          <div><LisItem key={index} item={item} /></div>
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;
