


const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");

 
function addTask()
{
      if(inputBox.value === " " ){
        alert("you must write somthing");
      }
      else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

      }

}

