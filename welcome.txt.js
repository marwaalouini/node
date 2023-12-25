const fs = require('fs');

fs.readdir('./', (error, files) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Files in the current directory:', files);
    }
});