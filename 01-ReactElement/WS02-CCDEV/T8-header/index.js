/*```html
<header class="container header">
    <!-- ==== NAVBAR ==== -->
    <nav class="nav">
        <div class="logo">
            <h2>Devkit.</h2>
        </div>

        <div class="nav_menu" id="nav_menu">
            <ul class="nav_menu_list">
                <li class="nav_menu_item">
                    <a href="#" class="nav_menu_link">account</a>
                </li>
                <li class="nav_menu_item">
                    <a href="#" class="nav_menu_link">about</a>
                </li>
                <li class="nav_menu_item">
                    <a href="#" class="nav_menu_link">service</a>
                </li>
                <li class="nav_menu_item">
                    <a href="#" class="nav_menu_link">contact</a>
                </li>
            </ul>
        </div>
    </nav>
</header>
```
*/

const allLi = [];
const insiteLi=["account","abount","service","contact"]
//const li = React.createElement("li",{className:"nav_menu_link"},"account");

for(let i = 0;i<=insiteLi.length-1;i++)
{
    allLi[i] = React.createElement("li",{className:"nav_menu_item"},React.createElement("a",{className:"nav_menu_link",herf:"#"},[insiteLi[i]]));
}

const rootDom = document.getElementById("root");
const rootVD = ReactDOM.createRoot(rootDom);

const headText = React.createElement("h2",null,"Devkit");
const divLogo = React.createElement("div",{className:"logo"} ,headText);

const ul = React.createElement("ul",{className:"nav_menu_list"}, ...allLi);
const divMenu = React.createElement("div",{className:"nav_menu" ,id:"nav_menu"},ul);

const nav = React.createElement("nav",{className:"nav"},divLogo,divMenu)
const header = React.createElement("header",{className:"container header"},nav);

rootVD.render(header);