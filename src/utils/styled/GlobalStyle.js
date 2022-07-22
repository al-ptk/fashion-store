import { createGlobalStyle } from 'styled-components';
import playRegular from '../../assets/fonts/PlayfairDisplay-Regular.ttf';
import playBold from '../../assets/fonts/PlayfairDisplay-Bold.ttf';
import questrial from '../../assets/fonts/Questrial-Regular.ttf';
import oleoSwash from '../../assets/fonts/OleoScriptSwashCaps-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Playfair Display";
    font-weight: 400;
    src: url("${playRegular}");
  }

  @font-face {
    font-family: "Playfair Display";
    font-weight: 700;
    src: url("${playBold}");
  }

  @font-face {
    font-family: "Questrial";
    font-weight: 400;
    src: url("${questrial}");
  }
  
  @font-face {
    font-family: "Oleo Script Swash Caps";
    font-weight: 400;
    src: url("${oleoSwash}");
  }

  * {
    margin: 0 !important;
    padding: 0 !important;
  }
`;

export default GlobalStyle;
