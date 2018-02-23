/*eslint-env browser*/

/*Looping a Triangle
Write a loop that displays the following triangle within a console window:
#
##
###
####
#####
######
#######
*/
var i = 0;
var triangle = '';

do {
    i += 1;
    triangle = triangle + "#";
    window.console.log(triangle);
} while (i <= 7);

    
