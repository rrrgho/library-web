import type { AppProps } from "next/app";
import { StylesProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import MuiGlobalTheme from "./mui.global.theme";
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import reducers from "../src/store/reducers";

export function getServerSideProps(){
  return {
    props: {
      name: "rian"
    }
  }
}

const store = createStore(reducers, applyMiddleware(thunk));

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Provider store={store}>
          <StylesProvider injectFirst>
            <ThemeProvider theme={MuiGlobalTheme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </StylesProvider>
        </Provider>
      </>
  );
}

export default MyApp;
