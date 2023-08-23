
const domRoot  = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
/*

for = htmlFor
class = className
onclick = Onclick

*/
const formsData=(
    <>
        <lable htmlFor="username_id">Usenamer</lable>{/*for ใน label ซ้ำกับ keyword ซ้ำกับ forloop เลยใช้ htmlFor แทน*/}
        <input className="username" id="username_id" name="username" />
    </>
);

root.render(formsData);