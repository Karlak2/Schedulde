var butt=document.getElementsByClassName("confirm")[0];
butt.addEventListener("click",function(event){
    event.preventDefault;
    var table=document.getElementsByClassName("table")[0];
    var nteam=table.rows.length;
    nteam=nteam-1;
    var even=false;
    if(nteam % 2 == 0){
        even=true;
    }
    var group=false;
    var maintable=false;
    var is3=false;
    var is4=false;
    var is5=false;
    var is6=false;
    var is7=false;
    if(nteam % 3  === 0){
        group=true;
        is3=true;
    }
    if(nteam % 4 ===0){
        group=true;
        is4=true;
    }
    if(nteam % 5 ===0){
        group=true;
        is5=true;
    }
    if(nteam % 6 ===0){
        group=true;
        is6=true;
    }
    if(nteam % 7 ===0){
        group=true;
        is7=true;
    }
    for(i=1;i<=10;i++){
        var x=Math.pow(2,i);
        if(nteam===x){
            maintable=true;
        }
    }
    var champTypeList = document.getElementById("champ-type");
    var text1="Round robin";
    var text2="Partial round robin";
    var text4="Main table";
    addOption(champTypeList,text1);
    addOption(champTypeList,text2);
    if(group){
        if(is3){
            var text3="Group round ";
            var z=nteam/3;
            if(z>1){
                text3=text3+z+" x 3";
                addOption(champTypeList,text3);
            }
        }
        if(is4){
            var text3="Group round ";
            var z=nteam/4;
            if(z>1){
                text3=text3+z+" x 4";
                addOption(champTypeList,text3);
            }
        }
        if(is5){
            var text3="Group round ";
            var z=nteam/5;
            if(z>1){
                text3=text3+z+" x 5";
                addOption(champTypeList,text3);
            }
        }
        if(is6){
            var text3="Group round ";
            var z=nteam/6;
            if(z>1){
                text3=text3+z+" x 6";
                addOption(champTypeList,text3);
            }
        }
        if(is7){
            var text3="Group round ";
            var z=nteam/7;
            if(z>1){
                text3=text3+z+" x 7";
                addOption(champTypeList,text3);
            }
        }
    }
    var roundNum=document.getElementById("round-num");
    if(even){
        for(i=2;i<=nteam;i++){
            addOption(roundNum,i-1);
        }
    } else {
        for(i=2;i<=nteam;i=i+2){
            addOption(roundNum,i);
        } 
    }
    if(maintable){
        addOption(champTypeList,text4);
    }
});

function addOption(location,ntext){
    var option1=document.createElement("option");
    var text=document.createTextNode(ntext);
    option1.appendChild(text);
    location.add(option1);
}


function champtype(){
    var type=document.getElementById("champ-type").value;
    var table=document.getElementsByClassName("table")[0];
    var nteam=table.rows.length;
    nteam=nteam-1;
    var even=false;
    var teamlist= [];
    if(nteam % 2 == 0){
        even=true;
    }
    var nj=1;
    var nk=1;
    if(type=="Round robin"){
        for(i=0;i<=nteam-1;i++){
            teamlist.push(i+1);
        }
        var roundz=1;
        if(even){
            var nford=nteam-1;
            robin(nteam,nford,even,teamlist,nj,nk,roundz);
        } else {
            teamlist.push(100);
            var nford=nteam;
            robin(nteam,nford,even,teamlist,nj,nk,roundz);
        }
    } else if(type=="Partial round robin") {
        var nford=document.getElementById("round-num").value;
        partial(nteam,nford,even);
    } else if(type=="Main table") {
        maintable();
    } else {
        for(i=3;i<=7;i++){
            var text="Group round ";
            var ngroup=nteam/i;
            var text1 = text+ngroup+" x "+i;
            if(type==text1){    
                for(i=1;i<=nteam;i++){
                teamlist.push(i);
            }
                group(nteam,ngroup,teamlist,even,nj,nk);
                break;
            }
        }
    }
    var sched=document.getElementsByClassName("schedbutton")[0];
    sched.classList.add("hidden");
}

function maintable(){
}

function group(nteam,ngroup,teamlist,even,nj,nk){
    var nteam2=nteam/ngroup;
    var groups=[];
    for(i=1;i<=ngroup;i++){
        groups[i-1]=[];
        for(j=1;j<=nteam2;j++){
            var x=ik(nteam);
            groups[i-1][j-1]=teamlist[x-1];
            nteam=nteam-1;
            teamlist.splice(x-1,1);
        }
    }
    console.log(groups);
/*    for(i=1;i<=ngroup;i++){
        var teams=[];
        for(j=1;j<=nteam2;j++){
            teams[j-1]=groups[i-1][j-1];
        }
        robin(nteam2,nteam2-1,even,teams,nj,nk);
        console.log(teams,nj,nk);
    }*/
    var i=1;
    var roundz=1;
    do { 
        var nmatch=nteam2*(nteam2-1);
        nk=(roundz-1)*nmatch+1;
        var teams=[];
        for(j=1;j<=nteam2;j++){
            teams[j-1]=groups[i-1][j-1];
        }
        if(nteam2 % 2 == 0){
            even=true;
            robin(nteam2,nteam2-1,even,teams,nj,nk,roundz);
        } else {
            even=false;
            teams.push(100);
            console.log(teams);
            robin(nteam2,nteam2,even,teams,nj,nk,roundz);
        }    
        i=i+1;
        roundz=roundz+1;
    } while(i<ngroup+1);
}

