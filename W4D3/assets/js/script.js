let eded = parseFloat(prompt('Ədədi Daxil Edin: '))

if (eded%3===0) {
    if (eded%7===0) {
        console.log("7 ye ve 3 e bolunur");
    } else{
        console.log("3 e bolunur");
    }
} else if(eded%7===0){
    console.log("7 ye bolunur");
}
else{
    console.log("ne 3 e ne de 7 ye bolunur");
}
