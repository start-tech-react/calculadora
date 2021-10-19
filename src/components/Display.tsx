import './Display.css';

interface DisplayProps {
  value: string
}

function Display({
  value
}: DisplayProps) {
  return (
    <div className="Display">{value}</div>
  );
}

export default Display;