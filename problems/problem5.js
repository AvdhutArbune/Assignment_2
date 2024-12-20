let num=6;
for(let i=0;i<=num;i++){
    s=""
    for(let j=0;j<i;j++){
        if(j%3===0){
            continue
        }
        s+=j+" "
    }
    console.log(s);
    
}