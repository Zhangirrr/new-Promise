
function drawComponents(){
    let data = JSON.parse(localStorage.getItem("centers"));
    for(let center of data){
            document.querySelector("#ul").innerHTML += `<li style ="border: 0.5px solid black"> Имя: ${center.name}<br> Адрес: ${center.address.street}<br> Компания: "${center.company.name}"<br></li>`
    }
}

async function loadData(){
    let response = await fetch(USERS_URL);
    let body = await response.json();
    localStorage.setItem("centers", JSON.stringify(body));
}

loadData().then(() => {
    drawComponents();
});