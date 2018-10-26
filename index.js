const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout});



if(process.argv[2] === "init"){
  //do init stuff
 console.log("Continue");
} 

if (fs.existsSync('./package.json')) {
    console.log('true');
}

const response = {  
        input: []

}
const question = [
    'What is today?',
    'Is it sunny?',
    'Is it hot?',
    'What year is it?',
    'What is your favorite day?'
]

function questionFun() {
    let Arr = question
    // console.log(response.input.length)
    rl.question(Arr[0], (answer) => {
        response.input.push(answer);        
        if (Arr.length !==0) {
           Arr = question.shift() 
           questionFun() 
        }else{
            rl.close()
            let myJSON = JSON.stringify(response)
            fs.writeFile("new-package.json", myJSON, function (err) {
                if (err) {
                    console.log(err);
        
                        }
            
                 });
                                   
            }
         });
        }
        questionFun(question);    


//check for package.json to exsist