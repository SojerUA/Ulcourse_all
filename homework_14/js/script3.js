//Task #3
//Given an array of strings, return that array but add a ‘!’ symbol at the end of each string.




const arrN = ['Kirk','Spock','McCoy'];


function joinElem(name) {
  const starTrack = name.map(item => item + '!');
  return starTrack;
}

console.log(joinElem(arrN));


