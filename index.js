const cats =['Milo','Otis','Garfield']
function destructivelyAppendCat(){
cats.push('Ralph');
}
function destructivelyPrependCat(){
cats.unshift('Bob')  ; 
}
function destructivelyRemoveLastCat(){
cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(){
const catsCopy=cats.slice()
catsCopy.push('Broom');
return catsCopy;
}

function prependCat(){
const newCats=cats.slice();
newCats.unshift('Arnold');
return newCats;
}

function removeLastCat(){
const newCats=cats.slice();
newCats.pop();
return newCats;
}

function removeFirstCat(){
const newCats=cats.slice();
newCats.shift();
return newCats;
}