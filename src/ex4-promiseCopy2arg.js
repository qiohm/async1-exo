/* 4: ex4-promiseCopy2arg.js    Optionnel:

Réecrivez le programme promiseCopy.js afin qu'il puisse accepter 2 arguments de la ligne de commande:

    un fichier source, qui est le fichier à copier
    un fichier dest, qui sera la destination de la copie

Comme pour l'exercice précedent utiliser les api asynchrones basées sur des promises du module fs de node.js. */

import fsPromises from 'fs/promises'
import { COPYFILE_EXCL } from 'constants'

const src = process.argv[2]
const dest = process.argv[3]

try {
    let stats = await fsPromises.stat(src)
    if (stats.isFile()) {
        await fsPromises.copyFile(src, dest)
        console.log('source.txt was copied to destination.txt')
    }
} catch (e) {
    console.log(e)
}

/* if (process.argv.length !== 4) {
    console.log('USAGE: node ex4-promiseCopy2arg.js src dest')
    process.exit(1)
}

fsPromises
    .copyFile(src, dest, COPYFILE_EXCL)

    .then(() => console.log('source.txt was copied to destination.txt'))
    .catch(() => console.log('The file could not be copied')) */

// node ex4-promiseCopy2arg.js ../file1.txt ../file5.txt
