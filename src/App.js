import { useEffect, useState } from "react";
import { getTodos } from "./services/index";

function App() {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    getTodos().then((res) => setServiceData(res.data));
    console.log(serviceData);
  }, []);

  return (
    <div className="App">
      <h1>Service result</h1>
      <hr />
      <ul>
        {serviceData.map((data) => (
          <li key={data.id}>
            title: {data.title},
            <br />
            userId: {data.userId}
            <br />
            completed: {data.completed ? "true" : "false"}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
