import json from 'jsonfile';
import chalk from 'chalk';

export default ({ name, value, path, throws, force }) => {
  try {
    const packageJson = `${path}/package.json`;
    const file = json.readFileSync(packageJson, { throws });

    if (!file.scripts) file.scripts = {};
    if (!force && file.scripts[name]) {
      throw new Error(
        `Script with name '${chalk.green(name)}' already exists!`,
      );
    }

    file.scripts[name] = value;
    json.writeFileSync(packageJson, file, { spaces: 2 });
    process.exit();
  } catch (e) {
    process.stdout.write(chalk.red('There was an error!\n'));
    process.stdout.write(chalk.red(e.message + '\n'));
    process.exit(1);
  }
};
