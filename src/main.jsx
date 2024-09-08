import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './components/Store/Store';
import { HashLoader} from 'react-spinners';
import { Auth0Provider, useAuth0  } from '@auth0/auth0-react';
import './index.css';

function Root() {
  const [Loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <React.StrictMode>
       <Auth0Provider
    domain="dev-w3ctgy1tqls5s3dl.uk.auth0.com"
    clientId="iDPPelyPJQWMRPbgLJ9ysudqawyN2SE7"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      {Loader ? (
        <>
          <HashLoader color="#ec3606"   size={100} margin={5} loading={true} />
        </>
      ) : (
        <>
          <Provider store={store}>
            <App />
          </Provider>
        </>
      )}
      </Auth0Provider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
