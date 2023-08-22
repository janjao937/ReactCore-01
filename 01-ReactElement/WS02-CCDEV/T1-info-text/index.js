// #1 React : CreateElement
/*<p class="info-text">
    Build a beautiful, modern website with flexible components built from scratch.
</p>*/

const head = React.createElement("p",{className:"info-text"},"build a beautiful, modern website with flexible components built from scratch.");
// #2 ReactDOM : createRoot
const rootDom = document.getElementById("root");
// #3 ReactDOM : TakeOver for Render Task
const rootVD = ReactDOM.createRoot(rootDom);
rootVD.render(head);
