import { useState } from "react";

import downloadImg from "../assets/download.svg";

function AboutMe() {
  const [optionValue, setOptionValue] = useState(1);
 

  function changeWindow(value) {
    switch (value) {
      case 1:
        return (
          <>
            <p className="bg-blue-700 p-2 rounded-2xl text-[10px] md:text-sm   ">
              {" "}
              Soy un apasionado de la{" "}
              <strong>tecnología y la programación</strong>, dos campos que
              considero fascinantes y en constante evolución. Mi entusiasmo por
              la innovación tecnológica me impulsa a explorar y aprender nuevas
              tecnologías y herramientas. A través de mi experiencia, he
              adquirido habilidades para traducir ideas innovadoras en
              soluciones tangibles y prácticas mediante el desarrollo de
              software
            </p>
            <div className="w-full h-full flex gap-3">
              <div className="w-[100%]  gap-3 flex flex-col overflow-auto  rounded-2xl text-[10px] md:text-sm p-2 transform transition-transform duration-300 hover:scale-105 ">
                <div className="bg-gray-500 p-2 rounded-xl">
                  <strong> Diseño de Landíng Pages (html/css/js) </strong>
                  <br /> Diseño Elaboración del código Responsividad ( celulares
                  /tablets / pc ) <br />
                  Enero /febrero 2023
                </div>{" "}
                <div className="bg-red-500 p-2 rounded-xl">
                  <strong>
                    Participación en el Diseño de la pagina web de BC
                  </strong>{" "}
                  <br />
                  mockups Diseños Responsivos <br />
                  Junio | Diciembre 2023
                </div>{" "}
                <div className="bg-blue-600 p-2 rounded-xl">
                  <strong>Programador Jr</strong>
                  Actualización del sistema de inventario (vue.js , Bootstrap )
                  Implementación de nuevas funciones en el sistema Manejo de la
                  base de datos ( laravel , Mysql )
                </div>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className=" px-1 rounded-2xl flex gap-3 w-full">
              <p className="bg-slate-800 px-1 rounded-2xl p-2 text-gray-400 text-sm flex">
                Diplomado-Internet de las Cosas, Big Data
              </p>
              <button className="bg-green-600 px-2 rounded-xl ">
                <img
                  className="w-5"
                  src={downloadImg}
                  alt="download"
                />
              </button>
            </div>
            <div className=" px-1 rounded-2xl flex gap-3 w-full justify-between">
              <p className="bg-slate-800  rounded-2xl p-3 text-gray-400 text-sm flex">
                Participacion en Diseno de Economia BC
              </p>
              <button className="bg-green-600 px-2 rounded-xl ">
                <img
                  className="w-5"
                  src={downloadImg}
                  alt="download"
                />
              </button>
            </div>
          </>
        );

      default:
        break;
    }
  }
  return (
    <div className="text-white h-80 w-80 rounded-lg py-3 gap-3 flex flex-col">
      <div className="w-full flex  rounded-2xl gap-3  items-center justify-center">
        <button
          onClick={() => setOptionValue(1)}
          className={` ${
            optionValue === 1 ? "border " : ""
          } bg-blue-500 rounded-2xl p-2 text-sm transform transition-transform duration-300 hover:scale-105 `}
        >
          Experiencia
        </button>
        <button
          onClick={() => setOptionValue(2)}
          className={` ${
            optionValue === 2 ? "border " : ""
          } bg-green-600 rounded-2xl p-2 text-sm transform transition-transform duration-300 hover:scale-105 `}
        >
          Certificados
        </button>
      </div>
      {changeWindow(optionValue)}
    </div>
  );
}

export default AboutMe;
