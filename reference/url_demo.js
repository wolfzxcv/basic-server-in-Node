const url = require('url');

const myUrl = new URL(
  'http://jegsavnernorge.com:0517/flott.html?id=yaknow&status=active'
);

// Serialized URL
// These two are the same
// console.log(myUrl.href);
// console.log(myUrl.toString());

// Host (root domain)
// jegsavnernorge.com:517
// console.log(myUrl.host);

// Hostname (doesn't get port)
//console.log(myUrl.hostname);

// Pathname
// /flott.html
// console.log(myUrl.pathname);

// Seriallized query
// everything after question mark
// console.log(myUrl.search);

// Params object
// console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
console.log(myUrl.href);

// Look through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}:${value}`));
