import Layout from '../_layout/layout';
import '../styles/reset.css';
import '../styles/globals.scss';

function MyApp( { Component, pageProps } ) {
  return (
    <Layout>
      <Component { ...pageProps } />
    </Layout>
  )
}

export default MyApp;