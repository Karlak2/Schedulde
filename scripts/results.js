var sched=document.getElementsByClassName("schedbutton")[0];
sched.addEventListener("click",function(event){
    event.preventDefault;
    var table=document.getElementsByClassName("table")[0];
    var type=document.getElementById("champ-type").value;
    var nteam=table.rows.length;
    nteam=nteam-1;
    if(type=="Round robin"){
        var numberTables=1;
    } else if(type=="Partial round robin") {
        var numberTables=1;
    } else if(type=="Main table") {
        
    } else {
        for(i=3;i<=7;i++){
            var text="Group round ";
            var ngroup=nteam/i;
            var text1 = text+ngroup+" x "+i;
            if(type==text1){    
                var numberTables=ngroup;
                break;
            }
        }
    }
    for(var y=1;y<=numberTables;y++){
        generateTables(nteam,numberTables,y);
    }
    for(j=1;j<=nteam;j++){
        var v1="resLose"+j;
        var v2="resPts"+j;
        var v3="resWin"+j;
        var v4="resDraw"+j;
        document.getElementById(v1).innerHTML=0;
        document.getElementById(v2).innerHTML=0;
        document.getElementById(v3).innerHTML=0;
        document.getElementById(v4).innerHTML=0;
   }
})



function generateTables(nteam,numberTables,i){
    var teams=nteam/numberTables;
    var res=document.getElementsByClassName("result")[0];
    var ndiv=document.createElement("div");
    var group=document.createAttribute("class");
    group.value="resgroup Group"+i;
    ndiv.setAttributeNode(group);
    res.appendChild(ndiv);
    var ngroup="Group"+i;
    var nextTab=document.getElementsByClassName(ngroup)[0];
    var roundTable=document.createElement("table");
    var tableAtt=document.createAttribute("class");
    tableAtt.value="table is-striped tabsched tableGroup"+i;
    roundTable.setAttributeNode(tableAtt);
    nextTab.appendChild(roundTable);
    var tabnum="tableGroup"+i;
    var tabx=document.getElementsByClassName(tabnum)[0];
    var nextTr=document.createElement("tr");
    var trAtt=document.createAttribute("class");
    trAtt.value="tabcolor2 group-head"+i;
    nextTr.setAttributeNode(trAtt);
    tabx.appendChild(nextTr);
    var headnum="group-head"+i;
    var nextTd=document.getElementsByClassName(headnum)[0];
    var headTd=document.createElement("td");
    headTd.setAttribute("colspan","6");
    var t=document.createTextNode("Group"+i);
    headTd.appendChild(t);
    nextTd.appendChild(headTd);
    var nextTr2=document.createElement("tr");
    var trAtt2=document.createAttribute("class");
    trAtt2.value="tabcolor group-head-a"+i;
    nextTr2.setAttributeNode(trAtt2);
    tabx.appendChild(nextTr2);
    var headnum2="group-head-a"+i;
    var row=document.getElementsByClassName(headnum2)[0];
    var cell0=row.insertCell(0);
    var cell1=row.insertCell(1);
    var cell2=row.insertCell(2);
    var cell3=row.insertCell(3);
    var cell4=row.insertCell(4);
    var cell5=row.insertCell(5);
    var t1=document.createTextNode("Number");
    cell0.appendChild(t1);
    var t2=document.createTextNode("Team");
    cell1.appendChild(t2);
    var t3=document.createTextNode("Win");
    cell2.appendChild(t3);
    var t4=document.createTextNode("Lose");
    cell3.appendChild(t4);
    var t5=document.createTextNode("Draw");
    cell4.appendChild(t5);
    var t6=document.createTextNode("Pts.");
    cell5.appendChild(t6);
    console.log(tabx,teams,i);
    for(j=1;j<=teams;j++){
        addRows(tabx,teams,j,i);
    }
}


function addRows(tabx,teams,j,i){
    var row=tabx.insertRow(-1);
    var rowId=(i-1)*teams+j;
    row.setAttribute("id","teamRes"+rowId);
    var cell0=row.insertCell(0);
    var cell1=row.insertCell(1);
    var cell2=row.insertCell(2);
    var cell3=row.insertCell(3);
    var cell4=row.insertCell(4);
    var cell5=row.insertCell(5);
    var t1=document.createElement("span");
    t1.setAttribute("id","resNumber"+rowId);
    cell0.appendChild(t1);
    var t2=document.createElement("span");
    t2.setAttribute("id","resTeam"+rowId);
    cell1.appendChild(t2);
    var t3=document.createElement("span");
    t3.setAttribute("id","resWin"+rowId);
    cell2.appendChild(t3);
    var t4=document.createElement("span");
    t4.setAttribute("id","resLose"+rowId);
    cell3.appendChild(t4);
    var t5=document.createElement("span");
    t5.setAttribute("id","resDraw"+rowId);
    cell4.appendChild(t5);
    var t6=document.createElement("span");
    t6.setAttribute("id","resPts"+rowId);
    cell5.appendChild(t6);

}