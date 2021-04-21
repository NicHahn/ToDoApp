var id = 0;

function addToDo() {
    var task = document.getElementById("todofield");
    var ul = document.getElementById("itemlist");
    ul.innerHTML += `
                        <li class="mdl-list__item" id="${id}" >
                            <span class="mdl-list__item-primary-content">
                                <i class="material-icons md-48 mdl-list__item-avatar label">label</i>
                                ${task.value}
                            </span>
                            <input type="checkbox" id="list-checkbox-1" class="checkbox" />
                            <button class="b-delete" onclick="deleteTask(${id})">
                                <i class="material-icons">delete</i>
                            </button>
                        </li>`;
    task.value = null;
    id++;
}

function deleteTask(id){
    var li = document.getElementById(id);
    li.parentNode.removeChild(li);
}

mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log("Offset: " + document.documentElement.scrollTop);
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



// When the user clicks on the button, scroll to the top of the document
function toTheTop() {
    console.log("Top");
    window.scrollTo(0,0);
}

