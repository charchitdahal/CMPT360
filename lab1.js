/*
*   Giulia Lorini
*   & Charchit Dahal
*/

function calcFib()
{
    // This function is done. It is just an example. 
    var n = document.getElementById('input').value;
    var sequence = [];

    if(n == 1)
        sequence.push(0);
    else if(n >1){
    //add the first two values to the list
        sequence.push(0);
        sequence.push(1);
        let count = 2;
   
        while(count < n){
            sequence.push(sequence[count-1] + sequence[count-2]);
            count += 1;
        }
    }
    alert(sequence);

}

function checkBalance() {
    // Your code goes here:

    var readInput = document.getElementById('input2').value;
    var open = [];
    var openPar = "([{";
    var closePar = ")]}";
    var returnValue = true;

    for (var i = 0; i<readInput.length; i++) {  //Analyze one character at a time
        if (openPar.includes(readInput[i])) {   
            open.push(readInput[i]);    //If it's an open parenthesis I add it to the "open" array
        }
        //if it's a close parenthesis I check if it's of the same type as the last open parenthesis I encountered (saved in "open") by checking the position in "openPar" and "closePar"
        else {
            var par = open.pop();
            var parType = openPar.indexOf(par);
            if (parType != closePar.indexOf(readInput[i])) {
                returnValue = false;
                break;
            }
        }
    }
    
    //check if there are open parentheses left unmatched
    if (open.length != 0)
        returnValue = false;


    // Use alert() to report the checking result of the input string.
    // true if the string is balanced or false if it is not balanced. .
    alert(returnValue);
}

