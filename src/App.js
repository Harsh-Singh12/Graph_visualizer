import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import GraphVisualization from './components/GraphVisualization';
import { nodes,edges } from './components/data';

function App() {
    const [newnode,setNewnode] =useState('');
    const [newfrom,setNewFrom] =useState('');
    const [newto,setNewTo] = useState('');

    const [nodes,setNodes] =useState([]);
    const [edges,setEdges] = useState([])
    const handleAddnode =() =>{
          const newNodevalue = parseInt(newnode,10);
          if(!isNaN(newNodevalue)){
            const newNdes= {id:newNodevalue,label:`Node ${newNodevalue}`};
            setNodes([...nodes,newNdes]);
            setNewnode('')
          }
    }
    const handleAddEdge = () =>{
          const newFromvalue = parseInt(newfrom,10);
          const newTovlaue = parseInt(newto,10);
          if(!isNaN(newFromvalue) && !isNaN(newTovlaue)){
          const newEdge=  {from : newFromvalue, to:newTovlaue};
          setEdges([...edges,newEdge]);
            setNewFrom('');
            setNewTo('');
          }
    }
  
  return (
    <div className='container'>
    <div className='heading'>
   <h1>Hello welcome to Graph Visualizer</h1>
   <p>This is a Graph visualizer here you can see your graph in visual form</p>
    <form className='form'>
      <h3>Make Node</h3>
      <input type='number'  placeholder='node'value={newnode} onChange={(e)=>setNewnode(e.target.value)}/>
      <button type='submit'  onClick={handleAddnode}>AddNode</button>
      <h3> Edges</h3>
      <input type='number' placeholder='from' value={newfrom} onChange={(e) => setNewFrom(e.target.value)}/>
      <input  type='number' placeholder='to' value={newto} onChange={(e) => setNewTo(e.target.value)}/>
      <button type='submit' onClick={handleAddEdge}>AddEdge</button>
    </form>
   </div>
   <div className='graph'>
    <GraphVisualization/>
   </div>
   </div>
  );
}

export default App;


/*import React, { useState } from 'react';
import './App.css';
import GraphVisualization from './components/GraphVisualization';
import data from './data'; // Import your data

function App() {
  const [newNode, setNewNode] = useState(''); // State to store the new node value
  const [newEdgeFrom, setNewEdgeFrom] = useState(''); // State to store the new edge "from" value
  const [newEdgeTo, setNewEdgeTo] = useState(''); // State to store the new edge "to" value

  const handleAddNode = () => {
    const newNodeValue = parseInt(newNode, 10);

    if (!isNaN(newNodeValue)) {
      data.nodes.push({ id: newNodeValue, label: `Node ${newNodeValue}` });
      setNewNode(''); // Clear the input field
    }
  };

  const handleAddEdge = () => {
    const fromValue = parseInt(newEdgeFrom, 10);
    const toValue = parseInt(newEdgeTo, 10);

    if (!isNaN(fromValue) && !isNaN(toValue)) {
      data.edges.push({ from: fromValue, to: toValue });
      setNewEdgeFrom(''); // Clear the "from" input field
      setNewEdgeTo(''); // Clear the "to" input field
    }
  };

  return (
    <div className='container'>
      <div className='heading'>
        <h1>Hello welcome to Graph Visualizer</h1>
        <p>This is a Graph visualizer where you can see your graph in visual form.</p>
        <form className='form'>
          <h3>Make Node</h3>
          <input
            type='number'
            placeholder='node'
            value={newNode}
            onChange={(e) => setNewNode(e.target.value)}
          />
          <button type='button' onClick={handleAddNode}>Add Node</button>
          <h3>Edges</h3>
          <input
            type='number'
            placeholder='from'
            value={newEdgeFrom}
            onChange={(e) => setNewEdgeFrom(e.target.value)}
          />
          <input
            type='number'
            placeholder='to'
            value={newEdgeTo}
            onChange={(e) => setNewEdgeTo(e.target.value)}
          />
          <button type='button' onClick={handleAddEdge}>Add Edge</button>
        </form>
      </div>
      <div className='graph'>
        <GraphVisualization />
      </div>
    </div>
  );
}

export default App;
*/
