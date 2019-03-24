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
    nteam=nteam-1;
    console.log(nteam);
}
