import React from 'react';
import { Check, Trash2 } from 'lucide-react';

/**
 * TaskCard — Requirement 2
 * Reusable component; receives task info via props from parent.
 * Displays title, category, and priority.
 */
export default function TaskCard({ task, onToggle, onDelete }) {
  const catClass = {
    'Academics': 'tag-academics',
    'Projects': 'tag-projects',
    'Campus Event': 'tag-events',
    'Exam Prep': 'tag-exams',
    'General': 'tag-general',
  }[task.category] ?? 'tag-general';

  const prioClass = {
    'High': 'tag-high',
    'Medium': 'tag-medium',
    'Low': 'tag-low',
  }[task.priority] ?? 'tag-medium';

  return (
    <div className={`task-card ${task.completed ? 'done' : ''}`}>
      <button
        className="check-box"
        onClick={() => onToggle(task.id)}
        aria-label={task.completed ? 'Mark pending' : 'Mark complete'}
      >
        {task.completed && <Check size={12} strokeWidth={3} />}
      </button>

      <div className="task-body">
        <div className="task-title">{task.title}</div>
        <div className="task-tags">
          <span className={`tag ${catClass}`}>{task.category}</span>
          <span className={`tag ${prioClass}`}>{task.priority}</span>
          <span className="task-time">{task.createdAt}</span>
        </div>
      </div>

      <button
        className="delete-btn"
        onClick={() => onDelete(task.id)}
        aria-label="Delete task"
      >
        <Trash2 size={14} />
      </button>
    </div>
  );
}
