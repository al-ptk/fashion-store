import styled from 'styled-components';
import bg from '../../../assets/images/HeroIntroBG.webp';

export const HeroContainer = styled.section`
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.1) 60%,
      rgba(0, 0, 0, 0.6) 70%,
      rgba(0, 0, 0, 1) 100%
    ),
    url(${bg});
  background-size: 410px 570px;
  background-position: center;

  width: 360px;
  height: 480px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
`;

export const HeroTitle = styled.h1`
  font-size: 48px;
  color: white;
  font-family: ${(props) => props.theme.fonts.headline};
  margin: 0;
`;

export const HeroSubtitle = styled.p`
  font-size: 20px;
  color: white;
  font-family: ${(props) => props.theme.fonts.details};
`;
