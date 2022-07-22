import styled from 'styled-components';
import bg from '../../../assets/images/HeroIntroBG.webp';

const HeroContainer = styled.section`
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.1) 60%,
      rgba(0, 0, 0, 0.6) 70%,
      rgba(0, 0, 0, 1) 100%
    ),
    url(${bg});
  background-size: 360px 480px;
  width: 360px;
  height: 480px;
`;

export { HeroContainer };
