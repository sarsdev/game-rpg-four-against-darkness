import './App.css';
import classData from './../models/data/classes.json'
import { classModel } from './../models/classModel';

function App() {
  let class1 = new classModel();
  class1.loadData(classData[0]);

  return (
    <div>
      <label>
        {JSON.stringify(class1)}
      </label>
      <hr/>
      <label>
        {class1.name}
      </label>
    </div>
  );
}

export default App;