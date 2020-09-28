/* 
1: syncCopy.js
Ecrivez un programme qui copie le fichier file1.txt vers le fichier ***file2.txt***
en utilisant les api synchrones du module fs de node.js
 */

/*  
import node.js API fileSystem module fs (contenu dans node_modules); 
 NodeJS API accès Systeme de Fichiers / voir : https://github.com/AbsoluteVirtueXI/alyra-courses/blob/master/node/6-asynchronous-programming-1.md
 */
import fs from 'fs'

console.log('*****PGM START*****')

// use of copyfile_excl (protection against overwriting)
const { COPYFILE_EXCL } = fs.constants

//TRY TO COPY file1.txt

try {
    fs.copyFileSync('../file1.txt', '../file2.txt', COPYFILE_EXCL)
} catch (e) {
    console.log('inn first catch')
    console.log(e)
} finally {
    console.log('in first finally')
}

console.log('PGM END')


// node ex1-syncCopy.js