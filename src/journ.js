function Journal (title, secrets){
  this.array = [],
  this.wordTotal = 0,
  this.title = title,
  this.secrets = secrets
}

Journal.prototype.countLetters = function(entry) {
  this.split();
  for (var i = 0; i <= this.array.length; i++) {
    this.wordTotal += 1
  }
  return this.wordTotal
}

export function theJournal() {

}
