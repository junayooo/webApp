const clock = document.querySelector("#clock");
const date = document.querySelector("#date");

function today(){
    const today = new Date();
    const year = today.getFullYear();
    const month = JSON.stringify(today.getMonth()).padStart(2,"0")
    const day = JSON.stringify(today.getDate()).padStart(2,"0");
    const hour = JSON.stringify(today.getHours()).padStart(2,"0");
    const minute = JSON.stringify(today.getMinutes()).padStart(2,"0");
    const second = String(today.getSeconds()).padStart(2,"0");
    date.innerText =`${year}.${month}.${day}`; 
    clock.innerText = `${hour}:${minute}:${second}`; 
}
//JSON.string()은 숫자를 문자로 변경 (String으로 감싸도 됨)
//.padStart(2,"0") 두 글자가 아니라면 문자 앞을 0으로 채워라.(padStart는 문자에 사용)
today();
setInterval(today,1000);