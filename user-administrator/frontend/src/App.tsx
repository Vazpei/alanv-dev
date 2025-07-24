
import{ useState } from 'react';
import Home from './components/Home';
import Create from './components/Create';
import Search from './components/Search'; 
import Update from './components/Update';
import Delete from './components/Delete'; 
import useCrud from './hooks/useCrud';

function App() {

  const [page,setPage] = useState('home');
  const { test,user,setUser } = useCrud()
  const settingPage = ( pageName: string) => {
    console.log('Setting page to:', pageName);
    setPage(pageName);
  }
  return (
    <>
      <div className="flex min-h-screen">
        <aside className="sidebar bg-slate-800 text-white p-4 w-50 flex flex-col justify-between items-center min-h-screen">
        {/* ...existing code... */}
         <div className="mt-10">
            <h2 className="font-bold">User administrator</h2>
            <nav className="flex flex-col gap-2 mt-5">
              <a 
                href="#" 
                className="p-2 hover:bg-sky-600 transition-all  duration-200"
                onClick={e => {e.preventDefault(), settingPage('home')}}
                >Home</a>
              <a 
                href="#" 
                className="p-2 hover:bg-sky-600 transition-all  duration-200"
                onClick={e => {e.preventDefault(), settingPage('create')}}
                >Create</a>
              <a 
                href="#" 
                className="p-2 hover:bg-sky-600 transition-all  duration-200"
                onClick={e => {e.preventDefault(), settingPage('search')}}
                >Search</a>
              <a 
                href="#" 
                className="p-2 hover:bg-sky-600 transition-all  duration-200"
                onClick={e => {e.preventDefault(), settingPage('update')}}
                >Update</a>
              <a 
                href="#" 
                className="p-2 hover:bg-sky-600 transition-all  duration-200"
                onClick={e => {e.preventDefault(), settingPage('delete')}}
                >Delete</a>
                <a 
                href="#" 
                className="p-2 hover:bg-sky-600 transition-all  duration-200"
                onClick={e => {e.preventDefault(),test()}}
                >TEST</a>
            </nav>
         </div>
         <div className='font-bold'>Alan Vazquez</div>
        </aside>
        <div className='flex-1 mr-auto ml-auto mt-20'>
        {/* ...right content... */}
          {page === 'home' && <Home/>}
          {page === 'create' && <Create
            User={user}
            setUser={setUser}
          />}
          {page === 'search' && <Search/>}
          {page === 'update' && <Update/>}
          {page === 'delete' && <Delete/>}
        </div>
      </div>
    </>
  )
}

export default App;