function partial(nteam){
    var ntlist = [];
    var ntlist2= [];
    var nmatch=nteam*(nteam-1)/2;
    if(even){
        var ind = [];
        for(i=0;i<=nford-1;i++){
            ind[i]= [];
            for(j=0;j<=nford-1;j++){
                ind[i][j]=i+j+1;
                if(ind[i][j] > nford){
                    ind[i][j]=ind[i][j]-nford;
                }
            }
        }
        var nt2=0;
        if(nford < nteam-1){
            for(i=1;i<=nford;i++){
                var nt=0;
                for(j=0;j<=nford-1;j++){
                    for(k=0;k<=nford-1;k++){
                        if(ind[j][k] === ivec[i]){
                            var x=(i-1)*(nteam-1)+nt;
                            if(j === k){
                                ntlist[x] = [];
                                ntlist[x][0]= (j+1);
                                ntlist[x][1] = nteam;
                                nt=nt+1;
                            } else {
                                ntlist[x] = [];
                                ntlist[x][0]= (j+1);
                                ntlist[x][1]= (k+1);
                                nt=nt+1;                            
                            }
                        }
                    }
                }            
            }           
        }
    }
}


function robin(nteam,nford,even,teamlist,nj,nk,roundz){
    var ntlist = [];
    var ntlist2= [];
    var nmatch=nteam*(nteam-1)/2;
    if(even){
    // generating of schedulde matrix.
        var ind = [];
        for(i=0;i<=nford-1;i++){
            ind[i]= [];
            for(j=0;j<=nford-1;j++){
                ind[i][j]=i+j+1;
                if(ind[i][j] > nford){
                    ind[i][j]=ind[i][j]-nford;
                }
            }
        }
        var nt2=0;
// generating matchlist, x is the length of full matchlist.
            for(i=1;i<=nford;i++){
                var nt=0;
                for(j=0;j<=nford-1;j++){
                    for(k=0;k<=nford-1;k++){
                        if(ind[j][k] === i){

                            var x=(i-1)*(nteam-1)+nt;
                            if(j === k){
                                ntlist[x] = [];
                                ntlist[x][0]= teamlist[j];
                                ntlist[x][1] = teamlist[nteam-1];
                                nt=nt+1;
                            } else {
                                ntlist[x] = [];
                                ntlist[x][0]= teamlist[j];
                                ntlist[x][1]= teamlist[k];
                                nt=nt+1;                            
                            }
                        }
                    }
                }            
            }
// selection of the same row pairs, nt2 is the new length of matchlist
            for (l=1;l<=x;l++){
                var temp=ntlist[l][0];
                ntlist[l][0]=ntlist[l][1];
                ntlist[l][1]=temp;
                for(m=0;m<=(l-1);m++){
                    if((ntlist[l][0]===ntlist[m][0]) & (ntlist[l][1]===ntlist[m][1])){
                        ntlist[l][0]=0;
                        ntlist[l][1]=0;
                    }
                }
                var temp=ntlist[l][0];
                ntlist[l][0]=ntlist[l][1];
                ntlist[l][1]=temp;
            }
            for(l=0;l<=x;l++){
                if(ntlist[l][0]!=0){
                    ntlist2[nt2]=[];
                    ntlist2[nt2][0]=ntlist[l][0];
                    ntlist2[nt2][1]=ntlist[l][1];
                    nt2=nt2+1;
                }
            }
            console.log(ntlist2);
// generating the matchlist to the schedule page.
            var matchlist=document.getElementsByClassName("matchlist")[0];
            for(y=1;y<=nford;y++){
                var roundy=(roundz-1)*nford+y;
                console.log(roundy);
                createRound(matchlist,roundy,nj,nteam/2);
            }
            for(i=0;i<=nmatch-1;i++){
                for(j=0;j<=1;j++){
                    var x = ntlist2[i][j];             
                    var place ="team"+x;
                    var team = document.getElementById(place).value;
                    var partof="matchteam"+nk;
                    document.getElementById(partof).innerHTML=team+"  ("+x+")";
                    nk=nk+1;
                    console.log(nk);
                }
            }
            console.log(nteam,nford,even,teamlist,nj,nk);
        return (nteam,nford,even,teamlist,nj,nk);
        } 

// the same methods for unpair tema number.
    else {
        var ind = [];
        for(i=0;i<=nford-1;i++){
            ind[i]= [];
            for(j=0;j<=nford-1;j++){
                ind[i][j]=i+j+1;
                if(ind[i][j] > nteam){
                    ind[i][j]=ind[i][j]-nteam;
                }
            }
        }
        console.log(ind);
        var nt2=0;
        for(i=1;i<=nford;i++){
            var nt=0;
            for(j=0;j<=nford-1;j++){
                for(k=0;k<=nford-1;k++){
                    if(ind[j][k] === i){
                        var x=(i-1)*(nford)+nt;
                        if(j === k){
                            ntlist[x] = [];
                            ntlist[x][0]= teamlist[j];
                            ntlist[x][1] = teamlist[nteam];
                            nt=nt+1;
                        } else {
                            ntlist[x] = [];
                            ntlist[x][0]= teamlist[j];
                            ntlist[x][1]= teamlist[k];
                            nt=nt+1;                            
                        }
                    }
                }
            }            
        }
        console.log(ntlist);
        ntlist[0][0]=0;
        ntlist[0][1]=0;
        for (l=1;l<=x;l++){
            if((ntlist[l][0]===100) || (ntlist[l][1]===100)){
                ntlist[l][0]=0;
                ntlist[l][1]=0;
            }
            var temp=ntlist[l][0];
            ntlist[l][0]=ntlist[l][1];
            ntlist[l][1]=temp;
            for(m=0;m<=(l-1);m++){
                if((ntlist[l][0]===ntlist[m][0]) & (ntlist[l][1]===ntlist[m][1])){
                    ntlist[l][0]=0;
                    ntlist[l][1]=0;
                }
            }
            var temp=ntlist[l][0];
            ntlist[l][0]=ntlist[l][1];
            ntlist[l][1]=temp;
        }
        for(l=0;l<=x;l++){
            if(ntlist[l][0]!=0){
                ntlist2[nt2]=[];
                ntlist2[nt2][0]=ntlist[l][0];
                ntlist2[nt2][1]=ntlist[l][1];
                nt2=nt2+1;
            }
        }
        console.log(ntlist2);
        var matchlist=document.getElementsByClassName("matchlist")[0];
        for(y=1;y<=nteam;y++){
            var roundy=(roundz-1)*nteam+y;
            console.log(roundy);
            createRound(matchlist,roundy,nj,(nteam-1)/2);
        }
        for(i=0;i<=nmatch-1;i++){
            for(j=0;j<=1;j++){
                var x= ntlist2[i][j];
                var place="team"+x;
                var team=document.getElementById(place).value;
                var partof="matchteam"+nk;
                document.getElementById(partof).innerHTML=team+"  ("+x+")";
                nk=nk+1;
            }
        }    
    }
}


