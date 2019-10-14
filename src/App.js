import React from 'react';
import Fetch, {Error, Success, Loading} from '@react-items/fetch';

function App() {
  return (
    <div>
      <Fetch url={'https://clear-tasks-api.herokuapp.com'}>
        <Loading> <div>Loading ...</div> </Loading>
        <Success>
          {(response) =>
              <div>{JSON.stringify(response)}</div>
          }
        </Success>
        <Error>
          <div>Error</div>
        </Error>
      </Fetch>
    </div>
  );
}

export default App;
