import Button from './components/elements/button';
import { useState } from 'react';
import btnStyle from './components/elements/button/button.module.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="App">
      <div style={{ width: '400px' }}>
        <Button
          label="Buy Primary"
          loading={loading}
          className={[btnStyle.btn_secondary, btnStyle.btn_block].join(' ')}
          type="button"
          loadingText="Signing In..."
        />
      </div>
      Welcome to Algorand{' '}
    </div>
  );
};

export default App;
