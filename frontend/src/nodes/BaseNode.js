import { Handle, Position } from 'reactflow';
import { useStore } from '../store';
import { theme } from './theme';

export const BaseNode = ({ id, data, config }) => {

  const updateNodeField = useStore(state => state.updateNodeField);

  const handleChange = (field, value) => {
    updateNodeField(id, field, value);
  };

  return (
    <div style={theme.node}>

      {config.inputs?.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{ top: `${(index + 1) * 30}px` }}
        />
      ))}

      <div style={theme.title}>{config.title}</div>

      {config.fields?.map(field => (
        <div key={field.name}>
          <label>
            {field.label}
            {field.type === 'text' && (
              <input
                style={theme.input}
                value={data[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            )}
            {field.type === 'select' && (
              <select
                style={theme.select}
                value={data[field.name] || field.options[0]}
                onChange={(e) => handleChange(field.name, e.target.value)}
              >
                {field.options.map(opt => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            )}
          </label>
        </div>
      ))}

      {config.outputs?.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{ top: `${(index + 1) * 30}px` }}
        />
      ))}

    </div>
  );
};