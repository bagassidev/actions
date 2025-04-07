const core = require('@actions/core');

try {
    const name = core.getInput('author');
    console.log(`Hello world, ${name}!`);
} catch (error) {
    core.setFailed(`Une erreur est survenue : ${error.message}`);
}