import Card from './assets/components/card'
import './App.css'

function App() {
const person=[{name:"Vite",src:"../public/vite.svg",width:200, height:200},
  {name:"Pen",src:"pen-svgrepo-com.svg",width:200, height:200}

];
  return (
    <>
  
     <Card props={person[1]} />
     <Card props={person[0]} />
   
    </>
  )
}

export default App
