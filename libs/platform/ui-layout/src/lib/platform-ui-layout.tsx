import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PlatformUiLayoutProps {}

const StyledPlatformUiLayout = styled.div`
  color: pink;
`;

export function PlatformUiLayout(props: PlatformUiLayoutProps) {
  return (
    <StyledPlatformUiLayout>
      <h1>Welcome to PlatformUiLayout!</h1>
    </StyledPlatformUiLayout>
  );
}

export default PlatformUiLayout;
