import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FeaturedContainer = styled.section`
  height: 480px;
  background-color: lightblue;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
`;

export const StyledCard = styled(Link)`
  flex-shrink: 0;
  width: 300px;
  margin: 5% 2.5%;
  height: 90%;

  background-color: gray;
  background-image: url('${(props) => props.image}');
  background-size: cover;

  display: grid;
  place-items: end end;

  h3 {
    color: white;
  }
`;
