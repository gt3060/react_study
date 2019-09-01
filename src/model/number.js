var num = {
    sum(arr,value){
        // var arr1 ; 
        // console.log(arr+"查询");
        // arr1.push(arr.checked);
        var number = 0;
        for(var i = 0; i<arr.length;i++){
            console.log("陪陪:"+arr[i].checked)
            if(arr[i].checked == value){
                number ++;
            }
        }
        return number;
    }
}

export default num