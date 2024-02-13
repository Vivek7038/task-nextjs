"use client";

import React, { useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  MarkerType,
} from "reactflow";

import "reactflow/dist/style.css";
import { motion } from "framer-motion";}
const initialNodes = [
  { id: "A", position: { x: -99.5, y: 29 }, data: { label: "A" } },
  { id: "B", position: { x: 184, y: 34 }, data: { label: "B" } },
  { id: "C", position: { x: 34, y: 286 }, data: { label: "C" } },
];

const initialEdges = [
  {
    id: "eA-B",
    source: "A",
    target: "B",
    data: { label: "eA-B" },
    style: { stroke: "black", strokeWidth: 2, curve: "curveBasis" },
    markerEnd: {
      type: MarkerType.Arrow,
    },
  },
  {
    id: "eB-C",
    source: "B",
    target: "C",
    data: { label: "eB-C" },
    style: { stroke: "black", strokeWidth: 2, curve: "curveBasis" },
    markerEnd: {
      type: MarkerType.Arrow,
    },
  },
  {
    id: "eC-A",
    source: "C",
    target: "A",
    data: { label: "eC-A" },
    style: { stroke: "black", strokeWidth: 2, curve: "curveBasis" },
    markerEnd: {
      type: MarkerType.Arrow,
    },
  },
  {
    id: "eA-C",
    source: "A",
    target: "C",
    data: { label: "eA-C" },
    style: { stroke: "black", strokeWidth: 2, curve: "curveBasis" },
    markerEnd: {
      type: MarkerType.Arrow,
    },
  },
  {
    id: "eC-B",
    source: "C",
    target: "B",
    data: { label: "eC-B" },
    style: { stroke: "black", strokeWidth: 2, curve: "curveBasis" },
    markerEnd: {
      type: MarkerType.Arrow,
    },
  },
  {
    id: "eB-A",
    source: "B",
    target: "A",
    data: { label: "eB-A" },
    style: { stroke: "black", strokeWidth: 2, curve: "curveBasis" },
    markerEnd: {
      type: MarkerType.Arrow,
    },
  },
];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const nodeChange = (changedNode) => {
    console.log(
      `Node ${changedNode.id} - X: ${changedNode.position.x}, Y: ${changedNode.position.y}`
    );
  };

  const onNodeDragStop = (event, node) => {
    // Trigger nodeChange function when node position changes
    nodeChange(node);
  };

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeDragStop={onNodeDragStop}
        fitView
      >
        
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
