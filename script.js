function isPalindrome(str){

let text = str.toLowerCase().replaceAll(" ","");

    for (let i = 0; i < text.length; i++) {

        if (text[i] !== text[text.length - 1 - i]) {
            return false;
        } else {
            return true;
        }
    }      
}

function arrayMaxMin(arr){

let min = arr[0];
let max = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
    
        if (arr[i] < min) {
        min = arr[i];
        
        } else if (arr[i] > max) {
        max = arr[i];
        }
    }
    
return [min, max];
    
}
