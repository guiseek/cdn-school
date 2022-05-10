import styled from 'styled-components';

import { Route, Routes, Link } from 'react-router-dom';

import { LearnFeatureShell } from '@cdn-school/learn/feature-shell';

import { StudentFeatureShell } from '@cdn-school/student/feature-shell';

const StyledApp = styled.div`
  html {
    -webkit-text-size-adjust: 100%;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
    line-height: 1.5;
    tab-size: 4;
    scroll-behavior: smooth;
  }
  body {
    font-family: inherit;
    line-height: inherit;
    margin: 0;
  }
  h1,
  h2,
  p,
  pre {
    margin: 0;
  }
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: currentColor;
  }
  h1,
  h2 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
  pre {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      'Liberation Mono', 'Courier New', monospace;
  }
`;

export function App() {
  return (
    <StyledApp>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/student">Student</Link>
          </li>
          <li>
            <Link to="/learn">Learn</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route path="/student/*" element={<StudentFeatureShell />} />
        <Route path="/learn/*" element={<LearnFeatureShell />} />

      </Routes>
    </StyledApp>
  );
}

export default App;
