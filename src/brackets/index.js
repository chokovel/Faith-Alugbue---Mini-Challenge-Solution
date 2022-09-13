/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let openChar = [];
    
    for(let i = 0; i < str.length; i++){
        let openCharCheck = openChar[openChar.length -1];
        if(str[i] == '(' || str[i] == '[' || str[i] == '{'){
            openChar.push(str[i]);
    } else if((openCharCheck == '(' && str[i] == ')') || 
                (openCharCheck == '{' && str[i] == '}') || 
                    (openCharCheck == '[' && str[i] == ']') ){
                        openChar.pop();
        }else {
            return "invalid";
        }
    }
    if(openChar.length == 0){
        return 'valid';    
    } else {
        return 'invalid';
    }
}

module.exports = isValid;
