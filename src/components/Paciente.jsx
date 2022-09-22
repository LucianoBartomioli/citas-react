import React from 'react'

const Paciente = ({paciente, setPaciente}) => {
  

  return (
    <div className="mx-5 py-5 bg-white shadow-md px-5 my-5 rounded-md hover:bg-slate-50 hover:translate-x-2 transition-all">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
            <span className="font-normal normal-case">{paciente.nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {""}
            <span className="font-normal normal-case">{paciente.propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
            <span className="font-normal normal-case">{paciente.email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {""}
            <span className="font-normal normal-case">{paciente.fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
            <span className="font-normal normal-case">{paciente.sintomas}</span>
        </p>

        <div className='flex'>
            <button className="text-white uppercase font-bold bottom m-2 p-3 bg-green-500 rounded-xl" 
            type='button' 
            onClick={() => setPaciente(paciente)}>
                Editar
                </button>


            <button className="text-white uppercase font-bold bottom m-2 p-3 bg-red-500 rounded-xl" type='submit'>Eliminar</button>
        </div>
    </div>
  )
}
export default Paciente
