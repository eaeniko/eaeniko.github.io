function isPalindrome(str){
    let strLowerCase = str.toLowerCase().replaceAll(' ', '');
    let invertedStr = '';

    for (let i = strLowerCase.length -1; i >= 0; i--) {
        invertedStr += strLowerCase[i];
    }
    if (strLowerCase === invertedStr) {
        return true;
    }
    return false;
}
function arrayMaxMin(arr){
    let minValue = arr[0];
    let maxValue = arr[0];
    const newArray = [];

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > maxValue) {
            maxValue = arr[i];
        }
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
        
    }
    newArray.push(minValue);
    newArray.push(maxValue);
    return newArray;
}
