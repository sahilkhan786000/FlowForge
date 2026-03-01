// // inputNode.js

// import { useState } from 'react';
// import { Handle, Position } from 'reactflow';

// export const InputNode = ({ id, data }) => {
//   const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
//   const [inputType, setInputType] = useState(data.inputType || 'Text');

//   const handleNameChange = (e) => {
//     setCurrName(e.target.value);
//   };

//   const handleTypeChange = (e) => {
//     setInputType(e.target.value);
//   };

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <div>
//         <span>Input</span>
//       </div>
//       <div>
//         <label>
//           Name:
//           <input 
//             type="text" 
//             value={currName} 
//             onChange={handleNameChange} 
//           />
//         </label>
//         <label>
//           Type:
//           <select value={inputType} onChange={handleTypeChange}>
//             <option value="Text">Text</option>
//             <option value="File">File</option>
//           </select>
//         </label>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-value`}
//       />
//     </div>
//   );

// }



// frontend/src/nodes/inputNode.js  
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