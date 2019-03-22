var x;


function add(){
    var table=document.getElementsByClassName("table")[0];
    var row=table.insertRow(-1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var x=row.rowIndex;
    cell1.innerHTML=x;
    var input=document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("placeholder","Team"+x);
    input.setAttribute("class","input");
    input.setAttribute("id","team"+x);
    cell2.appendChild(input);
    return x;
}

function modify(){
    var add1=document.getElementsByClassName("add")[0];
    var modify=document.getElementsByClassName("modify")[0];
    var close=document.getElementsByClassName("close")[0];
    var exchange=document.getElementsByClassName("ex1")[0];
    var change=document.getElementsByClassName("change")[0];
    var cancel=document.getElementsByClassName("cancel")[0];
    add1.classList.add("hidden");
    modify.classList.add("hidden");
    close.classList.add("hidden");
    change.classList.remove("hidden");
    exchange.classList.remove("hidden");
    cancel.classList.remove("hidden");
}

function change(){
    var add1=document.getElementsByClassName("add")[0];
    var modify=document.getElementsByClassName("modify")[0];
    var close=document.getElementsByClassName("close")[0];
    var exchange=document.getElementsByClassName("ex1")[0];
    var change=document.getElementsByClassName("change")[0];
    var cancel=document.getElementsByClassName("cancel")[0];
    var y=document.getElementById("exchange").value;
    var table=document.getElementsByClassName("table")[0];
    if(y<=table.rows.length && y>0){
        table.deleteRow(y);
        for(i = 1; i <= table.rows.length ; i++) {
            table.rows[i].cells[0].innerHTML=i;
            var z="team"+i;
            document.getElementsByTagName("input")[i-1].setAttribute("placeholder",z);         
            document.getElementsByTagName("input")[i-1].setAttribute("id",z);         
        }
    } else {
        cancel();
    }
}

function cancel(){
    var add1=document.getElementsByClassName("add")[0];
    var modify=document.getElementsByClassName("modify")[0];
    var close=document.getElementsByClassName("close")[0];
    var exchange=document.getElementsByClassName("ex1")[0];
    var change=document.getElementsByClassName("change")[0];
    var cancel=document.getElementsByClassName("cancel")[0];
    add1.classList.remove("hidden");
    modify.classList.remove("hidden");
    close.classList.remove("hidden");
    change.classList.add("hidden");
    exchange.classList.add("hidden"); 
    cancel.classList.add("hidden");  
}

function lock(){
    var add1=document.getElementsByClassName("add")[0];
    var modify=document.getElementsByClassName("modify")[0];
    var close=document.getElementsByClassName("close")[0];
    var confirm=document.getElementsByClassName("confirm")[0];
    var cancel2=document.getElementsByClassName("cancel2")[0];
    add1.classList.add("hidden");
    modify.classList.add("hidden");
    close.classList.add("hidden");
    confirm.classList.remove("hidden");
    cancel2.classList.remove("hidden");
}

function cancel2(){
    var confirm=document.getElementsByClassName("confirm")[0];
    var cancel2=document.getElementsByClassName("cancel2")[0];
    cancel();
    confirm.classList.add("hidden");
    cancel2.classList.add("hidden");
}