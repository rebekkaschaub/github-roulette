import { createGlobalStyle } from 'styled-components'
import background from './images/unicornBackground.jpeg'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    background-image: url(${background});
    background-size: 100% auto;
    height: 100vh;
    width: 100vm;
    margin: 0;
    padding: 0;
    color: deeppink;
    text-shadow: 1px 1px 1px white;
    font-size: 112.5%;
    border: solid 3px hotpink;
  }
`
