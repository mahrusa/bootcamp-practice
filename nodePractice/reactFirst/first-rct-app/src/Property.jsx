export default function Property({name, rating, price}){
    return (
        <div>
            <h2>{name}</h2>
            <h3>${price}</h3>
            <h4>{rating} stars</h4>
        </div>
    )
}