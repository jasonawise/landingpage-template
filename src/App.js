import CallToAction from './Components/CallToAction';
import Form from './Components/Form';

function App() {
  return (
    <div className="flex sm:flex-col items-center">
      <CallToAction
        heading="I am the call to action"
        content="Sign Up For My Newsletter"
      />
      <Form />
    </div>
  );
}

export default App;
