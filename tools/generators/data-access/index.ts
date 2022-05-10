import { libraryGenerator } from '@nrwl/workspace/generators';
import { join } from 'path';
import {
  Tree,
  names,
  formatFiles,
  generateFiles,
  installPackagesTask,
  readProjectConfiguration,
  getWorkspaceLayout,
} from '@nrwl/devkit';
import { readNxJson } from '@nrwl/devkit';

interface Schema {
  domain: string;
}

interface NormalizedSchema {
  directory: string;
  name: string;
  tags: string;
}

function normalizeOptions(schema: Schema): NormalizedSchema {
  return {
    directory: schema.domain.replace(/\-domain/g, ''),
    name: 'data-access',
    tags: 'type:data-access',
  };
}

export default async function (tree: Tree, schema: Schema) {
  const normalized = normalizeOptions(schema);

  const { libsDir } = getWorkspaceLayout(tree);
  const { npmScope } = readNxJson();

  const entityPath = join(
    libsDir,
    normalized.directory,
    'domain',
    'src',
    'lib',
    'entities',
    `${normalized.directory}.ts`
  );

  if (!tree.exists(entityPath)) {
    throw new Error(`Entity ${entityPath} does not exist.`);
  }

  await libraryGenerator(tree, normalized);

  const name = `${normalized.directory}-data-access`;
  const project = readProjectConfiguration(tree, name);

  generateFiles(tree, join(__dirname, 'files'), project.sourceRoot, {
    entity: names(normalized.directory),
    name: normalized.directory,
    npmScope,
    tmpl: '',
  });

  await formatFiles(tree);

  return () => {
    installPackagesTask(tree);
  };
}
