function add(){
    var table=document.getElementsByClassName("table")[0];
    var row=table.insertRow(-1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var x=row.rowIndex;
    cell1.innerHTML=x;
    var input=document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("placeholder","team"+x);
    input.setAttribute("class","input");
    input.setAttribute("id","team"+x);
    cell2.appendChild(input);
    var delButt=document.createElement("a");
    delButt.setAttribute("class","button is-danger delButton");
    delButt.setAttribute("id","delButton"+x);
    var text1=document.createTextNode("-");
    delButt.appendChild(text1);
    cell3.appendChild(delButt);
    return x;
}

var entry=document.getElementsByClassName("entry")[0];
entry.addEventListener("click",function(event){
    event.preventDefault;
    var buttId=event.target.id;
    if(event.target.nodeName == "A"){
        var buttId=event.target.id;
        var table=document.getElementsByClassName("table")[0];
        var x=table.rows.length;
        for(i=1;i<=x;i++){
            var rowId="delButton"+i;
            if(buttId==rowId){
                table.deleteRow(i);        
                for(j = i; j <= table.rows.length-1 ; j++) {
                    table.rows[j].cells[0].innerHTML=j;
                    var z="team"+j;
                    var z1="delButton"+j;
                    document.getElementsByTagName("input")[j-1].setAttribute("placeholder",z);         
                    document.getElementsByTagName("input")[j-1].setAttribute("id",z);
                    document.getElementsByClassName("delButton")[j-1].setAttribute("id",z1);
                }
            break;
            }
        }
    }
})

function change(){
    var y=document.getElementById("exchange").value;
    var table=document.getElementsByClassName("table")[0];
    if(y<=table.rows.length && y>0){
        table.deleteRow(y);
        for(i = 1; i <= table.rows.length ; i++) {
            table.rows[i].cells[0].innerHTML=i;
            var z="team"+i;
            document.getElementsByTagName("input")[i-1].setAttribute("placeholder",z);         
            document.getElementsByTagName("input")[i-1].setAttribute("id",z);
            document.getElementsByClassName()
        }
    } else {
        cancel();
    }
}

function cancel(){
    var add1=document.getElementsByClassName("add")[0];
    var close=document.getElementsByClassName("close")[0];
    add1.classList.remove("hidden");
    close.classList.remove("hidden");
}

function lock(){
    var add1=document.getElementsByClassName("add")[0];
    var close=document.getElementsByClassName("close")[0];
    var confirm=document.getElementsByClassName("confirm")[0];
    var cancel2=document.getElementsByClassName("cancel2")[0];
    add1.classList.add("hidden");
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