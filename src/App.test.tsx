import * as ReactDOMClient from 'react-dom/client';
import App from './App';

test('renders main app component', () => {
  const div = document.createElement("div");
  const root = ReactDOMClient.createRoot(div);
  root.render(<App></App>);
});
