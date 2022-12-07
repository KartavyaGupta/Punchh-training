import logo from './logo.svg';
import './App.css';
import Child from './child.js'
import Newchild from './newchild.js';
import Stateex from './stateex';
import Stateexcons from './stateexcons';
import Eventhandlinginclass from './eventhandlinginclass';
import Eventhandlinginstate from './eventhandlinginstate';
import Example from './setstate';
import Passingargs from './passingargs';
import Lifecycle from './lifecycle_mount';
function App() {
  return (
    <div>
      {/* <Child name="rahul" roll={201356193}/>       */}
     <Child >hello</Child> 
     <Newchild >hello</Newchild> 
     <Stateex roll="2013"/>
     <Stateexcons name="kartavya"/>
     <Eventhandlinginclass/>
     <Eventhandlinginstate/>
     <Example/>
     <Passingargs/>
     <Lifecycle/>
    </div>
  );
}
export default App;