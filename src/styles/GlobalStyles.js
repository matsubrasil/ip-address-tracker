import {createGlobalStyle} from 'styled-components'

const GlobalStyle  = createGlobalStyle`
   * {
     padding: 0;
     margin: 0;
     box-sizing: border-box;
     font-family: 'Rubik', sans-serif;
     outline: none;

     :root {
      --gray900: hsl(0, 0%, 17%);
      --gray700: hsl(0, 0%, 59%);
     }
   }
`

export default GlobalStyle
