import ListItem from "./ListItem"

export default function ShoppingList({ items }) {
    return (
        <ul>
            {items.map((i) =>
                <ListItem obj={i} key={i.id}/>)}  
        </ul>
    )
}