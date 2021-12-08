import ItemCountFunct from '../ItemCount/ItemCount'
import React, {useState, useEffect} from 'react'
import CircularProgress from '@mui/material/CircularProgress';


const ListItems = () => {
    const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])
    const dataProducts = [
        {
            id: 1,
            name: 'Remera',
            price: 1400,
            stock: 10,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzPYIfF2_ywu1jZnildkXfZ2t3C-xJnf1GVXLmWl1aRTUv3Dzm33rXDawpWaugFn5nMPU&usqp=CAU"
        },
                {
            id: 2,
            name: 'Campera',
            price: 5000,
            stock: 7,
            img: "https://www.doiteargentina.com.ar/wp-content/uploads/2019/04/doite-campera-3en1-spirit-verde-pistacho-hombre-01-200x200.jpg"
        }

    ]

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(dataProducts) 
        }, 2000);
       
    }) 

    useEffect (() =>{
        getProducts.then((data) => {
            console.log("Respuesta del promise: ", data)
            setProducts(data)
            setLoader(false)
        })
    }, [])

    const CallPromise = () => {
        getProducts.then(response => console.log("respuesta desde evento: ", response))
    }

    return (
        <>
        <h1>Productos</h1>
        {console.log("asdasda :", products)}
        {
            loader ? <CircularProgress /> :  <div>Muestro productos</div>
        }
        <div className="inlineClass">
        {
            products.map( (product) => {
                return(
                     
                        <div className="items">
                        <h2>{product.name}</h2>
                        <img src={product.img}/>
                        <ItemCountFunct stock={product.stock}/>
                        <button>Ver detalles</button>
                        </div>
                     
                     
                )
            })
        }
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