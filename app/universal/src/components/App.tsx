import React from 'React';

const click = () => {
  console.log('onClick!');
};

export default function App() {
  return (
    <div>
      <p>hello world</p>
      <button onClick={click}>button</button>
    </div>
  );
}
