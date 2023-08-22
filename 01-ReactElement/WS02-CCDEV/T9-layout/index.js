/*<section class="wrapper">
    <div class="container">
        <!-- grid-box -->
        <div class="grid-cols-2">
            <!-- left -->
            <div class="grid-item-1">
                <!-- TASK-3 :HEADING -->
                <!-- TASK-1 :INFO-->
                <!-- TASK-2 :BTN -->
            </div>

            <!-- right -->
            <div class="grid-item-2">
                <!-- TASK4:Hero-Image -->
            </div>
        </div>
    </div>
</section>*/

const divGridItem2 = React.createElement("div",{className:"grid-item-2"}, );
const divGridItem1 = React.createElement("div",{className:"grid-item-1"}, );
const divGridCol2= React.createElement("div",{className:"grid-cols-2"},divGridItem1,divGridItem2);
const divContainer = React.createElement("div",{className:"container"},divGridCol2);
const sectionEl = React.createElement("section",{className:"wrapper"},divContainer);

const rootDom = document.getElementById("root");
const rootVD = ReactDOM.createRoot(rootDom);

rootVD.render(sectionEl);