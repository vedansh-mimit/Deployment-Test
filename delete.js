const { execSync } = require('child_process');

if(process.argv.length < 3) {
    console.log('Usage: node delete.js <username>');
    process.exit(1);
}

let username = process.argv[2];

try {
    console.log(execSync(`sf project deploy start -o ${username} --manifest ./manifest/package.xml --post-destructive-changes ./manifest/package.xml`).toString());
} catch(e) {
    console.log(e.toString());
    process.exit(1);
}
