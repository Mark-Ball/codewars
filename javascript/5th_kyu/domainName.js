function domainName(url){
    // domains with https://www., http://www., or www.
    const regex1 = /(?<=www\.)[a-z0-9\-]+/;
    // domains that start with https:// or http://
    const regex2 = /(?<=\/\/)[a-z0-9\-]+/;
    // domains where the string just begins immediately
    const regex3 = /[a-z0-9\-]+/;
    if (regex1.test(url)) {
        return (url.match(regex1))[0];
    } else if (regex2.test(url)) {
        return (url.match(regex2))[0];
    } else if (regex3.test(url)) {
        return (url.match(regex3))[0];
    };
//   return url.match(/((?<=www\.)|(?<=\/\/))[a-z0-9\-]+/i)[0];
};
console.log(domainName("http://google.com"));
console.log(domainName("http://google.co.jp"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("https://www.youtube.com"));
console.log(domainName("wfasd3tetawe.com"));