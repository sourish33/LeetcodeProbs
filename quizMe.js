/**
 * node quizMe 3 
 * this will randomly select three filenames not created today
 */


const fs = require('fs');
const path = require('path');

// Helper function to check if a file was created today
const isFileCreatedToday = (filePath) => {
    const stats = fs.statSync(filePath);
    const fileDate = stats.birthtime;
    
    const today = new Date();
    return fileDate.getDate() === today.getDate() &&
           fileDate.getMonth() === today.getMonth() &&
           fileDate.getFullYear() === today.getFullYear();
};

const getAllFiles = (dirPath, arrayOfFiles = []) => {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
        const filePath = path.join(dirPath, file);
        const fileName = path.basename(filePath);

        if (fs.statSync(filePath).isDirectory()) {
            arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
        } else {
            // Only add files that were NOT created today
            if (!isFileCreatedToday(filePath)) {
                arrayOfFiles.push(fileName);
            }
        }
    });

    return arrayOfFiles;
};



const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const directoryPath = path.join(__dirname, './problems'); 

const files = getAllFiles(directoryPath)

const howMany = process.argv[2] || 2

const shuffled = shuffleArray(files).slice(0,howMany)





console.log(`Please solve these ${howMany} interview questions\n`, shuffled);