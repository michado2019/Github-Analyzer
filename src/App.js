import './App.css';
import AppRouter from './components/routes/AppRouter';
import { Navbar } from './components/layouts/Layouts';
function App() {
  return (
    <div className="App">
    <Navbar />
     <AppRouter />
    </div>
  );
}

export default App;
