import React from "react"

export var nodes=[
    { id: 1, label: "Node 1" },
      { id: 2, label: "Node 2" },
      { id: 3, label: "Node 3" },
      { id: 4, label: "Node 4" },
      { id: 5, label: "Node 5" }
];
export var edges=[
    { from: 1, to: 3 },
      { from: 2, to: 5 },
      { from: 5, to: 4 },
      { from: 4, to: 2 },
      { from: 5, to: 1 },
      { from: 3, to: 4 },
       {from : 4, to:3}
];
