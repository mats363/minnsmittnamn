let root = document.getElementById("root");

let input = document.createElement("input");
let btn = document.createElement("button");
let print = document.createElement("div");

btn.innerHTML = "Click";
input.placeholder = "Ange ditt namn här";

root.append(btn, input, print);

function setName () {
    let name = input.value;
    localStorage.setItem("name", name);
}

function getName () {
    let fetchedName = localStorage.getItem("name")
    print.innerHTML = fetchedName;
}

function clearName () {
    let clearBtn = document.createElement("button");
    clearBtn.innerHTML = "Remove";
    clearBtn.addEventListener("click", function(){
        localStorage.clear();
        clearBtn.remove();
        print.innerHTML = "";
    });
    root.append(clearBtn);
    
}

btn.addEventListener("click", function(){
    setName();
    getName();
    clearName();

})


/*
let displayName = document.createElement("div");
root.append(displayName);
displayName.innerHTML(localStorage.getItem("name"));
*/