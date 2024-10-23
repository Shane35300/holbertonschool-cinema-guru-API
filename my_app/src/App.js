import './App.css';
import Input from './components/general/Input.js';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <Input
        label="shane"
        icon={faUser}
      />
    </div>
  );
}

export default App;
