/* 3: promiseCopy.js

Ecrivez un programme qui copie le fichier file1.txt vers le fichier ***file4.txt*** 
en utilisant les api asynchrones basées sur des promises du module fs de node.js. */

import fsPromises from 'fs/promises'
import { COPYFILE_EXCL } from 'constants'

console.log('PGM START')

fsPromises
    .copyFile('../file1.txt', '../file4.txt', COPYFILE_EXCL)
    .then(() => console.log('source.txt was copied to destination.txt'))
    .catch(() => console.log('the file could not be copied'))

console.log('PGM END')

// node ex3-promiseCopy.js
