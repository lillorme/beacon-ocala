import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const pageDefaultCss = css`
    padding: 0 15px;
`;

export const HomePageContainer = styled.div`

`;
export const H1 = styled.h1`
    font-size: 62px;
    text-align: center;
    font-weight: 900;
`;

export const H2 = styled.h2`
    font-size: 32px;
    text-align: center;
    font-weight: 900;
`;

export const siteLinks = styled(Link)`

`;

export const pageCss = styled.div`
    ${pageDefaultCss};
`;