//const to change the text on the dom
const author = document.getElementById("show_autor")
const quote = document.getElementById("show_quote")
const random_button = document.getElementById("button_random")
const copy_button = document.getElementById("button_copy")

// Api implemented and his response 
async function fetchQuote() {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      // we unpack the data 
      console.log(data);
      //we put the data on the right place 
      author.innerText = data.author;
      quote.innerText = data.content;
    } //catch the error if there´s one 
     catch (error) {
      console.error('Error:', error);
    }
  } //we call the function lol 
  fetchQuote();

//End´s Api

// random button to make a redeable code 
random_button.addEventListener("click", function () {
    fetchQuote();
});
// copy text button 
copy_button.addEventListener("click", function() {
    copy_text= quote.innerText;
    //this is actually the thing that make the clipboard copy 8the text 
    navigator.clipboard.writeText(copy_text);
    alert("Copied the text: " + copy_text);
});
