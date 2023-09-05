const myURL = new URL("https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash");

//console.log(myURL);
console.log(myURL.username);
console.log(myURL.password);

const myURL2 = new URL("https://example.org?user=abc&query=xyz&sort=asc");

const user = myURL2.searchParams.get("user");
const query = myURL2.searchParams.get("query");
const sort = myURL2.searchParams.get("sort");

console.log(user);
console.log(query);
console.log(sort);

console.log(myURL2.searchParams.keys());
console.log(myURL2.searchParams.values());

myURL2.searchParams.append("user2", "def");
myURL2.searchParams.append("user", "def");
myURL2.searchParams.set("user", "def");

console.log(myURL2);
console.log(myURL2.searchParams.getAll("user"));

myURL2.searchParams.delete("user");

console.log(myURL2.searchParams.toString());