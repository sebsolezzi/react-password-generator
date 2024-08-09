import { useState } from 'react'
import { generarPassword } from './helpers'
import { Data } from './types'

function App() {

  const [password, setPassword] = useState('')
  const [cargando, setCargando] = useState(false)
  const [cantidad, setCantidad] = useState<Data>({
    numeros: 2,
    letras: 2,
    simbolos: 2
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const valor = +e.target.value
    if (valor > 10 || valor < 2) return
    setCantidad({
      ...cantidad,
      [e.target.name]: +e.target.value
    })
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setPassword('')
    setCargando(true)
    setTimeout(() => {
      const password = generarPassword(cantidad)
      setPassword(password)
      setCargando(false)
    }, 2000);
  }

  return (
    <>
      <form className='flex flex-col justify-center items-center mt-10 bg-blue-400 border border-3 rounded-lg w-5/4 lg:w-1/4 mx-auto p-5'>
        <h1 className='text-blue-600 text-center text-2xl font-bold'>Password Generator</h1>
        <div className='mt-3'>
          <label className='block text-blue-700 font-bold' htmlFor="letras">Cantidad de letras</label>
          <input className='block' type="number" name="letras" id="letras" value={cantidad.letras} onChange={handleChange} />
        </div>
        <div className=''>
          <label className='block text-blue-700 font-bold' htmlFor="numeros">Cantidad de numeros</label>
          <input className='block' type="number" name="numeros" id="numeros" value={cantidad.numeros} onChange={handleChange} />
        </div>
        <div className=''>
          <label className='block text-blue-700 font-bold' htmlFor="simbolos">Cantidad de simbolos</label>
          <input className='block ' type="number" name="simbolos" id="simbolos" value={cantidad.simbolos} onChange={handleChange} />
        </div>

        <input
          onClick={handleSubmit}
          className='mt-5 w-1/3 bg-blue-600 text-white uppercase cursor-pointer p-1'
          type="submit"
          value="Generar"
        />
        {cargando && <span className="mt-3 loader"></span>}
        {password && (
          <div className='text-center bg-blue-600 text-white font-bold  p-2 mt-3'>
            <h4>TU PASSWORD</h4>
            <p>{password}</p>
          </div>
        )}
      </form>
    </>
  )
}

export default App
