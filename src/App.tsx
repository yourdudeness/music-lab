import { Button } from "./shared/components/Button";
import { Input } from "./shared/components/Input";

function App() {
  return (
    <>
      <h1 className="text-3xl font-roboto underline">Hello world!</h1>
      <Button intent="accent">test</Button>
      <Input
        type="text"
        title="testings"
        id="45"
        required
        placeholder="privet"
      />
    </>
  );
}

export default App;
