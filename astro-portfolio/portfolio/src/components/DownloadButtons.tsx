


export default function DownloadButtons() {
    const handleButton = (message:string) => {
        alert(message)
    }
  return (
    <div className="flex justify-center gap-5 mt-5">
        <button 
        className="bg-violet-600 font-bold flex justify-center gap-1 p-2 rounded hover:shadow-[0_0_17px_#5f27cd] transition-all duration-200 w-60"
        onClick={() => handleButton('Downloading English Version')}
        >
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-download"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>
         English</button>
        <button 
        className="bg-violet-600 flex justify-center gap-1 font-bold p-2 rounded hover:shadow-[0_0_17px_#5f27cd] transition-all duration-200 w-60"
        onClick={() => handleButton('Downloading Spanish Version')}
        >
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-download"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>
        Spanish</button>
    </div>
  )
}
