class Blob {
  constructor() {
    this.parentAttr = "I started it all";
    this.example = "I am in the blob";
  }

  printScream() {
    console.log(`${this.parentAttr}!!!!`);
    
  }
}
const myBlob = new Blob();
console.log("*****new Blob*****");
myBlob.printScream()
module.exports = Blob;