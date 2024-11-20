//File System Module

/*OS -> Operating System */

// var os = require('os')
//  console.log(os.type());
//  console.log(os.version())
//  console.log(os.freemem())//Returns the amount of free system memory in bytes.
//  console.log(os.cpus())//array of information about the system's CPU cores.

//  console.log(__dirname)// Returns	Directory path of the current file
//  console.log(__filename)//Full path of the current file

/*PATH */

// const os = require('os')
// const path = require('path')

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))//filename
// console.log(path.extname(__filename))//File Extention name

/*File Module 
it allows you to perform various file operations 
    1.Create Folder or File
    2.Read Files
    3.Renaming Files
    4.Deleting Files

*/

/*Read Files*/

    // const { isUtf8 } = require('buffer')
    // const fs = require('fs')
    //  fs.readFile('test.txt', 'Utf8',(err,data)=>{

    //     if(err){
    //         console.log(err)
    //     }
    //     console.log(data)
    //  })

/*Creating File*/

// fs.writeFile('Example.html','utf8',(err)=>{

//     if (err){
//         console.log(err)
//     }
//     console.log("File Created")


//  })

/* to dump content dynamic*/
// var fs = require('fs')
// const content = "My name is Nithish, I am creating Dynamic Content";

// fs.writeFile('Example.html', content,(err)=>
// {

//     if(err){
//         console.log(err)
//     }else{
//     console.log("File Content is success ")
//     }
// })

/* File Rename*/
// var fs = require('fs')
// fs.rename('example.html','NewChangedFile.js',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("File rename Successfully")
//     }
// })

/* Delete File */

var fs = require('fs')
fs.unlink('NewChangedFile.js',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("File Delete Successfully")
    }
})