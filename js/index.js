function quote() {

    nQuote = [
        { text: "A man must be big enough to admit his mistakes, smart enough to profit from them, and strong enough to correct them.", author: "John C. Maxwell" },
        { text: "Wise men speak because they have something to say; fools because they have to say something.", author: "Plato" },
        { text: "Watch your manner of speech if you wish to develop a peaceful state of mind. Start each day by affirming peaceful, contented and happy attitudes and your days will tend to be pleasant and successful.", author: "Norman Vincent Peale" },
        { text: "If people knew how hard i worked to get my mastery, it wouldnt seem so wonderful at all", author: "Michael Angelo" },
        { text: "Only those who risk going too far can possibly find out how far one can go.", author: "T.S. Eliot" },
        { text: "Men are anxious to improve their circumstances, but are unwilling to improve themselves; they therefore remain bound.", author: "James Allen" },
        { text: "There are only two options regarding commitment. You're either in or out. There's no such thing as a life in-between.", author: "Pat Riley" },
        { text: "The simple act of paying positive attention to people has a great deal to do with productivity.", author: "Thomas J. Peters" },
        { text: "No great thing is created suddenly.", author: "Epictetus" },
        { text: "Self-image sets the boundaries of accomplishment.", author: "Maxwell Maltz" }
    ];


    var i = Math.floor(Math.random() * nQuote.length);

    $('#text').text(nQuote[i].text);
    $('#author').text("-" + nQuote[i].author);


}

function tweet() {
    var qText = $("#text").text(); 
    var qAuth = $("#author").text();
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('Hey @RonMaxedon, "' + qText + '" ' + qAuth), '_blank');

}

$(document).ready(function() {
    quote();
    $("#get").on("click", quote);
    $("#tweet").on("click", tweet);


});