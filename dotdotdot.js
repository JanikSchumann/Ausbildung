function dotdotdot(input_string, counter) {
   input_string = input_string.substring(0, (counter-3));
   var i = input_string.length-1;
   while (input_string[i] != " "){
     i--;
   }
   input_string = input_string.substring(0, i);
   input_string += "...";
   return input_string;
}

dotdotdot('Das ist ein Test-Satz der wirklich sehr lang geschrieben ist.', 30);
