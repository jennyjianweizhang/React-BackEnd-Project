// ** Next Imports
import Head from "next/head";
import { Router } from "next/router";

// ** Loader Import
import NProgress from "nprogress";

// ** Emotion Imports
import { CacheProvider } from "@emotion/react";

// ** Config Imports
import themeConfig from "src/configs/themeConfig";

// ** Component Imports
import UserLayout from "src/layouts/UserLayout";
import ThemeComponent from "src/@core/theme/ThemeComponent";

// ** Contexts
import {
  SettingsConsumer,
  SettingsProvider,
} from "src/@core/context/settingsContext";

// ** Utils Imports
import { createEmotionCache } from "src/@core/utils/create-emotion-cache";

// ** React Perfect Scrollbar Style
import "react-perfect-scrollbar/dist/css/styles.css";
import 'react-quill/dist/quill.snow.css';
// ** Global css styles
import "../../styles/globals.css";

import { Provider } from "react-redux";
import store, { persistor } from "src/store/store";
import { PersistGate } from "redux-persist/integration/react";

const clientSideEmotionCache = createEmotionCache();

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeError", () => {
    NProgress.done();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
}

// ** Configure JSS & ClassName
const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // Variables
  const getLayout =
    Component.getLayout ?? ((page) => <UserLayout>{page}</UserLayout>);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CacheProvider value={emotionCache}>
          <Head>
            <title>{`${themeConfig.templateName} - React Admin Dashboard`}</title>
            <meta
              name="description"
              content={`${themeConfig.templateName} – React Admin Dashboard – is the most developer friendly & highly customizable Admin Dashboard based on MUI v5.`}
            />
            <meta
              name="keywords"
              content="MUI, Admin, React Admin, Dashboard"
            />
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>

          <SettingsProvider>
            <SettingsConsumer>
              {({ settings }) => {
                return (
                  <ThemeComponent settings={settings}>
                    {getLayout(<Component {...pageProps} />)}
                  </ThemeComponent>
                );
              }}
            </SettingsConsumer>
          </SettingsProvider>
        </CacheProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
