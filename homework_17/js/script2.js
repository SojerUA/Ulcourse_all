


class WordDictionary {
  constructor() {
    this.words = [];
  }

  addWord(word) {
    this.words.push(word);
  }

  search(word) {
    const reg = new RegExp('^' + word + '$');
    return this.words.some(v => reg.test(v));
  }
}

let words = new WordDictionary();
words.addWord('bad');
words.addWord('dad');
words.addWord('mad');

console.log(words.search('pad'));
console.log(words.search('bad'));
console.log(words.search('.ad'));
console.log(words.search('b..'));
