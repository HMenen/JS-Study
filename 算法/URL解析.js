function praseUrl(url) {
  let newUrl = url.substr(url.indexOf('?') + 1);
  let items = newUrl.split('&');
  let ret = {};
  for (let i = 0; i < items.length; i++) {
    let arr = items[i].split('=');
    ret[arr[0]] = arr[1]
  }
  return ret;
}
console.log(praseUrl('http://gray.dev.aixuexi.com/iteratedetail/release/1/check?iterationid=652&onlineid=1931&productid=17&type=1'))