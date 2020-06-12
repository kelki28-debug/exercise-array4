let arr1 = ['math','english','programming'];
let arr2 = ['geography', 'spanish','programming'];

const compare = () =>
{
for(let i = 0; i <= arr1.length; i++){
if(arr1[i] ===arr2[i]){
    console.log(true)
}
else{
    console.log(false)
}
}
}

compare()