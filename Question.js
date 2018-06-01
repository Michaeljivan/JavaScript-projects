ask("Do you agree?", showOk, showCancel);

function showOk(){
    alert("You pressed OK.");
}

function showCancel(){
    alert("You pressed Cancel.");
}

function ask(question, yes, no){
    if(confirm(question)){
        yes();
    }else{
        no();
    }
}
