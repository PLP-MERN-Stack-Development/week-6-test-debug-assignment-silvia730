export default function BugList({ bugs, onDelete, onUpdate }) {
  return (
    <ul>
      {bugs.map(bug => (
        <li key={bug._id}>
          <h3>{bug.title}</h3>
          <p>{bug.description}</p>
          <select value={bug.status} onChange={(e) => onUpdate(bug._id, e.target.value)}>
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
          <button onClick={() => onDelete(bug._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
