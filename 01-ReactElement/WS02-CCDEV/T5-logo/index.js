// #1 React : CreateElement

// #2 ReactDOM : createRoot

// #3 ReactDOM : TakeOver for Render Task

/*<div class="logo">
    <h2>CodeCamp</h2>
</div>*/

const rootDom = document.getElementById("root");
const rootVD = ReactDOM.createRoot(rootDom);

const h2 = React.createElement("h2",null,"CodeCamp");
const div = React.createElement("div",{className:"logo"},h2);

rootVD.render(div);