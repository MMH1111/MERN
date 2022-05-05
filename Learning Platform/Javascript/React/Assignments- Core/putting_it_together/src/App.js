import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard';

function App() {
  return (
    <div>
      <UserCard firstname="Jane" lastname="Doe" age={45} haircolor="Black"/> 
      <UserCard firstname="John" lastname="Smith" age={88} haircolor="Brown"/> 
    </div>
  );
}

export default App;
