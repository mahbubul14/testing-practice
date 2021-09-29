// function stringLength(string) {
//     if (string.length > 0 && string.length <=10) {
//         return string.length;
//     } else {
//         throw new Error ('errors!');
//     }
// }

// module.exports = stringLength

function stringLength(string) {

    if(string.length === 0){

        throw new Error('String empty');
    }
    else if(string.length >= 10){
        throw new Error('String too long!');
    }
    return string.length;

}

module.exports = stringLength