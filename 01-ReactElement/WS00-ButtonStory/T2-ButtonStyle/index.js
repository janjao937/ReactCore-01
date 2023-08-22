// #1 React : CreateElement
const btn = React.createElement("button",{className:"btn"},"ButtonName");
// #2 ReactDOM : createRoot
const rootDom = document.getElementById("root");
const rootVD = ReactDOM.createRoot(rootDom);
// #3 ReactDOM : TakeOver for Render Task
rootVD.render(btn);

