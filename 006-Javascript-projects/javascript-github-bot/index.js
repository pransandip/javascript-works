const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const random = require('random');

const FILE_PATH = './data.json';

const makeCommit = n => {
    if (n === 0) return simpleGit().push();
    const x = random.int(0, 54)
    const y = random.int(0, 6)
    const DATE = moment().subtract(1, 'y').add(67, 'd')
        .add(x, 'w').add(y, 'd').format()

    const data = {
        date: DATE
    }
    console.log(DATE, n);
    jsonfile.writeFile(FILE_PATH, data, () => {
        //To modify commit massage data 'git commit --date="Mon 28 july 2022"' 
        simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE }, makeCommit.bind(this, --n));
    });
}

makeCommit(370);
