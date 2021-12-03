import { ConstructionOutlined, FunctionsTwoTone } from '@mui/icons-material'
import { render } from '@testing-library/react'
import React,{useState, useEffect} from 'react'
import './ItemCount.css';

export default function ItemCountFunct({stock}) {

    const [ItemCount, setItem] = useState(0)

    const agregarItem = () => {
        ItemCount < stock && setItem(ItemCount + 1)
    };
    const eliminarItem = () => {
        ItemCount >= 1 && setItem(ItemCount - 1)
    };

    return (
        <div>
            {console.log("Render")}
            <h2>{ItemCount}</h2>
            <button onClick={agregarItem}>+</button>
            <button onClick={eliminarItem}>-</button>
            <span> Stock: {stock} </span>
        </div>
    )
}
