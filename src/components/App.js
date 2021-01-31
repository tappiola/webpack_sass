import './styles.css'
import './styles2.css'
import './index.scss'
import React, {Suspense, lazy, useEffect, useState} from "react";

const pandaGenerator = () => alert("panda");

const pr = new Promise((resolve, reject) => {
  Math.random() < 0.8 ? resolve("jiggly puff") : reject("sick puff")
});



const App = () => {
  const OtherPanda = lazy(() => import('./OtherPanda'));

  const [jigglyStatus, setJigglyStatus] = useState();
  const [pandaCounter, setPandaCounter] = useState(0);

  const pandaUp = () => setPandaCounter(pandaCounter => ++pandaCounter);

  useEffect(() => {pr
    .then(result => {
    console.log(result);
    setJigglyStatus(result);
  }).catch(e => setJigglyStatus(e));
  }, []);

  return <div>
    <button className="iggly" onClick={pandaGenerator}>Panda</button>
    <button className="jiggly" onClick={pandaUp}>Other panda</button>
    <div>Status: {jigglyStatus}</div>
    {pandaCounter > 5 &&
      <Suspense fallback="Loading...">
    <OtherPanda/>
    </Suspense>}
  </div>
}

export default App;
