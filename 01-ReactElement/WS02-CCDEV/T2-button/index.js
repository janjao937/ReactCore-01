// #1 React : CreateElement

// #2 ReactDOM : createRoot

// #3 ReactDOM : TakeOver for Render Task
/*```html
<div class="btn_wrapper">
    <button class="btn view_more_btn">view all pages</button>
    <button class="btn documentation_btn">documentation</button>
</div>
```*/

const btn1 = React.createElement("button",{className:"btn view_more_btn"},"btn1");
const btn2 = React.createElement("button",{className:"btn documentation_btn"},"btn2");

const rootDoom = document.getElementById("root");
const rootVD = ReactDOM.createRoot(rootDoom);

const div = React.createElement("div",{className:"btn_wrapper"},btn1,btn2);

rootVD.render(div);
