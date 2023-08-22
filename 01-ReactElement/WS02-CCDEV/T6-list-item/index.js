// #1 React : CreateElement

// #2 ReactDOM : createRoot

// #3 ReactDOM : TakeOver for Render Task
/*<li class="nav_menu_item">
    <a href="#" class="nav_menu_link">account</a>
</li>*/

const linkText = React.createElement("a",{className:"nav_menu_link",href:"#"},"account");
const li = React.createElement("li",{className:"nav_menu_item"},linkText);

const rootDom = document.getElementById("root");
const rootVD = ReactDOM.createRoot(rootDom);

rootVD.render(li);