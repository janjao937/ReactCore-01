// #1 React : JSX

// #2 ReactDOM : createRoot

// #3 ReactDOM : TakeOver for Render Task
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
const CurrentYear = 2023;
let fullName = "Banana";
let birthYear= 1900;

const userProfile=(
    <>
    <h1>Name :{fullName}</h1>
    <p>Age :{CurrentYear-birthYear}</p>
    </>
)
// root.render(
//     <>
//         <h1>FullName</h1>
//         <p>Age</p>
//     </>
// );

root.render(userProfile)