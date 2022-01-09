const friends = ['john', 'peter', 'bobby', 'jane']

localStorage.setItem('friends', JSON.stringify(friends))

const values = localStorage.getItem('friends')
console.log(JSON.parse(values)[0]);

// JSON.stringify(array) to store in JSON format
// JSON.parse(array)[index] to get item at index