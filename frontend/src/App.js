import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div style={{
      height: "100vh",
      background: "linear-gradient(180deg, #0F172A, #1E293B)",
      display: "flex",
      flexDirection: "column"
    }}>
      
      <PipelineToolbar />

      <div style={{
        flex: 1,
        padding: "16px",
        overflow: "hidden"
      }}>
        <PipelineUI />
      </div>

      <SubmitButton />

    </div>
  );
}

export default App;