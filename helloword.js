function greet(greeting, name) {
   return `${greeting} ${name}`;
}

function upper(message) {
    let upperMessage;
    if (typeof message === 'string' ) {
        upperMessage = message.toUpperCase()
    }
    message = "No Entry"
    return upperMessage;
}

module.exports = {
    greet,
    upper
}