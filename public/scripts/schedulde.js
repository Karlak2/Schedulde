items.confirm.addEventListener("click",conf);
items.sched.addEventListener("click",generateResults);
items.sched.addEventListener("click",chooseSched);
items.matchlist.addEventListener("click",yesMainTable);
items.matchlist.addEventListener("click",notMainTable);    
items.champTypeList.addEventListener("click",loadOptions);





// 
function chooseSched(){
    var def=$('#champ-type').val();
    if(def=="Select option"){return;}
    var ny=confirm("Are you sure?");  
    if(ny==true){
            schedulde();
            var type=$('#champ-type').val();
            var nteam=items.entry.rows.length-1;
            var even;
            var teamlist= [];
            if(nteam % 2 == 0){even=true;}
            var nj=1;
            var nk=1;
            if(type=="Round robin"){
                for(i=0;i<=nteam-1;i++){
                    teamlist.push(i+1);
                    var resNumber="resNumber"+(i+1);
                    var resTeam="resTeam"+(i+1);
                    var teamText="team"+(i+1);
                    var name=document.getElementById(teamText).value;
                    document.getElementById(resNumber).innerHTML=(i+1);
                    document.getElementById(resTeam).innerHTML=name;
                    // var lofasz = (i) => {
                    //     $('td[id^=resNumber]').html(i+1);
                    //     let x=$(`#team${i+1}`).val();
                    //     $(`#resTeam${i+1}`).html(x);
                    //     console.log(x);
                    // };
                    // lofasz();
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
                var roundz=1;
                var nford=document.getElementById("round-num").value;
                if(nford=="Number of rounds"){
                    alert("Select the number of rounds please!");
                    sched.classList.remove("hidden");
                    return;
                } else {
                    for(i=0;i<=nteam-1;i++){
                        teamlist.push(i+1);
                        var resNumber="resNumber"+(i+1);
                        var resTeam="resTeam"+(i+1);
                        var teamText="team"+(i+1);
                        var name=document.getElementById(teamText).value;
                        document.getElementById(resNumber).innerHTML=(i+1);
                        document.getElementById(resTeam).innerHTML=name;
                    }
                    partial(nteam,nford,even,teamlist,nj,nk,roundz);
                }
                for(i=0;i<=nteam-1;i++){
                    teamlist.push(i+1);
                    var resNumber="resNumber"+(i+1);
                    var resTeam="resTeam"+(i+1);
                    var teamText="team"+(i+1);
                    // var name=document.getElementById(teamText).value;
                    var name=$('#teamText').val();
                    document.getElementById(resNumber).innerHTML=(i+1);
                    document.getElementById(resTeam).innerHTML=name;
                }
            } else if(type=="Main table") {
                maintable(nteam);
            } else {
                for(j=3;j<=7;j++){
                    var ngroup=nteam/i;
                    var text1 =`Group round ${ngroup} x ${i}`;
                    if(type==text1){    
                        for(i=1;i<=nteam;i++){
                        teamlist.push(i);
                    }
                        group(nteam,ngroup,teamlist,even,nj,nk);
                        break;
                    }
                }
            }
        } else {
            return;
        }
}


function group(nteam,ngroup,teamlist,even,nj,nk ){
    var nteam2=nteam/ngroup;
    var groups=[];
    // if(firstLoadOnPage){
    randomizeForGroups(nteam2,groups,ngroup,nteam,teamlist);
    // }
    for(i=1;i<=ngroup;i++){
        for(j=1;j<=nteam2;j++){
            var bc=groups[i-1][j-1];
            var ab=(i-1)*nteam2+j;
            var resNumber="resNumber"+ab;
            var resTeam="resTeam"+ab;
            var teamText="team"+bc;
            var name=document.getElementById(teamText).value;
            document.getElementById(resNumber).innerHTML=bc;
            document.getElementById(resTeam).innerHTML=name;
        }
    }
    console.log(groups);
    var i=1;
    var roundz=1;
    do { 
        var nmatch=nteam2*(nteam2-1);
        nk=(roundz-1)*nmatch+1;
        var teams=[];
        for(j=1;j<=nteam2;j++){
            teams[j-1]=groups[i-1][j-1];
        }
        var matchlist1=document.getElementsByClassName("matchlist")[0];
        var grouphead= document.createElement("P");
        grouphead.setAttribute("class","group-head tabcolor2")
        var groupContent=document.createTextNode("Group"+i);
        grouphead.appendChild(groupContent);
        matchlist1.appendChild(grouphead);
        if(nteam2 % 2 == 0){
            even=true;
            robin(nteam2,nteam2-1,even,teams,nj,nk,roundz);
        } else {
            even=false;
            teams.push(100);
            robin(nteam2,nteam2,even,teams,nj,nk,roundz);
        }    
        i+=1;
        roundz=roundz+1;
    } while(i<ngroup+1);
}

function randomizeForGroups(nteam2,groups,ngroup,nteam,teamlist){
    for(i=1;i<=ngroup;i++){
        groups[i-1]=[];
        for(j=1;j<=nteam2;j++){
            let x=ik(nteam);
            groups[i-1][j-1]=teamlist[x-1];
            nteam-=1;
            teamlist.splice(x-1,1);
        }
    }
}

function partial(nteam,nford,even,teamlist,nj,nk,roundz){
    console.log(nteam,nford,even);
    var ntlist = [];
    var ntlist2= [];
    var nmatch=nteam*nford/2;
    if(even){
        var ind = [];
        scheduleMatrix(nteam,ind,even);
        console.log(ind);
        var ivec=[];
        do {
            var check=true;
            for(i=1;i<=nford;i++){
                ivec[i]=ik(nteam-1);
            }
            console.log(ivec);
            for(j=2;j<=nford;j++){
                for(k=1;k<=j-1;k++){
                    if(ivec[j]==ivec[k]){
                        check=false;
                        break;
                    }
                }
                if(check==false){
                    break;
                }
            }
            if(check){
                break;
            }
        } while (check==false);
        console.log(ivec);
        var nt2=0;
        if(nford < nteam-1){
            for(i=1;i<=nford;i++){
                var nt=0;
                for(j=0;j<=nteam-2;j++){
                    for(k=0;k<=nteam-2;k++){
                        if(ind[j][k] == ivec[i]){
                            var x=(i-1)*(nteam-1)+nt;
                            if(j == k){
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
        }
        console.log(ntlist);
        for (l=1;l<=x;l++){
            var temp=ntlist[l][0];
            ntlist[l][0]=ntlist[l][1];
            ntlist[l][1]=temp;
            for(m=0;m<=(l-1);m++){
                if((ntlist[l][0]==ntlist[m][0]) & (ntlist[l][1]==ntlist[m][1])){
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
        for(y=1;y<=nford;y++){
            var roundy=(roundz-1)*nford+y;
            createRound(matchlist,y,roundy,nj,nteam/2);
        }
        for(i=0;i<=nmatch-1;i++){
            for(j=0;j<=1;j++){
                var x = ntlist2[i][j];             
                var place ="team"+x;
                var team = document.getElementById(place).value;
                var partof="matchteam"+nk;
                document.getElementById(partof).innerHTML=team;
                nk=nk+1;
            }
        }
    } else {
        console.log("I'm odd!!");
    }
}


function robin(nteam,nford,even,teamlist,nj,nk,roundz){
    var ntlist = [];
    var ntlist2= [];
    var nmatch=nteam*(nteam-1)/2;
    if(even){
    // generating of schedule matrix.
        var ind=[];
        scheduleMatrix(nteam,ind,even);
        console.log(ind);
        var nt2=0;
// generating matchlist, x is the length of full matchlist.
            for(i=1;i<=nteam-1;i++){
                var nt=0;
                for(j=0;j<=nford-1;j++){
                    for(k=0;k<=nford-1;k++){
                        if(ind[j][k] == i){
                            var x=(i-1)*(nteam-1)+nt;
                            if(j == k){
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
                    if((ntlist[l][0]==ntlist[m][0]) & (ntlist[l][1]==ntlist[m][1])){
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
// generating the matchlist to the schedule page.
            var matchlist=document.getElementsByClassName("matchlist")[0];
            for(y=1;y<=nford;y++){
                var roundy=(roundz-1)*nford+y;
                createRound(matchlist,y,roundy,nj,nteam/2);
            }
            console.log(ntlist2);
            for(i=0;i<=nmatch-1;i++){
                for(j=0;j<=1;j++){
                    var x = ntlist2[i][j];             
                    var place ="team"+x;
                    var team = document.getElementById(place).value;
                    var partof="matchteam"+nk;
                    document.getElementById(partof).innerHTML=team;
                    nk=nk+1;
                }
            }
        return (nteam,nford,even,teamlist,nj,nk);
        } 

// the same methods for unpair teams number.
    else {
        var ind = [];
        scheduleMatrix(nteam,ind,even);
        console.log(ind);
        var nt2=0;
        for(i=1;i<=nford;i++){
            var nt=0;
            for(j=0;j<=nford-1;j++){
                for(k=0;k<=nford-1;k++){
                    if(ind[j][k] == i){
                        var x=(i-1)*(nford)+nt;
                        if(j == k){
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
        ntlist[0][0]=0;
        ntlist[0][1]=0;
        for (l=1;l<=x;l++){
            if((ntlist[l][0]==100) || (ntlist[l][1]==100)){
                ntlist[l][0]=0;
                ntlist[l][1]=0;
            }
            var temp=ntlist[l][0];
            ntlist[l][0]=ntlist[l][1];
            ntlist[l][1]=temp;
            for(m=0;m<=(l-1);m++){
                if((ntlist[l][0]==ntlist[m][0]) & (ntlist[l][1]==ntlist[m][1])){
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
        for(y=1;y<=nteam;y++){
            var roundy=(roundz-1)*nteam+y;
            createRound(matchlist,y,roundy,nj,(nteam-1)/2);
        }
        for(i=0;i<=nmatch-1;i++){
            for(j=0;j<=1;j++){
                var x= ntlist2[i][j];
                var place="team"+x;
                var team=document.getElementById(place).value;
                var partof="matchteam"+nk;
                document.getElementById(partof).innerHTML=team;
                nk=nk+1;
            }
        }    
    }
}


function createRound(matchId,roundy,y,j,nakt){
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
    tableprop.value="table is-narrow tab"+y;
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
    headTd.setAttribute("colspan","7");
    var t=document.createTextNode("Round"+roundy);
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
    input1.setAttribute("value","0");
    input1.setAttribute("min","0");
    cell2.appendChild(input1);
    var doubledot=document.createTextNode(":");
    cell3.appendChild(doubledot);
    var input2=document.createElement("input");
    input2.setAttribute("class","input is-info");
    input2.setAttribute("type","number");
    var k=l+1;
    input2.setAttribute("id","teamid"+k);
    input2.setAttribute("value","0");
    input2.setAttribute("min","0");
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
    var delButton=document.createElement("button");
    var arrow2=document.createTextNode("-");
    delButton.setAttribute("id","deleteButton"+rowId);
    delButton.setAttribute("class","deleteButton hidden");
    delButton.appendChild(arrow2);
    cell6.appendChild(delButton);

    return;
}

function ik(ndata){
    var ij=Math.floor(Math.random()*ndata)+1;
    return ij;
}


function maintable(nteam){
    var b=logarithm(2,nteam);
    var location=$('.matchlist')[0];
    var a0=document.createElement("div");
    a0.setAttribute("class","main0");
    location.appendChild(a0);
    var a1=document.createElement("div");
    a1.setAttribute("class","main1 columns");
    a0.appendChild(a1);
    for(i=1;i<=b;i++){
        var a2=document.createElement("div");
        a2.setAttribute("class","column main1"+i);
        a1.appendChild(a2);        
    }
        var teamNum=nteam/2;
        var counter=0;
        for(j=1;j<=b;j++){
            var ti="main1"+j;
            for(i=1;i<=teamNum;i++){
                counter=counter+1;
                var ti2=ti+i;
                var tabloc=document.getElementsByClassName(ti)[0];
                addMainElement(tabloc,ti2,counter);
            }
            if(j==1){
                for(k=1;k<=nteam;k++){
                    var ti3="mainteam"+k;
                    var place="team"+k;
                    var team=document.getElementById(place).value;
                    var partof=ti3;
                    document.getElementById(partof).innerHTML=team;   
                }
            }
            teamNum=teamNum/2;
        }
        $('.main1 input').css("width","55px");
        $('.main1 th').css({"color":"white","text-align":"center"});
        var blockHeight=$('.main1').height();
        var def=nteam/4;
        for(m=2;m<=b;m++){
            if(m==(b-1)){
                var sor=".main1"+m;
                var calcMargin=(blockHeight-def*148)/def/2;
                var calcMargin2=(blockHeight-def*148)/def;
                $(`${sor} table`).first().css("margin",`${calcMargin}px 0px`);
                $(`${sor} table`).last().css("margin",`${calcMargin2}px 0px`);                
            } else if(m==b){
                var sor=".main1"+m;
                var calcMargin=(blockHeight-def*148)/def/2;
                $(`${sor} table`).css("margin",`${calcMargin}px 0px`);  
            } else {
                var sor=".main1"+m;
                var calcMargin=(blockHeight-def*148)/def/2;
                var calcMargin2=(blockHeight-def*148)/def;
                $(`${sor} table`).css("margin",`${calcMargin2}px 0px`);
                $(`${sor} table`).first().css("margin",`${calcMargin}px 0px`);
                $(`${sor} table`).last().css("margin",`${calcMargin}px 0px`);
            }
            def=def/2;
        }
}

function addMainElement(location,ti,i){
    var tab1=document.createElement("table");
    tab1.setAttribute("id",ti);
    tab1.setAttribute("class","table is-bordered is-fullwidth");
    var tabhead=document.createElement("th");
    tabhead.setAttribute("class","tabcolor2");
    tabhead.setAttribute("colspan","2");
    var mainmatch=document.createTextNode("Match"+i);
    tabhead.appendChild(mainmatch);
    tab1.appendChild(tabhead);
    var tabrow1=document.createElement("tr");
    var tabrow2=document.createElement("tr");
    var tabcell1=document.createElement("td");
    tabcell1.setAttribute("id","mainteam"+(2*i-1));
    var tabcell2=document.createElement("td");
    var count1=document.createElement("input");
    count1.setAttribute("id","count"+(2*i-1));
    count1.setAttribute("type","number");
    count1.setAttribute("class","input");
    count1.setAttribute("min","0");
    count1.setAttribute("value","0");
    tabcell2.appendChild(count1);
    var tabcell3=document.createElement("td");
    tabcell3.setAttribute("id","mainteam"+2*i);
    var tabcell4=document.createElement("td");
    var count2=document.createElement("input");
    count2.setAttribute("id","count"+(2*i));
    count2.setAttribute("type","number");
    count2.setAttribute("class","input");
    count2.setAttribute("min","0");
    count2.setAttribute("value","0");
    tabcell4.appendChild(count2);
    tabrow1.appendChild(tabcell1);
    tabrow1.appendChild(tabcell2);
    tabrow2.appendChild(tabcell3);
    tabrow2.appendChild(tabcell4);
    tab1.appendChild(tabrow1);
    tab1.appendChild(tabrow2);
    location.appendChild(tab1);
    var aid="#"+tabcell1.id;
    $(aid).innerWidth(170);
    var bid="#"+tabcell3.id;
    $(bid).innerWidth(170);
}


// eventlistener functions

function conf(){
    var nteam=items.entry.rows.length;
    nteam-=1;
    var even;
    if(nteam % 2 == 0){
        even=true;
    }
    var maintable;
    for(let i=3;i<=7;i++){
        if(nteam % i  == 0){
            let z=nteam/i;
            if(z>1){
                text3=`Group round ${z} x ${i}`;
                addOption(items.champTypeList,text3);
            }
        }        
    }
    for(i=1;i<=10;i++){
        var x=2**i;
        if(nteam==x){
            maintable=true;
        }
    }
    var text1="Round robin";
    var text2="Partial round robin";
    var text4="Main table";
    addOption(items.champTypeList,text1);
    addOption(items.champTypeList,text2);
    var roundNum=document.getElementById("round-num");
    if(even){
        for(i=2;i<=nteam-2;i++){
            addOption(roundNum,i);
        }
    } else {
        for(i=2;i<=nteam-2;i=i+2){
            addOption(roundNum,i);
        } 
    }
    if(maintable){
        addOption(items.champTypeList,text4);
    }



}

function loadOptions(){
    let x=items.champTypeList.value;
    if(x=="Partial round robin"){
        $(items.selectTeam).css('display','inline-block');
    } else {
        $(items.selectTeam).hide();   
    }
}

function addOption(location,ntext){
    var option1=document.createElement("option");
    var text=document.createTextNode(ntext);
    option1.appendChild(text);
    location.add(option1);
}