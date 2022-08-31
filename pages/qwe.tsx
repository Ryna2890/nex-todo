import {ButtonEdit} from "../components/button.edit/button.edit";

const HelloWord = () => {
    const click = ()=>{
       console.log('I am clicked')
    }
  return(
      <div>Hello Word <ButtonEdit name={'Ryna'} state={true}/></div>
  )
}
 export default HelloWord