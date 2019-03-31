function champtype(){
    var type=document.getElementById("champ-type").value;
    if(type="Round robin"){
        robin();
    } else if(type="Partial round robin") {
        partial();
    } else {
        maintable();
    }
}

function robin(){
    var table=document.getElementsByClassName("table")[0];
    var nteam=table.rows.length;
    var odd=false;
    var even=false;
    nteam=nteam-1;
    if(nteam % 2 == 0){
        even=true;
    }
    if(nteam % 2 == 1){
        odd=true;
    }
    var nteam2=nteam-1;
    var ind = [];
    for(i=0;i<=nteam2-1;i++){
        ind[i]= [];
        for(j=0;j<=nteam2-1;j++){
            ind[i][j]=i+j+1;
            if(ind[i][j] > nteam2){
                ind[i][j]=ind[i][j]-nteam2;
            }
        }
    }
    var ntlist = [];
    var ntlist2= [];
    var nmatch=nteam*(nteam-1)/2;
    if(even){
        var nt2=0;
        for(i=1;i<=nteam2;i++){
            var nt=0;
            for(j=0;j<=nteam2-1;j++){
                for(k=0;k<=nteam2-1;k++){
                    if(ind[j][k] === i){
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
        var matchlist=document.getElementsByClassName("matchlist")[0];
        var nj=1;
        for(y=1;y<=nteam2;y++){
            createRound(matchlist,y,nj,nteam/2);
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
    headTd.setAttribute("colspan","5");
    var t=document.createTextNode("Round"+y);
    headTd.appendChild(t);
    nextTd.appendChild(headTd);
    for(i=1;i<=nakt;i++){
        addRowx(tabx,j,y,nakt);
        j=j+2;
    }

}

function addRowx(tabx,j,y,nakt){
    var row=tabx.insertRow(-1);
    row.setAttribute("class","ered");
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);
    var t1=document.createElement("span");
    var l=(y-1)*nakt*2+j
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
    return;
}

function ik(ndata){
    x=Math.random
    for(i=1;i>=ndata;i++){
        if((x>(i-1)/ndata) & (x<=i/ndata)){
            ik=i;
        }
    }
    return ik;
}
