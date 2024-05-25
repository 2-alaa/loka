function Quote(){
var name =["― Mae West","― Mahatma Gandhi","― Robert Frost","― Mark Twain","― Elbert Hubbard"] 
var quotes =["“You only live once, but if you do it right, once is enough.”", "“Be the change that you wish to see in the world.”", "“In three words I can sum up everything I've learned about life: it goes on.”","“If you tell the truth, you don't have to remember anything.”", "“A friend is someone who knows all about you and still loves you.”" ]
var Quote = Math.floor(Math.random(name)* name.length);
document.getElementById("demo").innerHTML = quotes[Quote]
document.getElementById("foo").innerHTML = name[Quote]
}
Quote()