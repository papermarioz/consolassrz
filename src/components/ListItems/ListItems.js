import Item from '../Item/Item'
import Test from '../Test/Test'

const ListItems = () => {
    const dataProducts = [
        {
            name: "Remera 1",
            price: 1400,
            stock: 10,
        },
        {
            name: "Campera 1",
            price: 7500,
            stock: 5,
        }

    ]
    return (
        <>
        <h2>Productos</h2>
        {dataProducts.map((product) =>{
            return(<Item name={product.name} price={product.price} stock={product.stock}/>
            )
        })}
        </>
    )
}

export default ListItems;





// import React from 'react'

// class ListItems extends React.Component {
//     render() {
//         return (
//             <div>
//             Nombre: {this.props.nombre}
//             <br />
//             Precio: {this.props.precio}
//             <hr></hr>
//         </div>
//         )
//     }
// }

// export default ListItems