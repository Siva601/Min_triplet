function minimum_triplet(arr1, arr2, arr3){
    arr1.sort(function(a, b){return a - b});
    arr2.sort(function(a, b){return a - b});
    arr3.sort(function(a, b){return a - b});
    let n = arr1.length;
    let diff = 3241116545;
    let possible_arr = [[0]];
    for (i=0; i<n; i++){
        for (j=0; j<n; j++){
            for (k=0; k<n; k++){
                let temp_arr = [arr1[i], arr2[j], arr3[k]];
                temp_arr.sort(function(a, b){return a-b});
                temp_diff = temp_arr[2] - temp_arr[0];
                if (temp_diff < diff){
                    diff = temp_diff;
                    possible_arr.push(temp_arr);
                    possible_arr.shift();
                }
            }
        }
    }
    possible_arr[0].sort(function(a, b) {return b - a});
    return possible_arr[0].toString();
}

arr1 = [15, 12, 18, 9];
arr2 = [10, 17, 13, 8];
arr3 = [14, 16, 11, 5];
console.log(minimum_triplet(arr1, arr2, arr3));