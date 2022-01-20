import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Input from './components/Input';
import Items from './components/Items';

function App() {

  const [inputText, setInputText] = useState("");
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("itemsList") === null) {
      localStorage.setItem("itemsList", JSON.stringify([]))
    } else {
      let local = JSON.parse(localStorage.getItem("itemsList"));
      setItemsList(local);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("itemsList", JSON.stringify(itemsList));
  }, [itemsList])

  return (
    <Container className='py-5' >
      <h1>Todo List</h1>
      <Input inputText={inputText} setInputText={setInputText} setItemsList={setItemsList} itemsList={itemsList} />
      <Items setItemsList={setItemsList} itemsList={itemsList} />
    </Container>
  );
}

export default App;