function createRound(matchId,y,j,nakt){
    var list=matchId;
    var ndiv = document.createElement("div");
    var round=document.createAttribute("class");
    round.value="tabsched round"+y;
    ndiv.setAttributeNode(round);
    list.appendChild(ndiv);
    var nround="round"+y;
    var nextTab=document.getElementsByClassName(nround)[0];
    var ntab=document.createElement("table");
    var tableprop=document.createAttribute("class");
    tableprop.value="table is-striped tab"+y;
    ntab.setAttributeNode(tableprop);
    nextTab.appendChild(ntab);
    var tabnum="tab"+y;
    var tabx=document.getElementsByClassName(tabnum)[0];
    var nextTr=document.createElement("tr");
    nextTr.setAttribute("class","tabcolor tab-head"+y);
    tabx.appendChild(nextTr);
    var headnum="tab-head"+y;
    var nextTd=document.getElementsByClassName(headnum)[0];
    var headTd=document.createElement("td");
    headTd.setAttribute("colspan","6");
    var t=document.createTextNode("Round"+y);
    headTd.appendChild(t);
    nextTd.appendChild(headTd);
    for(i=1;i<=nakt;i++){
        addRowx(tabx,j,y,nakt,i);
        j=j+2;
    }
    return j;
}

function addRowx(tabx,j,y,nakt,i){
    var row=tabx.insertRow(-1);
    var rowId=(y-1)*nakt+i;
    row.setAttribute("class","ered match"+rowId);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);
    var cell6=row.insertCell(5);
    var t1=document.createElement("span");
    var l=(y-1)*nakt*2+j;
    t1.setAttribute("id","matchteam"+l);
    cell1.appendChild(t1);
    var input1=document.createElement("input");
    input1.setAttribute("class","input is-info");
    input1.setAttribute("type","number");
    input1.setAttribute("id","teamid"+l);
    cell2.appendChild(input1);
    var doubledot=document.createTextNode(":");
    cell3.appendChild(doubledot);
    var input2=document.createElement("input");
    input2.setAttribute("class","input is-info");
    input2.setAttribute("type","number");
    var k=l+1;
    input2.setAttribute("id","teamid"+k);
    cell4.appendChild(input2);
    var t2=document.createElement("span");
    t2.setAttribute("id","matchteam"+k);
    cell5.appendChild(t2);
    var matchButton=document.createElement("button");
    var arrow=document.createTextNode(">>");
    matchButton.setAttribute("id","matchButton"+rowId);
    matchButton.setAttribute("class","matchButton");
    matchButton.appendChild(arrow);
    cell6.appendChild(matchButton);
    return;
}

function ik(ndata){
    var x=Math.random();
    for(var i=1;i<=ndata;i++){
        if((x>(i-1)/ndata) & (x<=i/ndata)){
            return i;
        }
    }
}