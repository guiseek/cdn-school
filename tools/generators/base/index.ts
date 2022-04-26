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
  name: string;
  directory?: string;
  tags?: string;
}

function normalizeOptions({ name, ...schema }: Schema): Required<Schema> {
  const tags = schema.directory ? `type:${schema.directory}` : '';
  const directory = schema.directory ?? '';
  return {
    directory,
    tags,
    name,
  };
}

export default async function (tree: Tree, schema: Schema) {
  const normalized = normalizeOptions(schema);
  await libraryGenerator(tree, normalized);

  const name = !!normalized.directory
    ? `${normalized.directory}-${normalized.name}`
    : normalized.name;
  const project = readProjectConfiguration(tree, name);

  generateFiles(tree, join(__dirname, 'files'), project.sourceRoot, {
    project: names(name),
    tmpl: '',
    name,
  });

  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
