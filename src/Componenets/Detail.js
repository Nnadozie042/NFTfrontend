import React from 'react';
import { useParams } from 'react-router-dom';

const Details=({items})=>{
    const {id}=useParams()
    const Single=items.find(item=>item.id===id)
    return(
        <div>
            <div>{Single.name}</div>


        </div>
    )
}
export default Details