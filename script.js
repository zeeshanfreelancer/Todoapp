const inputbox = document.getElementById("input_box");
const listcontainer = document.getElementById("list-container");


function addtask(){
    if(inputbox.value === ""){
        alert("you must write something")
        
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        savedata();

    }

    inputbox.value = "";
    savedata();

    
}


function savedata(){

    localStorage.setItem("data",listcontainer.innerHTML);
}


function showdata(){

    listcontainer.innerHTML = localStorage.getItem("data");

}

showdata();