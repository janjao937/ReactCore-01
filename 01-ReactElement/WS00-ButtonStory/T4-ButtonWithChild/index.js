// #1 React : CreateElement
const span1 = React.createElement("span",null,"");
const span2 = React.createElement("span",null,"");
const span3 = React.createElement("span",null,"");
const span4 = React.createElement("span",null,"");
const span5 = React.createElement("span",null,"button");

const btn = React.createElement("button",null,span1,span2,span3,span4,span5);

// #2 ReactDOM : createRoot
const rootDom = document.getElementById("root");
const rootVD = ReactDOM.createRoot(rootDom);

// #3 ReactDOM : TakeOver for Render Task
rootVD.render(btn);
