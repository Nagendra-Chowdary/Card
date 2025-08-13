import Wrapper from "./wrapper"
import Image from "./image"

export default function Card({props}){
    
return(
    <Wrapper>
    <h1>{props.name}</h1>
    <Image props={props} />
    </Wrapper>
)
}