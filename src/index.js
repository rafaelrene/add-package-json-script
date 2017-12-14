import program from 'commander';
import addScript from './add-script';

program
  .version('0.1.0')
  .option('-n, --name [name]', 'name of the script')
  .option('-v, --value [value]', 'value of the script')
  .option('-p, --path [path]', 'specify the path to package.json')
  .option('-f, --force', 'if script with same name exists, overwrite it')
  .option(
    '--no-throws',
    'if package.json file is not found, do not throw an error',
  )
  .parse(process.argv);

addScript({
  name: program.name,
  value: program.value,
  path: program.path || process.cwd(),
  throws: Boolean(program.throws),
  force: program.force,
});

export default addScript;
