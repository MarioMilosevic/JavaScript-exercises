import BadTable from "./BadTable";
import issues from "./issues";

const App = () => {
  return (
    <div>
      <BadTable issues={issues} />
    </div>
  );
};

export default App;
