/*eslint-env browser*/
//Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal.

var int1 = parseInt(window.prompt("Enter a number"), 10), int2 = parseInt(window.prompt("Enter a number"), 10);
if (int1 > int2) {
    window.document.wtite(int1);
} else if (int2 > int1) {
    window.document.write(int2);
} else {
    window.document.write("The number is equal");
}




