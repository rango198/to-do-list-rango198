

const param = location.search;
const searchParams = new URLSearchParams(location.search);
const userId = searchParams.get('userid')
console.log(userId);

