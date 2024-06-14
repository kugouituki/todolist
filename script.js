const clickAdd = () => {
    console.log("追加が押されました");

    const inputText = document.getElementById("inputText").value;
    //console.log(inputText);

document.getElementById("inputText").value = "";


  createeTodo(inputText);


};

const createeTodo = (todo) => {

  if(todo == ""){
    alert("値が空です");
  }else{

  

  const li = document.createElement("li");
  li.innerText = todo;
  //console.log(li);

const completeButton = document.createElement("button");
completeButton.innerText = "完了";


completeButton.addEventListener("click", () => {
    console.log("完了が押された");

    const moveTarget = completeButton.closest("li");
    console.log(moveTarget);

    completeButton.remove();

    document.getElementById("completeList").appendChild(moveTarget);

});




document.getElementById("incompleteList").appendChild(li).appendChild(completeButton);

  }
};


document.getElementById("addButton").addEventListener("click", clickAdd);