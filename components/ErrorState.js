export default function ErrorState({ message, onRetry }) {
  return (
    <div>
      <p>{message}</p>
      {onRetry && <button onClick={onRetry}>Tentar novamente</button>}
    </div>
  );
}
