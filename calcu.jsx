function Calculator(){
    const [box,setBox]=React.useState({
      current : "0",
      total : "0",
      init : true,
      preOp : ""
    });
    function hanNum(value){
      let nw =  value;
      if(!box.init){
      nw = box.current + value;
      }
      setBox({current : nw , total : box.total, init :false,preOp:box.preOp});
    }
    function handOp(value){
      const total = doCal();
      setBox({current : total.toString(),total : total.toString(),init : true,preOp: value });
    }
    function cls(){
     setBox({ current : "0",
      total : "0",
      init : true,
      preOp : ""
     });
    }
    
    function doCal(){
      let ans = parseInt(box.total);
      
      switch (box.preOp){
        case "+":
          ans += parseInt(box.current);
          break;
           case "-":
          ans -= parseInt(box.current);
          break;
           case "*":
          ans *= parseInt(box.current);
          break;
           case "/":
          ans /= parseInt(box.current);
          break;
        default:
          ans = parseInt(box.current);
         
      }
      return ans;
    }
  return (
   
  <div className = "calculator">
    
    <div className = "box">{box.current}
      </div>
    <div>
    <CalB value="7" onClick ={hanNum}/> <CalB value="8"  onClick ={hanNum}/> <CalB value="9"  onClick ={hanNum}/> <CalB className = "op" value="/" onClick={handOp}/>
    </div>
     <div>
    <CalB value="4"  onClick ={hanNum}/> <CalB value="5"  onClick ={hanNum}/>  <CalB value="6"  onClick ={hanNum}/>  <CalB className = "op" value="*" onClick={handOp}/>
    </div>
     <div>
    <CalB value="1"  onClick ={hanNum}/> <CalB value="2"  onClick ={hanNum}/>  <CalB value="3"  onClick ={hanNum}/>  <CalB className = "op" value="-" onClick={handOp}/>
    </div>
     <div>
    <CalB value="C" onClick ={cls}/> <CalB value="0"  onClick ={hanNum}/>  <CalB value="="onClick={handOp}/>   
       <CalB className = "op" value="+"  onClick={handOp}/>
    </div>
    </div>
    
    
    ) 
    }
  function CalB(props){
    return (<button  className = {props.className} onClick={()=>props.onClick(props.value)}>{props.value}</button>)
  }