/*```html
<h1 class="main-heading">
    Welcome to <span>Codecamp.</span>
    <br />
    Develop anything.
</h1>
```*/

const spanE = React.createElement("span",null," Codecamp");
const btE = React.createElement("br",null,null);

const head = React.createElement("h1",{className:"main-heading"},"Welcome to",spanE,btE,"Develop anything");

const root = document.getElementById("root");
const rootVD = ReactDOM.createRoot(root);

rootVD.render(head);