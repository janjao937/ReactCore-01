/*
const rootDoc = document.querySelector("#root");
//console.log("Banana Hello React");

const btnVanilaDom = document.createElement("button");
btnVanilaDom.innerHTML = "cart";
btnVanilaDom.classList.add("redBtn");//add css

//render
rootDoc.appendChild(btnVanilaDom);
*/
/*
//Count key in ReactElement
let countReactElemetObject = 0
for(let key in btnReactElement)
{
    countReactElemetObject++;
}
let countRealDomElementObject  = 0;
for(let key in btnVanilaDom)
{
    countRealDomElementObject++
}
console.log(countRealDomElementObject)//React Object Element = 7 key|RealDom = 338key
*/
//console.dir(btnReactElement)
//console.log(ReactDOM)
// console.log(React);


//React  => create Element

//#CreateElement
const btnReactElement = React.createElement("button");

const testReactElement = React.createElement("button",{className:"redBtn"},"Cart"); 
/* <button>cart</button> */

//#React Dom => Render to browser

const domRoot = document.querySelector("#root");
const root  = ReactDOM.createRoot(domRoot);//set to dom root
root.render(testReactElement);//render on browser