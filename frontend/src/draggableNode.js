export const DraggableNode = ({ type, label }) => {

  const onDragStart = (event) => {
    const appData = { nodeType: type }
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
    event.currentTarget.style.cursor = 'grabbing';
  };

  return (
    <div
      onDragStart={onDragStart}
      onDragEnd={(e) => e.currentTarget.style.cursor = 'grab'}
      style={{
        cursor: 'grab',
        minWidth: '90px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        background: 'linear-gradient(135deg, #1C2536, #2E3B55)',
        color: '#fff',
        fontWeight: 500,
        boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
        transition: 'transform 0.2s ease'
      }}
      draggable
    >
      {label}
    </div>
  );
};