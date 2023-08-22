// #1 React : CreateElement

// #2 ReactDOM : createRoot

// #3 ReactDOM : TakeOver for Render Task

/*<div class="team_img_wrapper">
    <img
        src="https://img.freepik.com/free-vector/team-business-people-putting-hands-up-together_74855-19906.jpg?w=1380&amp;t=st=1692544217~exp=1692544817~hmac=6253a9b25f1f86e30715b25c4b736446b802dc9bd3c4990c9ffa640f327f1f04"
        alt="team-photo"
    />
</div>*/
const imgProps={
    src:"https://img.freepik.com/free-vector/team-business-people-putting-hands-up-together_74855-19906.jpg?w=1380&amp;t=st=1692544217~exp=1692544817~hmac=6253a9b25f1f86e30715b25c4b736446b802dc9bd3c4990c9ffa640f327f1f04",
    alt:"team-photo"
}

const imgE = React.createElement("img",imgProps,null);
const divE = React.createElement("div",{className:"team_img_wrapper"},imgE);

const rootDom = document.getElementById("root");
const rootVD = ReactDOM.createRoot(rootDom);

rootVD.render(divE);