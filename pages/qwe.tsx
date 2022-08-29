import {Button} from "../components/button/button";

const HelloWord = () => {
    const click = ()=>{
       console.log('I am clicked')
    }
  return(
      <div>Hello Word <Button name='Ryna' onClick={click}/></div>
  )
}
 export default HelloWord