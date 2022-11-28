export const Boton = ({ onClick, label, children, disabled }) => (
    <button onClick={onClick} disabled={disabled}>
    {label || children} 
    </button>
  );