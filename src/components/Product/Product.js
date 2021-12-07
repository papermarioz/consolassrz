import { ConstructionOutlined, FunctionsTwoTone } from '@mui/icons-material'
import { render } from '@testing-library/react'
import React,{useState, useEffect} from 'react'

// export default class Product extends React.Component{

//     constructor(){
//         super()
//         this.state = {
//             nombre: 'Gustavo'
//         }
//     }

//     componentDidMount(){
//         console.log("comp se enc en el dom")
//     }
//     componentDidUpdate(){
//         console.log("comp se act")
//     }

//     updateName= () => {
//         console.log("state nombre:", this.state.nombre)
//         this.setState({nombre: 'Gus'})
//     }
//     render(){
//         console.log("comp se renderizo")
//         return(
//             <div>
//                 <p>
//                     Nombre: {this.state.nombre}
//                 </p>
//                 <button onClick={this.updateName}>cambiar el nombre</button>
//             </div>
//         )
//     }
// }

////////////////////////////////////////////////////////////// 

// export default function Product() {

//     const [nombre, setNombre] = useState('Gustavo')
//     const [apellido, setApellido] = useState('Suarez')

//     useEffect(() =>{
//         console.log("Ejecuta useEffect")
//     })

//     const updateNombre = () => {
//         setNombre("Gus")
//     };
//     const updateApellido = () => {
//         setApellido("Srz")
//     };

//     return (
//         <div>
//             {console.log("Render")}
//             <p>
//                 Nombre: {nombre}
//             </p>
//             <p>
//                 Apellido: {apellido}
//             </p>
//             <button onClick={updateNombre}>Cambiar el nombre</button>
            
//             <button onClick={updateApellido}>Cambiar el apellido</button>

//         </div>
//     )
// }

////////////////////////////////////////////////////////////// 

// export default function Product() {

//     const agregarItem = () => {
//         // addItem("Gus")
//     };
//     const eliminarItem = () => {
//         // removeItem("Srz")
//     };

//     return (
//         <div>
//             {console.log("Render")}
//             <h2>0</h2>
//             <button onClick={agregarItem}>+</button>
//             <button onClick={eliminarItem}>-</button>

//         </div>
//     )
// }
