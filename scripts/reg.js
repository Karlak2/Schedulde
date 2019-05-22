function add(){
    var table=items.entry;
    var row=table.insertRow(-1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    let x=row.rowIndex;
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

items.entry.addEventListener("click",function(event){
    var buttId=event.target.id;
    deleteButton(buttId);
    if(event.target.nodeName == "A"){
        var table=items.entry;
        let x=table.rows.length;
        for(let i=1; i <=x ; i++){
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

function lock(){
    $(items.add1).hide();
    $(items.close).hide();
    visibleElement(items.confirm);
    visibleElement(items.cancel2);
}

function cancel2(){    
    reOpt();
    $(items.selectTeam).hide();   
    $(items.confirm).hide();   
    $(items.cancel2).hide();   
    visibleElement(items.add1);
    visibleElement(items.close);
}