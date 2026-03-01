// toolbar.js

import { DraggableNode } from './draggableNode';



export const PipelineToolbar = () => {
  return (
    <div style={{
      padding: '16px',
      background: '#F8FAFC',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <DraggableNode type='customInput' label='Input' />
        <DraggableNode type='llm' label='LLM' />
        <DraggableNode type='customOutput' label='Output' />
        <DraggableNode type='text' label='Text' />
        <DraggableNode type='math' label='Math' />
        <DraggableNode type='api' label='API' />
        <DraggableNode type='filter' label='Filter' />
        <DraggableNode type='delay' label='Delay' />
        <DraggableNode type='decision' label='Decision' />
      </div>
    </div>
  );
};