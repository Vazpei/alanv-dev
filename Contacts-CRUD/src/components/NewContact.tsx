
import './../App.css'


export default function NewContact() {
  return (
    <>
    <div className='m-10 max-w-120 rounded bg-white p-5 shadow-2xl'>
        <div className=' p-5'>
            <h2 className='font-bold text-emerald-500 text-2xl'>
                Add new Contact
            </h2>
        </div>
            <form action="handleSubmit" className='flex flex-col gap-2'>
                <input type="text" name="" id="" placeholder='name' className='bg-gray-200 p-2 rounded' />
                <input type="text" name="" id="" placeholder='email' className='bg-gray-200 p-2 rounded' />
                <input type="text" name="" id="" placeholder='number' className='bg-gray-200 p-2 rounded'/>
                <input type="text" name="" id="" placeholder='age' className='bg-gray-200 p-2 rounded'/>
                <button type='submit' className='font-bold text-white bg-emerald-500 p-2 rounded w-full hover:bg-emerald-300'>Add</button>
            </form>
    </div>
    </>
  )
}
