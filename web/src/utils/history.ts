import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

history.listen(location => {
  // Analytics
});

export default history;
