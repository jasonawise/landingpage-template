import CallToAction from './Components/CallToAction';

function App() {
  return (
    <div className="flex sm:flex-col items-center">
      <CallToAction
        heading="I am the call to action"
        content="Sign Up For My Newsletter"
      />
      <div>Form</div>
    </div>
  );
}

export default App;
