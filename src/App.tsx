import { ThemeProvider } from '@mui/material/styles';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createGlobalStyle } from 'styled-components';
import Router from './Router';
import theme from './theme';
import { RecoilRoot } from 'recoil';
import { GoogleOAuthProvider } from '@react-oauth/google';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;

}
a {
  text-decoration:none;
  color:inherit;
}
`;

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <GoogleOAuthProvider
              clientId={process.env.REACT_APP_CLIENT_ID as any}
            >
              <GlobalStyle />
              <Router />
              <ReactQueryDevtools initialIsOpen={true} />
            </GoogleOAuthProvider>
          </ThemeProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}
export default App;
