import { useState, useEffect } from "react"

const Formulario = ({ pacientes, setPacientes, paciente}) => {

  const [nombre, setNombre] = useState("")
  const [propietario, setPropietario] = useState("")
  const [email, setEmail] = useState("")
  const [fecha, setFecha] = useState("")
  const [sintomas, setSintomas] = useState("")

  useEffect(() => {
      if (Object.keys(paciente).length > 0) {
        console.log("Si hay algo")
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
        

      } 
    }, [paciente])
  



  const handleSubmit = (e) => {
    e.preventDefault()

    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("Hay al menos un campo vacio")
    }

    const objetoPaciente = {
        nombre, 
        propietario, 
        email, 
        fecha, 
        sintomas
    }
    console.log(objetoPaciente)

    setPacientes([...pacientes, objetoPaciente])

    setNombre("")
    setPropietario("")
    setEmail("")
    setFecha("")
    setSintomas("")

    if(paciente.email) {

    } else {
      setPacientes([...pacientes, objetoPaciente])
    }

  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {""}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
            onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label htmlFor="mascota" className="block texr-gray-700 uppercase font-bold">
            Nombre Mascota
            </label>
          <input 
          id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md"
            value={nombre}
            onChange={ (e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block texr-gray-700 uppercase font-bold">
            Nombre del Propietario
            </label>
          <input 
          id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md"
            value={propietario}
            onChange={ (e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block texr-gray-700 uppercase font-bold">
            Email
            </label>
          <input 
          id="emai"
            type="email"
            placeholder="Email contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md"
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block texr-gray-700 uppercase font-bold">
            Alta
            </label>
          <input 
          id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md"
            value={fecha}
            onChange={ (e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block texr-gray-700 uppercase font-bold">
            Síntomas
            </label>
            <textarea
            id="sintomas"
            placeholder="Describe los síntomas"
            className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value)}
            />

            <input 
            type="submit"
            className="bg-indigo-600 w-full mt-3 p-3 rounded-md text-white font-bold hover:bg-indigo-700 cursor-pointer transition-all" 
            value={paciente.email ? "Editar Paciente" : "Agregar Paciente"}
            
            />

        </div>
      </form>
    </div>
  )
}

export default Formulario