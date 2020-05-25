var choice=prompt("Do you want to enter the temperature in Farenheit (F) or Centigrade (C)");
if (choice=='F')
{
    var farenheit = prompt("Please enter the temperature in F");
    var centigrade = (farenheit-32)*5/9;
    console.log("Temperature in C is: " + centigrade);
}
else if (choice=='C')
{
    var centigrade = prompt("Please enter the temperature in C");
    var farenheit = (centigrade * 9/5)+32;
    console.log("Temperature in F is: " + farenheit);
}



