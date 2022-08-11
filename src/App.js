import { useRoutes } from 'react-router-dom';
import Themeroutes from './routes/Router';
import LoginComponent from './auth/LoginComponent';
import { useState } from 'react';

const mode = 'login';

const App = () => {
  const routing = useRoutes(Themeroutes);
  const [isLoggedIn, setIsLoggedIn] = useState(window.localStorage.getItem('token') ? true : false);

  if(window.localStorage.getItem('token') !== 'token'){
    // setIsLoggedIn(false);
  }
  return (
    <>
      {isLoggedIn && <div className='dark'>{routing}</div>}
      {!isLoggedIn && (
        <div className={`app app--is-${mode}`}>
          <LoginComponent
            mode={mode}
            onSubmit={function () {
              console.log('submit');
            }}
            setIsLoggedIn={setIsLoggedIn}
          />
        </div>
      )}
    </>
  );
};

export default App;
