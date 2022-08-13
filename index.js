// Code your solutions in this file
function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }
    return messages;
}

console.log(writeCards(['Ada', 'Brendan', 'Ali'], 'birthday'));



function countDown() {
    let count = 11;
    while (count > 0) {
        count --;
        console.log(count);
    }
}

