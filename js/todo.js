const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");

let toDos=[]; //toDos를 업데이트 해주기 위해 let으로 선언
const TODOS_KEY = "todos";

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id; //delete할 때 어떤 li인지 구분하기 위해.
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText="🗑";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    
    toDoList.appendChild(li);
     
}

function deleteToDo(event){
    const li = event.target.parentElement; //event.target.parentElement 를 사용하게 되면 같은 휴지통이라도 어떤 todo를 삭제하는지 알 수 있다.
    li.remove();
    toDos = toDos.filter((toDo)=>toDo.id!==parseInt(li.id));
    //li.id는 문자열이기 때문에 숫자로 바꿔줘야 함 => parseInt();
    saveToDos(); //이걸 반드시해야 localStorage에 반영됨. 
    
}


function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
    //JSON.stringify => 문자로 변경해줌.
    
}

function ToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    }//object로 만든 이유는 delete를 적용할 때 id를 통해 어떤 text를 지우고자 하는지 알수있기 때문
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
};

toDoForm.addEventListener("submit",ToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos){
    const parsedToDos = JSON.parse(savedToDos); //문자열을 배열로 변경
    toDos = parsedToDos; //새로고침해도 이전의 toDos를 복원해 주기 위해 toDos를 업데이트
    parsedToDos.forEach(paintToDo); //forEach는 array에 있는 각각의 item에 함수를 실행
}


