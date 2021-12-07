const Item = ({name, price, stock}) => {
    return (
        <div>
            <p>Nombre: {name}</p>
            <p>Precio: {price}</p>
            <p>Stock: {stock}</p>
        </div>
    )
}

export default Item; 