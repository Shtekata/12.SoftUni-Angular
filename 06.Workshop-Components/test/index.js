const one = document.getElementById('one');
let x = 0;
function go() {
    if (x++ < 10) {
        setTimeout(go, 1000);
        one.textContent = x;
}
    if (x === 10) {
        one.textContent = 'End of counter!';
    }
}
setTimeout(go, 1000);

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Shtekata:<password>@shtekatacluster.0dh5a.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});