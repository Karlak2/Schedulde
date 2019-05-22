function scheduleMatrix(nteam,ind,even){
    if(even==true){
        var endIt=nteam-2;
    } else {
        var endIt=nteam-1;
    }
    for(i=0;i<=endIt;i++){
        ind[i]= [];
        for(j=0;j<=endIt;j++){
            ind[i][j]=i+j+1;
            if(ind[i][j] > endIt+1){
                ind[i][j]=ind[i][j]-(endIt+1);
            }
        }
    }
    return ind;
}

function generateListOne(ind,ntlist,teamlist,nteam,i){
    var nt=0;
    for(j=0;j<=nteam-2;j++){
        for(k=0;k<=nteam-2;k++){
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
    return ntlist;
}

function reOpt(){
    var opt=items.champTypeList.length;
    var round=items.roundNum.length;
    if(opt>1){
        for(let i=1;i<=opt;i++){
            items.champTypeList.remove(1);
        }
    }
    if(round>1){
        for(let j=1;j<=round;j++){
            items.roundNum.remove(1);
        }
    }
}

function visibleElement(myClass){
    $(myClass).css('display','inline-block');
}

