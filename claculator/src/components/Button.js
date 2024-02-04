import "./Button.module.css";
const Button = () =>{
    let button=['1','2','3','+','4','5','6','-','7','8','9','/','C','0','=','*']

  return(
          <div >
            {button.map(btn => <button key={btn}>{btn}</button>)}
           </div>
  );
}
export default Button;