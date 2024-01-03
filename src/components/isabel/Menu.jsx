import { useNavigate } from "react-router-dom";


const Menu = () => {
  const navigate = useNavigate();

  return (
    <>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-20 mt-12 md:ml-24 md:mr-24">
        <button 
        onClick={() => navigate("/home")}
        className="flex gap-4 text-black font-semibold p-3 rounded-2xl bg-white focus:bg-blue-600 focus:text-white ">
            <img src="/src/assets/ikan-badut.svg" alt="" className="w-8 self-center"/>
            <p className="self-center">
            Ikan di Aquarium
            </p>
        </button>
        <button 
        onClick={() => navigate("/ikan-terjual")}
        className="flex gap-4 text-black font-semibold px-8 py-2 rounded-2xl bg-white focus:bg-blue-600 focus:text-white">
            <img src="/src/assets/dollar.svg" alt="" className="w-8 self-center" />
            <p className="self-center">
            Ikan Terjual
            </p>
        </button>
        <button 
        onClick={() => navigate("/analisis-penjualan")}
        className="flex gap-4 text-black font-semibold px-8 py-2 rounded-2xl bg-white focus:bg-blue-600 focus:text-white">
            <img src="/src/assets/growth.svg" alt="" className="w-8 self-center" />
            <p className="self-center">
            Analisis Penjualan
            </p>
        </button>
    </div>
    </>
  )
}

export default Menu