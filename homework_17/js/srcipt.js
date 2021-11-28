

const devList = [
  {firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP'},
  {firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python'},
  {firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python'},
  {firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP'},
];


function findSenior(list) {
  const maxAge = Math.max(...list.map(person => person.age));
  return list.filter(person => person.age === maxAge);
}

console.log(findSenior(devList));