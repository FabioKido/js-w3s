/** 
 * JavaScript can "display" data in different ways:
 * Writing into an HTML element, using innerHTML or innerText.
 * Writing into the HTML output using document.write().
 * Writing into an alert box, using window.alert().
 * Writing into the browser console, using console.log().
 */

document.getElementById("demo").innerHTML = "<h2>Hello World</h2>";
document.getElementById("demo").innerText = "Hello World";
document.write(5 + 6); // Deprecado
alert(5 + 6); // window.alert(5 + 6) window keyword is optional
console.log() // .error, etc

// Print the content of the current window.
print() // window.print() window keyword is optional