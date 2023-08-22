// #1 React : CreateElement
const btn = React.createElement("button",{className:"btn",role:"button" ,type:"submit",onClick:()=>alert("Success")},"ButtonName");

// #2 ReactDOM : createRoot
const rootDom = document.getElementById("root");

// #3 ReactDOM : TakeOver for Render Task
const rootVD = ReactDOM.createRoot(rootDom);
rootVD.render(btn);

/*
//TeacherCode
const props ={
    className:"btn",
    role:"button",
    type:"submit",
    onClick:()=>alert("Success"),
}

const TeacherBtn = React.createElement("button",props,"button Name");
const root = ReactDOM.createRoot(rootDom);
root.render(TeacherBtn);
*/