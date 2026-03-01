from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Edge(BaseModel):
    source: str
    target: str

class Node(BaseModel):
    id: str

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]


@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):

    node_ids = [node.id for node in pipeline.nodes]
    num_nodes = len(node_ids)

    # Clean valid edges only
    edges = [
        (edge.source, edge.target)
        for edge in pipeline.edges
        if edge.source in node_ids and edge.target in node_ids
    ]

    num_edges = len(edges)

    # Build adjacency list
    graph = {node: [] for node in node_ids}
    for src, tgt in edges:
        graph[src].append(tgt)

    visited = set()
    rec_stack = set()

    def dfs(node):
        visited.add(node)
        rec_stack.add(node)

        for neighbor in graph[node]:
            if neighbor not in visited:
                if dfs(neighbor):
                    return True
            elif neighbor in rec_stack:
                return True

        rec_stack.remove(node)
        return False

    is_dag = True
    for node in graph:
        if node not in visited:
            if dfs(node):
                is_dag = False
                break

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }