import { libraryGenerator } from '@nrwl/workspace/generators';
import { join } from 'path';
import {
  Tree,
  names,
  formatFiles,
  generateFiles,
  installPackagesTask,
  readProjectConfiguration,
} from '@nrwl/devkit';

interface Schema {
  directory: string;
  name: string;
  tags: string;
}

function normalizeOptions(schema: Schema) {
  schema.directory = schema.name;
  schema.tags = 'type:domain';
  schema.name = 'domain';
  return schema;
}

export default async function (tree: Tree, schema: Schema) {
  await libraryGenerator(tree, normalizeOptions(schema));
  const project = readProjectConfiguration(tree, `${schema.directory}-domain`);

  generateFiles(tree, join(__dirname, 'files'), project.sourceRoot, {
    entity: names(schema.directory),
    name: schema.directory,
    tmpl: '',
  });

  await formatFiles(tree);

  return () => {
    installPackagesTask(tree);
  };
}
