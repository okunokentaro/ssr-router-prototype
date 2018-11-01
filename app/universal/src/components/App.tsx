import React from 'React';

const click = () => {
  window.location.href = 'a'
};

export default function App() {
  return (
    <div>
      <p>hello world</p>
      <button onClick={click}>button</button>
    </div>
  );
}
