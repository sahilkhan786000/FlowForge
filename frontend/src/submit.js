import { useStore } from './store';

export const SubmitButton = () => {

  const nodes = useStore(state => state.nodes);
  const edges = useStore(state => state.edges);

  const handleSubmit = async () => {

    const response = await fetch('http://localhost:8000/pipelines/parse', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nodes, edges })
    });

    const result = await response.json();

    alert(`
Pipeline Analysis:

Nodes: ${result.num_nodes}
Edges: ${result.num_edges}
Is DAG: ${result.is_dag ? "Yes" : "No"}
    `);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '16px',
      borderTop: '1px solid #E2E8F0',
      background: '#F8FAFC'
    }}>
      <button
        onClick={handleSubmit}
        style={{
          background: 'linear-gradient(135deg, #3B82F6, #6366F1)',
          color: '#fff',
          border: 'none',
          padding: '10px 24px',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-1px)';
          e.target.style.boxShadow = '0 6px 16px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0px)';
          e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        }}
      >
        Analyze Pipeline
      </button>
    </div>
  );
};