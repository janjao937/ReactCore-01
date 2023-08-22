/*<ul class="nav_menu_list">
    <li class="nav_menu_item">
        <a href="#" class="nav_menu_link">account</a>
    </li>
</ul>

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
*/

const allLi = [];
const insiteLi=["account","abount","service","contact"]
//const li = React.createElement("li",{className:"nav_menu_link"},"account");

for(let i = 0;i<=insiteLi.length-1;i++)
{
    allLi[i] = React.createElement("li",{className:"nav_menu_item",herf:"#"},React.createElement("a",{className:"nav_menu_link",herf:"#"},[insiteLi[i]]));
}

const rootDom = document.getElementById("root");
const rootVD = ReactDOM.createRoot(rootDom);

const ul = React.createElement("ul",{className:"nav_menu_list"}, ...allLi);
rootVD.render(ul);