function add(){
    var table=document.getElementsByClassName("table")[0];
    var row=table.insertRow(-1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    cell1.innerHTML=row.rowIndex;
    var input=document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("value","Team"+row.rowIndex);
    input.setAttribute("class","input");
    input.setAttribute("id","team"+row.rowIndex);
    cell2.appendChild(input);
}

