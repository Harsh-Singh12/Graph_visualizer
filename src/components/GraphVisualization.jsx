import React from "react";
import Graph  from "react-vis-network-graph";
import { nodes,edges } from "./data";

const GraphVisualization = () => {
  
  const options = {
   nodes :{
    shape : "dot",
    
   },
    edges:{
      width : 0.15,
      layout: {
        hierarchical: true
      },
      edges: {
        color: "#000000"
      },
      height: "500px"
    
    },
    physics: false,
    interaction :{
      navigationButtons :true,
      tooltipDelay :200,
      hideEdgesOnDrag :true,
      hideEdgesOnZoom: true
    },
    height: "900px"
  };
var data = {nodes :nodes,edges : edges}
  return (
    <div>
      <Graph graph={data} options={options} />
    </div>
  );
};

export default GraphVisualization;
