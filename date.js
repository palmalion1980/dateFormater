const dateFormatter = require('datePakage');



console.log('Timestamp:', dateFormatter.getTimesTamp())
console.log('fecha en español:', dateFormatter.getLongTime())
console.log('fecha en ingles:', dateFormatter.getLongTime('en-US'))