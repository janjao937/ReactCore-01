// #1 React : CreateElement
const btnElement = React.createElement("button",null,"ButtonName");
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const vDRoot = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
vDRoot.render(btnElement);

