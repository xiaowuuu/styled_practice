import Quotes from './Components/Quote';

function App() {
  return (
    <div className="App">
      <Quotes by="Bill Gates" source="https://www.microsoft.com" quote="640kb of memory ought to be enough for anyone" />
      <Quotes by="Steve Jobs" source="https://www.apple.com" quote="Don't let the noise of others' opinions drown out your own inner voice" />
    </div>
  );
}

export default App;