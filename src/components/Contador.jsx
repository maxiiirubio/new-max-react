import { useState } from "react";
import { Boton } from "./Boton";

export const Contador = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(0);

  const handleAdd = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const handleSubstract = () => {
    if (contador > 0) setContador(contador - 1);
  };
  
  return (
    <div>
      <Boton onClick={handleAdd}> Sumar </Boton>
      <span>{contador}</span>
      <Boton onClick={handleSubstract}> Restar </Boton>
      <Boton
        onClick={() => {
          if (contador) onAdd(contador);
        }}
        disabled={!contador}
      >
        Agregar al carrito
      </Boton>
    </div>
  );
};