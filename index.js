


const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");

 
function addTask()
{
      if(inputBox.value === "" ){
        alert("you must write somthing");
      }
      else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
      

      }
      inputBox.value = "";
      saveData();

}

listContainer.addEventListener("click", function (e) 
{
  if(e.target.tagName === "LI")
  {
    e.target.classList.toggle("checked");

  }
else if(e.target.tagName === "SPAN")
  {
    e.target.parentElement.remove();
  }
  

  
}, false);


function saveData(){
  localStorage.setItem("data",listContainer.innerHTML);
}

function showtask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showtask();