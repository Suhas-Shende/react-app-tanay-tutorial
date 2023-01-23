import "./styles.css";
import {useState} from 'react'
const as="suhas"
const color="red";
let likecounter=0;
let message="change the mesaage";
const emojiWorld={
  "😀":"smiling",
  "😎":"cool",
  "🥱":"sleep",
  "🙄":"looking",
  "😭":"cry"
}

export default function App() {
const [initial,setCount]=useState(0);
const [initialuser,setuser]=useState("");
const [initialemoji,setEmoji]=useState("you dont have emoji");


const clicked=function(){
  console.log("clicked");
  setCount(likecounter++);
}
const username=(event)=>{
  setuser(event.target.value);
}
const emojishow=(event)=>{
     const letter=event.target.value;
     if(letter in emojiWorld){
     const valueemoji=emojiWorld[letter];
     setEmoji(valueemoji)
     }else{
       setEmoji("")
     }
}
const shopping=["hen","cock","rock","shelter","cake"];
function getcolor(index){
  if(index % 2===0){
    return "green"

  }return "grey"
}
const [listclicked,setView]=useState("");
function listclicking(item){
  if(item){
  const j="clicked "+item;
    setView(j);}
}
const emojiweknow=Object.keys(emojiWorld);

function emojiclicked(item){
       const t=emojiWorld[item];
       setEmoji(t);

       
     
}




  return (
    <div className="App">
      <h1 style={{color}}>Welcome {as}</h1>
      <p className="para"> You are alien</p>
      <p className="demo">Select the class</p>
      <h2>Start editing to see some magic happen!</h2>
      
      <button onClick={ clicked }>like</button>
      <h1>{initial}</h1>
      <h1>{message}</h1>
      <h1>{initialuser}</h1>
     
      <input  onChange={username} placeholder="type here string"/>
      <input  onChange={emojishow} placeholder="typeemoji here"/>
      <h1 style={{color:"pink"}}>{listclicked}</h1>
      <ul>
        {
          shopping.map((item,index)=> {
  
            return (<li key={item} style={{backgroundColor : getcolor(index)}} onClick={()=>listclicking(item)}>{item} </li>);
})
}

        
      </ul>
      <h1>Emoji we know;</h1>
      <h1>{initialemoji}</h1>
      <div>{
        emojiweknow.map(item=>{
          return ( <span style={{fontSize: "2rem", padding:"10px"}} onClick={()=>emojiclicked(item)}>{item}</span>);
        })
      }</div>
    </div>
  );
}
