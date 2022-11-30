import './App.css';
import { Navbar } from './components/layouts/Layouts';
import AppRouter from './components/routes/AppRouter';
function App() {
  return (
    <div className="App">
     <Navbar />
     <AppRouter />
    </div>
  );
}

export default App;
