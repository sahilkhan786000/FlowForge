export const nodeConfigs = {

  customInput: {
    title: "Input",
    fields: [
      { name: "inputName", label: "Name", type: "text" },
      { name: "inputType", label: "Type", type: "select", options: ["Text", "File"] }
    ],
    outputs: [{ id: "value" }]
  },

  customOutput: {
    title: "Output",
    fields: [
      { name: "outputName", label: "Name", type: "text" },
      { name: "outputType", label: "Type", type: "select", options: ["Text", "Image"] }
    ],
    inputs: [{ id: "value" }]
  },

  llm: {
    title: "LLM",
    inputs: [{ id: "system" }, { id: "prompt" }],
    outputs: [{ id: "response" }]
  },

  text: {
    title: "Text",
    fields: [
      { name: "text", label: "Text", type: "text" }
    ],
    outputs: [{ id: "output" }]
  },

  // 🔥 New Nodes

  math: {
    title: "Math",
    inputs: [{ id: "a" }, { id: "b" }],
    outputs: [{ id: "result" }]
  },

  api: {
    title: "API",
    fields: [
      { name: "url", label: "URL", type: "text" }
    ],
    outputs: [{ id: "response" }]
  },

  filter: {
    title: "Filter",
    inputs: [{ id: "data" }],
    fields: [
      { name: "condition", label: "Condition", type: "text" }
    ],
    outputs: [{ id: "filtered" }]
  },

  delay: {
    title: "Delay",
    inputs: [{ id: "input" }],
    fields: [
      { name: "time", label: "Delay(ms)", type: "text" }
    ],
    outputs: [{ id: "output" }]
  },

  decision: {
    title: "Decision",
    inputs: [{ id: "input" }],
    fields: [
      { name: "rule", label: "Rule", type: "text" }
    ],
    outputs: [{ id: "yes" }, { id: "no" }]
  }

};