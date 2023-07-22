import "./home.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDogs,
  getTemperaments,
  filterDogsByTemperament,
  filterDogsByOrigin,
  sortByName,
  sortByWeight,
} from "../Redux/actions";
import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";
import Pagination from "../Pagination/Pagination";
import Loading from "../Loader/Loader";
import Nav from "../Nav/Nav";

function Home() {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs);
  const allTemperaments = useSelector((state) => state.temperaments);

  const [currentPage, setCurrentPage] = useState(1); //mi pagina actual que arraca en 1
  const [dogsPerPage, setDogsPerPage] = useState(8); // Mis perros por pagina que son 8
  const indexLastDog = currentPage * dogsPerPage;
  const indexFirstDog = indexLastDog - dogsPerPage;
  const dogsMax = Math.ceil(dogs?.length / dogsPerPage);
  const currentDogs =
    Array.isArray(dogs) && dogs?.slice(indexFirstDog, indexLastDog);
  const [, setOrden] = useState("");

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  }, [dispatch]);

  function handleClick(event) {
    event.preventDefault();
    dispatch(getDogs());
  }

  const filterTemperamentHandler = (e) => {
    e.preventDefault();
    dispatch(filterDogsByTemperament(e.target.value));
    setCurrentPage(1);
  };

  function handleSortByName(e) {
    e.preventDefault();
    dispatch(sortByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  function handleFilterOrigin(e) {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(filterDogsByOrigin(e.target.value));
  }

  function handleSortByWeight(e) {
    e.preventDefault();
    dispatch(sortByWeight(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  return (
    <div className="fondo">
      <Nav />
      <SearchBar />
      <div>
        <ul className="container1">
          <li className="content-select">
            <select className="selecttt" onChange={(e) => handleSortByName(e)}>
              <option value="All" hidden>
                Orden alfabético
              </option>
              <option value="ABC">A - Z</option>
              <option value="Desc">Z - A</option>
            </select>
          </li>

          <li className="content-select">
            <select
              className="selecttt"
              onChange={(e) => handleSortByWeight(e)}>
              <option value="selected" hidden>
                Peso
              </option>
              <option value="asc">Mas Livianos</option>
              <option value="desc">Mas Pesados</option>
            </select>
          </li>
          <select className="selecttt" onChange={filterTemperamentHandler}>
            <option value="All" hidden>
              All Temperaments
            </option>
            {allTemperaments &&
              allTemperaments.map((temperament, index) => {
                return (
                  <option key={index} value={temperament.name}>
                    {temperament.name}
                  </option>
                );
              })}
          </select>
          <li className="content-select">
            <select
              className="selecttt"
              onChange={(e) => handleFilterOrigin(e)}>
              <option value="all">Origen</option>
              <option value="api">API</option>
              <option value="created">DB</option>
            </select>
          </li>
          <button className="buttont" onClick={(event) => handleClick(event)}>
            Reset
          </button>
        </ul>
      </div>
      <div></div>
      <Pagination
        dogsMax={dogsMax}
        paginated={paginado}
        currentPage={currentPage}
      />
      <div className="Cards__container">
        {currentDogs.length ? (
          currentDogs?.map((dog) => {
            return (
              <Card
                key={dog.id}
                id={dog.id}
                name={dog.name}
                image={dog.image}
                lifeSpan={dog.life_span}
                weight={dog.weight}
                height={dog.height}
                temperaments={dog.temperaments}
              />
            );
          })
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default Home;
