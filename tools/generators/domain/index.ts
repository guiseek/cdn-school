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
  usecases: boolean;
  name: string;
  tags: string;
}

function normalizeOptions(schema: Schema) {
  return {
    usecases: !!schema.usecases,
    directory: schema.name,
    tags: 'type:domain',
    name: 'domain',
  };
}

export default async function (tree: Tree, schema: Schema) {
  const normalized = normalizeOptions(schema);

  await libraryGenerator(tree, normalized);

  const directory = `${normalized.directory}-domain`;
  const project = readProjectConfiguration(tree, directory);

  if (normalized.usecases) {
    generateFiles(tree, join(__dirname, 'files'), project.sourceRoot, {
      entity: names(normalized.directory),
      name: normalized.directory,
      tmpl: '',
    });
  }

  await formatFiles(tree);

  return () => {
    installPackagesTask(tree);
  };
}
