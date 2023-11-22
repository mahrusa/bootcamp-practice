export default function ListItem({obj}){
    const st = {textDecorationLine :  !obj.completed && "line-through"  };
    return (
        <li style={st}>
            {obj.item} - {obj.quantity}
        </li>
    )
}

/* 
<li 
    key= {i.id}
   style={{textDecorationLine :  !i.completed && "line-through"  }}>
    {i.item} - {i.quantity}
     </li>)}
*/