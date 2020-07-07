import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const  Ul = styled.ul`
    margin:0;
    padding:0;
`;

export const  Li = styled.li`
    display:inline-block;
`;

export const SiteLinks = styled(Link)`
    padding: 6px 10px;
    color:white;
    &:hover{
        cursor:pointer;
    }
`;