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
        return;
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


var matchlist=document.getElementsByClassName("matchlist")[0];

matchlist.addEventListener("click",function(event){
    var type=document.getElementById("champ-type").value;
    if(type!=="Main table"){
    event.preventDefault;
    var table=document.getElementsByClassName("table")[0];
    var nteam=table.rows.length;
    nteam=nteam-1;
    var nmatch=nteam*(nteam-1)/2;
    if(event.target.nodeName == "BUTTON"){
        var buttId=event.target.id;
        for(y=1;y<=nmatch;y++){
            var idOfButton="matchButton"+y;
            if(idOfButton==buttId){
                var backButton="deleteButton"+y;
                var r=confirm("Are you sure?");
                if(r==true){
                    document.getElementById(buttId).classList.add("hidden");
                    document.getElementById(backButton).classList.remove("hidden");
                } else {
                    break;
                }
                var locTeam1="matchteam"+((y-1)*2+1);
                var locPoint1="teamid"+((y-1)*2+1);
                var locTeam2="matchteam"+((y-1)*2+2);
                var locPoint2="teamid"+((y-1)*2+2);
                var team1=document.getElementById(locTeam1).innerText;
                var team2=document.getElementById(locTeam2).innerText;
                var point1=document.getElementById(locPoint1).value;
                var point2=document.getElementById(locPoint2).value;
                for(k=1;k<=nteam;k++){
                    var checkteam=document.getElementById("resTeam"+k).innerText;
                    if(checkteam==team1){
                        var team1Id=k;
                    }
                    if(checkteam==team2){
                        var team2Id=k;
                    }
                }
                if(point1 > point2){
                    var nwin=document.getElementById("resWin"+team1Id).innerHTML;
                    var pts1=document.getElementById("resPts"+team1Id).innerHTML
                    pts1=Number(pts1);
                    var pts2=document.getElementById("resPts"+team2Id).innerHTML;
                    pts2=Number(pts2);
                    nwin=Number(nwin);
                    nwin=nwin+1;
                    document.getElementById("resWin"+team1Id).innerHTML=nwin;
                    var dif=point1-point2;
                    pts1=pts1+dif;
                    pts2=pts2-dif;
                    document.getElementById("resPts"+team1Id).innerHTML=pts1;
                    document.getElementById("resPts"+team2Id).innerHTML=pts2;

                } else if(point1 < point2){
                    var nwin=document.getElementById("resWin"+team2Id).innerHTML;
                    var pts1=document.getElementById("resPts"+team1Id).innerHTML
                    pts1=Number(pts1);
                    var pts2=document.getElementById("resPts"+team2Id).innerHTML;
                    pts2=Number(pts2);
                    nwin=Number(nwin);
                    nwin=nwin+1;
                    document.getElementById("resWin"+team2Id).innerHTML=nwin;                   
                    var dif=point2-point1;
                    pts1=pts1-dif;
                    pts2=pts2+dif;
                    document.getElementById("resPts"+team1Id).innerHTML=pts1;
                    document.getElementById("resPts"+team2Id).innerHTML=pts2;

                } else {
                    var ndraw1=document.getElementById("resDraw"+team1Id).innerHTML;
                    ndraw1=Number(ndraw1);
                    ndraw1=ndraw1+1;
                    var ndraw2=document.getElementById("resDraw"+team2Id).innerHTML;
                    ndraw2=Number(ndraw2);
                    ndraw2=ndraw2+1;
                    document.getElementById("resDraw"+team1Id).innerHTML=ndraw1;
                    document.getElementById("resDraw"+team2Id).innerHTML=ndraw2;
                }
                break;
            }
        }
        for(j=1;j<=nmatch;j++){
            idOfButton2="deleteButton"+j;
            if(idOfButton2==buttId){
                var resButton="matchButton"+j;
                var r=confirm("Are you sure?");
                if(r==true){
                    document.getElementById(idOfButton2).classList.add("hidden");
                    document.getElementById(resButton).classList.remove("hidden");
                } else {
                    break;
                }
                var locTeam1="matchteam"+((j-1)*2+1);
                var locPoint1="teamid"+((j-1)*2+1);
                var locTeam2="matchteam"+((j-1)*2+2);
                var locPoint2="teamid"+((j-1)*2+2);
                var team1=document.getElementById(locTeam1).innerText;
                var team2=document.getElementById(locTeam2).innerText;
                var point1=document.getElementById(locPoint1).value;
                var point2=document.getElementById(locPoint2).value;
                for(k=1;k<=nteam;k++){
                    var checkteam=document.getElementById("resTeam"+k).innerText;
                    if(checkteam==team1){
                        var team1Id=k;
                    }
                    if(checkteam==team2){
                        var team2Id=k;
                    }
                }
                if(point1 > point2){
                    var nwin=document.getElementById("resWin"+team1Id).innerHTML;
                    var pts1=document.getElementById("resPts"+team1Id).innerHTML
                    pts1=Number(pts1);
                    var pts2=document.getElementById("resPts"+team2Id).innerHTML;
                    pts2=Number(pts2);
                    nwin=Number(nwin);
                    nwin=nwin-1;
                    document.getElementById("resWin"+team1Id).innerHTML=nwin;
                    var dif=point1-point2;
                    pts1=pts1-dif;
                    pts2=pts2+dif;
                    document.getElementById("resPts"+team1Id).innerHTML=pts1;
                    document.getElementById("resPts"+team2Id).innerHTML=pts2;

                } else if(point1 < point2){
                    var nwin=document.getElementById("resWin"+team2Id).innerHTML;
                    var pts1=document.getElementById("resPts"+team1Id).innerHTML
                    pts1=Number(pts1);
                    var pts2=document.getElementById("resPts"+team2Id).innerHTML;
                    pts2=Number(pts2);
                    nwin=Number(nwin);
                    nwin=nwin-1;
                    document.getElementById("resWin"+team2Id).innerHTML=nwin;                   
                    var dif=point2-point1;
                    pts1=pts1+dif;
                    pts2=pts2-dif;
                    document.getElementById("resPts"+team1Id).innerHTML=pts1;
                    document.getElementById("resPts"+team2Id).innerHTML=pts2;

                } else {
                    var ndraw1=document.getElementById("resDraw"+team1Id).innerHTML;
                    ndraw1=Number(ndraw1);
                    ndraw1=ndraw1-1;
                    var ndraw2=document.getElementById("resDraw"+team2Id).innerHTML;
                    ndraw2=Number(ndraw2);
                    ndraw2=ndraw2-1;
                    document.getElementById("resDraw"+team1Id).innerHTML=ndraw1;
                    document.getElementById("resDraw"+team2Id).innerHTML=ndraw2;
                }
                break;
            }
        }
        var ngroup=$('.result').children().length;
        var teamInOne=nteam/ngroup;

    }
}
});    
matchlist.addEventListener("click",function(){
    var type=document.getElementById("champ-type").value;
    var table=document.getElementsByClassName("table")[0];
    var nteam=table.rows.length;
    nteam-=1;
    if(type=="Main table"){
        if(event.target.nodeName=="INPUT"){
            var myid=event.target.id;
            console.log(myid);
            var calcid="count";
            for(i=1;i<=nteam*2-1;i++){
                if(calcid+i==myid){
                    var cTar=i;
                    break;
                }
            }
            var mTar=Math.floor((cTar-1)/2)+1;
            console.log(mTar);
            var ford=logarithm(2,nteam);
            var nmatch=0;
            var vec=[];
            vec.push(nmatch);
            for(i=ford;i>=1;i--){
                vec.push(vec[ford-i]+2**i);
            }
            for(j=1;j<=ford;j++){
                if((cTar>vec[j-1])&&(cTar<=vec[j])){
                    var fTar=j;
                    break;
                }
            }
            console.log(cTar,mTar,fTar);
            var firstId="count"+(mTar*2-1);
            var secondId="count"+(mTar*2);
            var firstRes=document.getElementById(firstId).value;
            var secondRes=document.getElementById(secondId).value;
            if(firstRes>secondRes){
                var winner=document.getElementById("mainteam"+(mTar*2-1)).innerHTML;
                document.getElementById("mainteam"+(mTar+nteam)).innerHTML=winner;
            } else if(firstRes<secondRes){
                var winner=document.getElementById("mainteam"+(mTar*2)).innerHTML;
                document.getElementById("mainteam"+(mTar+nteam)).innerHTML=winner;               
            } else {
                return;
            }
        }
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
    var t1=document.createElement("p");
    t1.setAttribute("id","resNumber"+rowId);
    cell0.appendChild(t1);
    var t2=document.createElement("p");
    t2.setAttribute("id","resTeam"+rowId);
    cell1.appendChild(t2);
    var t3=document.createElement("p");
    t3.setAttribute("id","resWin"+rowId);
    cell2.appendChild(t3);
    var t4=document.createElement("p");
    t4.setAttribute("id","resLose"+rowId);
    cell3.appendChild(t4);
    var t5=document.createElement("p");
    t5.setAttribute("id","resDraw"+rowId);
    cell4.appendChild(t5);
    var t6=document.createElement("p");
    t6.setAttribute("id","resPts"+rowId);
    cell5.appendChild(t6);

}
