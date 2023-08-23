//React Vanilla
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

//React Jsx mush have "babel" <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
const header = <h1>Banana</h1>;//Jsx React element 

//UserProfile
const fullName = "John Doe";
const hobby ="Eat Banana";
const isMarry = false;//Jsx โชว์ ค่า bool ไม่ได้
const favFruits = ["Banana","Melon","PC","Prayut"];
const favFruitsList = favFruits.map((e)=><li>{e}</li>);
//Jsx โชว์ Obj เหมือน Array ไม่ได้ ใช้ได้แต่.
const pets=
{
    dog1:"Mocha",
    dog2:"Bento",
    dog3:"Moguu",
}
function RndNumber()
{
    return Math.floor(1+Math.random()*10);
}

const styleObject={
    color:"red",
    textAlign:"center",
}
const userProfile =(
    <div>
        <input/>
        <input></input>
        <h1 className ="header">FullName :{fullName}</h1>
        <h4 style={{color:"salmon",textAlign:"center"}}> age:{5*4} </h4>{/*/set Style*/}
        <h3 style={{textAlign:"center"}} >{hobby}</h3>
        <h3>Married :{isMarry?"true":"false"}</h3>
        <p>DOG:{pets.dog3}</p>
        <ul>{favFruitsList}</ul>{/*add li to child*/}

        <p style={styleObject}>RandomNumber = {RndNumber()}</p>

        <ul>{ favFruits.map((e)=><li>{e}</li>) }</ul>{/*//add li to child in jsx*/}



    </div>
);

const frgment =(
    <>
        <input/>
        <input></input>
        <h1 className ="header">FullName :{fullName}</h1>
        <h4 style={{color:"salmon",textAlign:"center"}}> age:{5*4} </h4>
        <h3 style={{textAlign:"center"}} >{hobby}</h3>
        <h3>Married :{isMarry?"true":"false"}</h3>
        <p>DOG:{pets.dog3}</p>
        <ul>{favFruitsList}</ul>
        <p>RandomNumber = {RndNumber()}</p>
    </>
);
root.render(userProfile);

