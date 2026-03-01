import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';
import { useStore } from '../store';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');
  const updateNodeField = useStore(s => s.updateNodeField);

  const handleNameChange = (e) => {
    const val = e.target.value;
    setCurrName(val);
    updateNodeField(id, 'outputName', val);
  };

  const handleTypeChange = (e) => {
    const val = e.target.value;
    setOutputType(val);
    updateNodeField(id, 'outputType', val);
  };

  return (
    <BaseNode
      id={id}
      label="Output"
      handles={[{ type: 'target', position: Position.Left, id: `${id}-value` }]}
      fields={[
        { name: 'name', label: 'Name', type: 'text', value: currName, onChange: handleNameChange },
        { name: 'type', label: 'Type', type: 'select', value: outputType, onChange: handleTypeChange, options: ['Text', 'Image'] },
      ]}
    />
  );
};