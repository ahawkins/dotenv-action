const core = require('@actions/core');
const dotenvAction = require('./dotenv_action');
try {
  const dotenvFile = core.getInput('path');
  const logVariables = core.getInput('log-variables').toLowerCase() === 'true';
  const maskVariables =
    core.getInput('mask-variables').toLowerCase() === 'true';
  const variables = dotenvAction(dotenvFile, logVariables);

  for (const key in variables) {
    const value = variables[key];

    core.exportVariable(key, value)

    if(maskVariables) {
      core.setSecret(value);
    }
  }

  if (logVariables) {
    console.log(variables);
  } else {
    console.log(
      `loaded ${Object.keys(variables).length} values into the environment`
    );
  }
} catch (error) {
  core.setFailed(error.message);
}
