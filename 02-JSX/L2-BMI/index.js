let heigh = 1.75;
let weight = 70;

const calBMI = (w,h)=>w/h **2;

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);

root.render(<h3>{ calBMI(weight,heigh).toFixed(2) }</h3>) ;