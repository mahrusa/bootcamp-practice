import Property from './Property';

export default function PropList({prps}){
    return (
        <div style={{display:"flex"}}> 
            {prps.map((p) =>
                <Property  key={p.id} {...p}/>)}  
        </div>
    )
}