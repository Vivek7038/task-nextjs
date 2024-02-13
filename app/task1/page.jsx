"use client";

import React, { useCallback, useEffect, useState } from "react";
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
import { motion, useAnimation } from "framer-motion";
import { FaFileAlt } from "react-icons/fa";

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
  const [animationControls, setAnimationControls] = useState(null);
  const fileIconAnimationControls = useAnimation();
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

  const animateFileIconAlongEdge = async () => {
    await fileIconAnimationControls.start({
      x: 78,
      y: 89,
      transition: { duration: 2 },
    });
  };

  useEffect(() => {
    animateFileIconAlongEdge();
  }, []); // Run the animation when component mounts

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
        <motion.div
          style={{
            position: "absolute",
          }}
          animate={fileIconAnimationControls}
          className="z-[999999]"
        >
          <FaFileAlt size={30} color="blue" />
        </motion.div>

        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
