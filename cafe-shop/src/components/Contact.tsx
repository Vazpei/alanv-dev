
export default function Contact() {
  return (
    <>
      <div>
        <h2 className="font-bold text-3xl mt-20 text-center">Envianos tus comentarios</h2>
        <form action="submit" onSubmit={e =>{
          e.preventDefault()
          alert(`Sending your comments`)
        }} className="flex flex-col p-10 gap-2 max-w-150 m-auto">
          <input type="email" className="bg-gray-200 p-2 w-full rounded" name="" id="" placeholder="email" />
          <textarea name="" className="bg-gray-200 p-2 rounded h-40" id="" placeholder="comentarios"></textarea>
          <div className="flex justify-center">
            <button
                className="bg-amber-600 hover:bg-amber-500 text-white w-90 font-bold p-2 rounded"
              >Enviar</button>
          </div>
        </form>
      </div>
    </>
  )
}
