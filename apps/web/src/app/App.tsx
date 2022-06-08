import { SidebarPage } from '@cdn-school/platform/ui-layout';

import 'rsuite/styles/index.less';
// or 'rsuite/dist/rsuite.min.css'

export function App({ title }: { title: string }) {
  return <SidebarPage title={title} theme="dark" />;
}

export default App;
