import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Iconos from "./components/Iconos";
import humidity from "../src/assets/humidity.svg"
import min_temp from "../src/assets/thermometer-colder.svg"
import max_temp from "../src/assets/thermometer-warmer.svg"
import viento from "../src/assets/wind.svg"




function App() {
  const [busq, setBusq] = useState("Buenos Aires");
  const [dataApi, setDataApi] = useState("");
  const [icon, setIcon] = useState("");

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${busq}&lang=es&units=metric&appid=${import.meta.env.VITE_APIKEY}`;

  useEffect(() => {
    const fetchClima = async () => {
      try {
        const response = await axios.get(URL);

        if (response.data.cod >= 400) {
          setDataApi(false);
        } else {
          setDataApi(response.data);
          setIcon(response.data.weather[0].main);
        }
      } catch {
        console.error("Se pudrio todo..", error);
      }
    };

    fetchClima();
  }, [busq]);

  const handleBusq = (e) => {
    if (e.key === "Enter") {
      setBusq(e.target.value);
    }
    
  };

  return (
    <>
      <div className="bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90% w-full h-screen flex justify-center items-center font-quicksand">
        <div className="bg-slate-200 w-[70%] text-center rounded-2xl md:w-[45%] lg:w-[35%]">
          <h1 className="text-4xl my-3 text-slate-600">Clima App</h1>
          <div>
            <input
              className="bg-white w-[75%] px-2 py-1 rounded-4xl my-2 border border-zinc-400"
              onKeyDown={handleBusq}
              type="text"
              autoFocus
              placeholder="Escriba una ciudad del mundo.."
            />
          </div>

          <div>
            {dataApi ? (
              <div>
                <p className="text-xl">{dataApi.name}, {dataApi.sys.country}</p>
                <div className="flex justify-center items-center">
                  <p className="text-4xl">{dataApi.main.temp.toFixed(0)}&deg;</p>
                  <img className="w-36 h-36" src={Iconos(icon)} alt="icon-clima" />
                </div> 
                <p className="text-lg capitalize my-4">{dataApi.weather[0].description}</p>
                <div className="flex justify-around items-center bg-slate-400 text-white">
                  <div>
                    <img className="w-10 h-10 mx-auto" src={min_temp} alt="icon-min" />
                    <p>Min: {dataApi.main.temp_min}</p>
                  </div>

                  <div>
                    <img className="w-10 h-10 mx-auto" src={max_temp} alt="icon-max" />
                    <p>Máx: {dataApi.main.temp_max}</p>
                  </div>

                  </div>
                  <div className="flex items-center justify-around bg-slate-400 text-white rounded-b-xl">
                    <div className="flex items-center">
                      <img className="w-10 h-10" src={humidity} alt="humedad" />
                      <p>{dataApi.main.humidity}</p>
                    </div>
                    <div className="flex items-center">
                    <img className="w-10 h-10" src={viento} alt="viento-icon" />
                    <p>{dataApi.wind.speed} Km/h</p>
                    </div>
                  </div>
                
              </div>
            ) : (
              <h1>Cargando..</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
