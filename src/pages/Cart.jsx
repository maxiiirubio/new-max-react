
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export const Cart = () => {
  const navigate = useNavigate()

  //PROX CLASE

  const {cart, getTotal, removeProduct} = useCartContext();


  return (
    <div className="content">
      {cart.map((product) => (
        <div key={product.id}>
          <div style={{fontWeight: 600}}>{product.nombre}</div>
          <div>Cantidad : {product.qty}</div>
          <button onClick={()=> removeProduct(product.id)}>Eliminar Producto</button>
        </div>
      ))}
      <span>
        TOTAL: ${getTotal()}
      </span>
    </div>
    
  );
};