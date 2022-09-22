import {useEffect, useState} from "react"
import Paciente from "./Paciente"



function ListadoPacientes({pacientes, setPaciente, paciente}) {
  


  useEffect(() => {
    if (pacientes.length > 0) {
        console.log("Nuevo Paciente")
    }
    
  }, [pacientes])
  


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll ">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className= "text-xl text-center mt-5 mb-10">
        Administra tus {""}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>

    { pacientes.map( (paciente) => (

        <Paciente 
          setPaciente={setPaciente}
          paciente={paciente}
        />
      
      ) )   }

   
    </div>
  )
}

export default ListadoPacientes
