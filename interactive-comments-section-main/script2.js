import data from './data.json' assert {type: 'json'}
console.log('s2',data)

console.log('s2', 'comments', data.comments);
data.comments.push({commetn: 'thest'});
console.log('s2', 'comments', data.comments);
// branch 1
