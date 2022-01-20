import { Container } from 'react-bootstrap';
import Input from './components/Input';
import Items from './components/Items';

function App() {
  return (
    <Container className='py-5' >
      <h1>Todo List</h1>
      <Input />
      <Items />
    </Container>
  );
}

export default App;
