import './App.css';
import { MyFuncComponent } from './components/MyFuncComponent';
import { MyClassComponent } from './components/MyClassComponent';
import { TestHooksComponent } from './components/TestHooksComponent';
import { TestUseEffects } from './components/TestUseEffects';
import { TestUseEffectWithDependency } from './components/TestUseEffectWithDependency';
import { useState } from 'react';

function App() {
  const [showTestUseEffects, setShowTestUseEffects] = useState(true)

  return (
    <div className="App">
      <MyClassComponent/>
      <MyFuncComponent/>
      <br />
      <br />
      <br />
      <TestHooksComponent/>
      <br />
      {showTestUseEffects ? 
      <TestUseEffects onHide={() => { setShowTestUseEffects(false) }}/> 
      : ""}
      <TestUseEffectWithDependency />
    </div>
  );
}

export default App;