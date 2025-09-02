
import{ useState } from 'react';
import Home from './components/Home';
import Create from './components/Create';
import Search from './components/Search'; 
import Update from './components/Update';
import Delete from './components/Delete'; 
import useCrud from './hooks/useCrud';
import Navigator from './components/Navigator';


function App() {
  
  const [page,setPage] = useState('home');
  const { test,user,setUser,getAllUsers,users,setUsers,isSearching,setIsSearching } = useCrud()
  const settingPage = ( pageName: string) => {
    console.log('Setting page to:', pageName);
    setPage(pageName);
  }
  return (
    <>
      <div className="flex min-h-screen">
        <Navigator
          test={test}
          settingPage={settingPage}
        />
        <div className='flex-1 mr-auto ml-auto mt-20'>
        {/* ...right content... */}
          {page === 'home' && <Home
          users={users}
          getAllUsers={getAllUsers}
          />}
          {page === 'create' && <Create
            User={user}
            setUser={setUser}
          />}
          {page === 'search' && 
          <Search
            getAllUsers={getAllUsers}
            setIsSearching={setIsSearching}
            setUsers={setUsers}
            isSearching={isSearching}
            users={users}
          />}
          {page === 'update' && 
          <Update
            User={user}
            SetUser={setUser}
          />}
          {page === 'delete' && <Delete/>}
        </div>
      </div>
    </>
  )
}

export default App;
  