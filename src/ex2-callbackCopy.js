/*
2: callbackCopy.js
 Ecrivez un programme qui copie le fichier file1.txt vers le fichier ***file3.txt*** en utilisant 
les api asynchrones basées sur des callbacks du module fs de node.js. */

import fs from 'fs'

console.log('PGM START')

const { COPYFILE_EXCL } = fs.constants

function callback(err) {
    if (err) throw err
    console.log('source.txt was copied to destination.txt')
}

fs.copyFile('../file1.txt', '../file3.text', COPYFILE_EXCL, callback)

console.log('PGM END')

// node ex2-callbackCopy.js
