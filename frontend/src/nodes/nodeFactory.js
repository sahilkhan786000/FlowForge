import { BaseNode } from './BaseNode';
import { nodeConfigs } from './nodeConfig';
import { TextNodeDynamic } from './TextNodeDynamic';

export const createNode = (type) => {
  return (props) => {
    if (type === "text") {
      return <TextNodeDynamic {...props} />;
    }
    const config = nodeConfigs[type];
    return <BaseNode {...props} config={config} />;
  };
};