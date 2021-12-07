import Item from '../Item/Item'
import Test from '../Test/Test'
import ItemCountFunct from '../ItemCount/ItemCount'

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
        <h1>Productos</h1>
        <div className="inlineClass">
        <div className="items">
        <h2>Remera:</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzPYIfF2_ywu1jZnildkXfZ2t3C-xJnf1GVXLmWl1aRTUv3Dzm33rXDawpWaugFn5nMPU&usqp=CAU"/>
        <ItemCountFunct stock={6}/>
        </div>
        <div className="items">
        <h2> Campera:</h2>
        <img src="https://www.doiteargentina.com.ar/wp-content/uploads/2019/04/doite-campera-3en1-spirit-verde-pistacho-hombre-01-200x200.jpg"/>
        <ItemCountFunct stock={10}/>
        </div>
        <div className="items">
        <h2>Jean:</h2>
        <img src="https://dictionary.cambridge.org/es/images/thumb/jeans_noun_002_19715.jpg?version=5.0.199" />
        <ItemCountFunct stock={14}/>
        </div>
        </div>
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