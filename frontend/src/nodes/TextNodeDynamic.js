import { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import { extractVariables } from '../utils/extractVariables';
import { useStore } from '../store';
import { theme } from './theme';

export const TextNodeDynamic = ({ id, data }) => {

  const updateNodeField = useStore(state => state.updateNodeField);

  const [text, setText] = useState(data?.text || "");
  const [variables, setVariables] = useState([]);

  useEffect(() => {
    setVariables(extractVariables(text));
    updateNodeField(id, "text", text);
  }, [text]);

  const width = Math.min(400, Math.max(220, text.length * 7));
  const height = Math.min(300, Math.max(120, 80 + variables.length * 25));

  return (
    <div style={{ ...theme.node, width, height }}>

     {/* Main Input Handle */}
<Handle
  type="target"
  position={Position.Left}
  id={`${id}-input`}
  style={{ top: 20 }}
/>

{/* Dynamic Variable Inputs */}
{variables.map((v, index) => (
  <Handle
    key={v}
    type="target"
    position={Position.Left}
    id={`${id}-${v}`}
    style={{ top: `${50 + index * 20}px` }}
  />
))}

{/* Output Handle */}
<Handle
  type="source"
  position={Position.Right}
  id={`${id}-output`}
  style={{ top: 40 }}
/>

      <div style={theme.title}>Text</div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          ...theme.input,
          height: '60%',
          resize: 'none'
        }}
      />

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />

    </div>
  );
};