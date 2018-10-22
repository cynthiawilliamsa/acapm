const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout});

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

function nameNumbers() {
    var nums = []    
        rl.question('What is today?', (answer) => {
                    console.log(`Today is ${answer}`); 
                    rl.setPrompt("Enter a number: ");
                    rl.prompt();                
                    rl.on('line', (num)=>{
                        nums.push(num); 
                        console.log(nums)
                        if(nums.length === 5) {
                            rl.close();
                        } else {
                            rl.setPrompt('Enter another number: ');      
                            rl.prompt();                                                       
                        }
            
                    });
                       
                });
            }
    nameNumbers();    