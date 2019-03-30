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
    console.log(ind);
    var ntlist = [];
    var nmatch=nteam*(nteam-1)/2;
    if(even){
        var ntlist2=0
        console.log(nteam);
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
        console.log(x);
        for (l=1;l<x+1;l++){
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
        console.log(ntlist);
    } 
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

