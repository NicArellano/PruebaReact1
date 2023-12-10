import React, { useEffect, useState } from "react";
import MiCard from "./MiCard";
import Buscador from "./Buscador";

const MiApi = () => {
  //estados
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [personajeOriginal, setPersonajeOriginal] = useState([]);
  const [sorted, setSorted] = useState(false);

  //funciones
  const getPersonajes = async () => {
    try {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      setPersonajes(data.results);
      setPersonajeOriginal(data.results);
      setLoading(false);
    } catch (error) {
      console.log("ERROR", error);
      setLoading(true);
    }
  };
//---------
  const searchName = (e) => {
    if (e.target.value !== "") {
      const filterArr = personajes.filter((personaje) => {
        return personaje.name
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      });

      setPersonajes(filterArr);
    } else {
      setPersonajes(personajeOriginal);
    }
  };
//---------
  const sortById = () => {

    const sortedArr = [...personajes].sort((a, b) => sorted ? (b.id - a.id ): (a.id - b.id));
    setSorted(!sorted)
    setPersonajes(sortedArr);
};


  //efectos
  useEffect(() => {
    getPersonajes();
  }, []);

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="container text-center">
          <Buscador onChange={searchName} />
          <button className="mb-3" onClick={sortById}>Ordenar</button>
          <div className="row gap-5">
            {personajes.map((personaje) => (
              <MiCard propsCard={personaje} key={personaje.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MiApi;
