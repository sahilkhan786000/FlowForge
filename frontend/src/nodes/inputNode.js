import { useState } from 'react';  
import { BaseNode } from './BaseNode';  
import { Position } from 'reactflow';  
import { useStore } from '../store';  
  
export const InputNode = ({ id, data }) => {  
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));  
  const [inputType, setInputType] = useState(data.inputType || 'Text');  
  const updateNodeField = useStore(s => s.updateNodeField);  
  
  const handleNameChange = (e) => {  
    const val = e.target.value;  
    setCurrName(val);  
    updateNodeField(id, 'inputName', val);  
  };  
  
  const handleTypeChange = (e) => {  
    const val = e.target.value;  
    setInputType(val);  
    updateNodeField(id, 'inputType', val);  
  };  
  
  return (  
    <BaseNode  
      id={id}  
      label="Input"  
      handles={[{ type: 'source', position: Position.Right, id: `${id}-value` }]}  
      fields={[  
        { name: 'name', label: 'Name', type: 'text', value: currName, onChange: handleNameChange },  
        { name: 'type', label: 'Type', type: 'select', value: inputType, onChange: handleTypeChange, options: ['Text', 'File'] },  
      ]}  
    />  
  );  
};