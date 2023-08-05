import { useState } from 'react';
import './css/estilos.css';
import {Routes, Route, Link, Outlet} from 'react-router-dom';
import { 
  MdMenu,
  MdOutlinePersonPin,
  MdArrowBack,
  MdHome,
  MdQueueMusic,
  MdLocationOn,
  MdOutlineInsertEmoticon,
  MdHelp,
} from 'react-icons/md';
import { Sedes } from './pages/Sedes';
import { Inicio } from './pages/Inicio';
import { Eventos } from './pages/Eventos';
import { Promociones } from './pages/Promociones';
import { Ayuda } from './pages/Ayuda';

export default function App() {
  const [mostrar, setMostrar] = useState(0);

  return (
    <>
    <Routes>
     <Route path={"/"} element={<Inicio />} ></Route>
     <Route path={"/eventos"} element={<Eventos />} ></Route>
     <Route path={"/sedes"} element={<Sedes />} ></Route>
     <Route path={"/promociones"} element={<Promociones />} ></Route>
     <Route path={"/ayuda"} element={<Ayuda />} ></Route>
     </Routes>

      <header className="flex items-center justify-between p-2 text-lg text-center text-white uppercase border-b-8 shadow-lg select-none bg-slate-700 border-rose-400 shadow-slate-400">
        <span
          onClick={() => setMostrar(1)}
          className="hover:cursor-pointer hover:text-rose-400 active:text-yellow-400">
          <MdMenu size={40} />
        </span>

        <div>
          <h1 className="font-bold">
            Reservaciones de eventos y compras en l&iacute;nea
          </h1>
          <p>Comercial "La econ&oacute;mica"</p>
        </div>

        <span>
          <MdOutlinePersonPin size={40} />
        </span>

        <div
          onClick={() => setMostrar(0)}
          className={`${
            mostrar ? 'fixed' : 'hidden'
          } inset-0 z-20 bg-gray-500 bg-opacity-50 backdrop-blur-sm transition-all duration-500 ease-in-out`}></div>

        <aside
          className={`h-screen w-11/12 lg:w-3/12 p-4 fixed
        top-0 left-0 bottom-0 bg-white
        shadow-lg shadow-gray-500 text-rose-500 z-50 transition duration-500 ease-in-out
        ${mostrar ? 'translate-x-0' : '-translate-x-full'}`}>
          <h2 className="flex items-center justify-between text-2xl font-bold">
            <span>
              <MdArrowBack
                size={40}
                onClick={() => setMostrar(0)}
                className="hover:cursor-pointer hover:text-rose-400 active:text-yellow-400"
              />
            </span>
            <span>Men&uacute;</span>
          </h2>
          <ul id="menu">
            <li>
              <Link to= {"/"}>
                <span className="icono">
                  <MdHome size={36} />
                </span>
                <span className="texto">Inicio</span>
              </Link>
            </li>
            <li>
              <Link to={"/eventos"}>
                <span className="icono">
                  <MdQueueMusic size={36} />
                </span>
                <span className="texto">Eventos</span>
              </Link>
            </li>
            <li>
              <Link to={"/sedes"}>
                <span className="icono">
                  <MdLocationOn size={36} />
                </span>
                <span className="texto">Sedes</span>
              </Link>
            </li>
            <li>
              <Link to={"/promociones"}>
                <span className="icono">
                  <MdOutlineInsertEmoticon size={36} />
                </span>
                <span className="texto">Promociones</span>
              </Link>
            </li>
            <li>
              <Link to={"/ayuda"}>
                <span className="icono">
                  <MdHelp size={36} />
                </span>
                <span className="texto">Ayuda</span>
              </Link>
            </li>
          </ul>
        </aside>
      </header>
      <main>
        <section>
          <Outlet />
        </section>
      </main>

      <footer></footer>
    </>
  );
}