export default function Image({props}){
return(
    <img src={props.src} alt={props.name} width={props.width} height={props.height} />
)
}