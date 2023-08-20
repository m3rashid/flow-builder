import { useState } from 'react';
import { Button, Input } from 'antd';

const App = () => {
  const [text, setText] = useState('');

  const handleSend = async () => {
    if (!text) {
      window.alert('Please enter a message');
      return;
    }

    const req = await fetch('http://localhost:4000/run-code', {
      method: 'POST',
      body: JSON.stringify({
        code: text,
      }),
    });

    if (!req.ok) {
      window.alert('Something went wrong');
      return;
    }
    const res = await req.json();
    console.log(res);
  };

  return (
    <div className='p-2'>
      <Input.TextArea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={10}
      ></Input.TextArea>
      <Button onClick={handleSend}>Send</Button>
    </div>
  );
};

export default App;
