const fs = require('fs');
const readline = require('readline');

// console.log(process.argv);
// process.argv.forEach(function (val, index, array) {
//  console.log(index + ': ' + val);
// });

// if(process.argv[2] === "init"){
//   //do init stuff
//  console.log("Continue");
// } 

// if (fs.existsSync('./package.json')) {
//     console.log('true');
// }

// var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

var colors = {
    color: []
}

// for(i=0; i < 6; i++) {
    rl.question('Name a color: ');
// }


    //     colors.push(color.trim());
    //     rl.setPrompt('Enter a color');
    //     console.log(color.trim());
    //     rl.prompt();
    // });

