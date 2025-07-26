

type NavigatorProps = {
    settingPage: (page: string) => void;
    test: () => void;
}


export default function Navigator({settingPage, test}: NavigatorProps) {
  return (
    <aside className="sidebar bg-violet-700 text-white p-4 w-50 flex flex-col justify-between items-center min-h-screen">
        {/* ...existing code... */}
         <div className="mt-10">
            <h2 className="font-bold">User administrator</h2>
            <nav className="flex flex-col gap-2 mt-5">
              <a 
                href="#" 
                className="p-2 hover:bg-white hover:text-violet-900 rounded transition-all  duration-200"
                onClick={e => {e.preventDefault(), settingPage('home')}}
                >Home</a>
              <a 
                href="#" 
                className="p-2  hover:bg-white hover:text-violet-900 transition-all  duration-200"
                onClick={e => {e.preventDefault(), settingPage('create')}}
                >Create</a>
              <a 
                href="#" 
                className="p-2  hover:bg-white hover:text-violet-900 transition-all  duration-200"
                onClick={e => {e.preventDefault(), settingPage('search')}}
                >Search</a>
              <a 
                href="#" 
                className="p-2  hover:bg-white hover:text-violet-900 transition-all  duration-200"
                onClick={e => {e.preventDefault(), settingPage('update')}}
                >Update</a>
              <a 
                href="#" 
                className="p-2  hover:bg-white hover:text-violet-900 transition-all  duration-200"
                onClick={e => {e.preventDefault(), settingPage('delete')}}
                >Delete</a>
                <a 
                href="#" 
                className="p-2  hover:bg-white hover:text-violet-900 transition-all  duration-200"
                onClick={e => {e.preventDefault(),test()}}
                >TEST</a>
            </nav>
         </div>
         <div className='font-bold'>Alan Vazquez</div>
        </aside>
  )
}
