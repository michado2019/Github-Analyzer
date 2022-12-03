import './App.css';
import { useState, createContext } from 'react';
import { Navbar, Sidebar } from './components/layouts/Layouts';
import AppRouter from './components/routes/AppRouter';


// Create context
 export const DataContext = createContext({})

function App() {

   // State
   const [data, setData] = useState({});
  
   // Fetch adata from gitbub api
   async function getData() {
     const url = "https://api.github.com/users/michado2019";
     const response = await fetch(url);
     const results = await response.json();
     setData({
       followers: results?.followers,
       following: results?.following,
       repos: results?.public_repos,
       avatar: results?.avatar_url,
       name: results?.name,
       html_url: results?.html_url,
       bio: results?.bio,
       twitter_username: results?.twitter_username,
     });
   }
   getData();
  return (
    <div className="App">
    <DataContext.Provider value={data}>
      <Navbar />
      <div className='appLayout'>
     <Sidebar />
     <AppRouter className='appLayout-router' />
     </div>
    </DataContext.Provider>
    </div>
  );
}

export default App;
