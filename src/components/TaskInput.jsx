import React, { useState } from 'react';
import { Plus } from 'lucide-react';

/**
 * TaskInput — Requirement 3
 * Input field + category/priority selects + Add Task button with onSubmit handler.
 * Adds tasks without page refresh via useState updater in parent.
 */
export default function TaskInput({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Academics');
  const [priority, setPriority] = useState('Medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddTask({ title: title.trim(), category, priority });
    setTitle('');
  };

  return (
    <div className="panel">
      <div className="panel-header">New Task</div>

      <form onSubmit={handleSubmit} className="form-stack">
        <div className="form-field">
          <label className="field-label" htmlFor="task-title">Title</label>
          <input
            id="task-title"
            type="text"
            className="field-input"
            placeholder="What needs to be done?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-field">
          <label className="field-label" htmlFor="task-category">Category</label>
          <select
            id="task-category"
            className="field-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Academics">Academics</option>
            <option value="Projects">Projects</option>
            <option value="Campus Event">Campus Event</option>
            <option value="Exam Prep">Exam Prep</option>
            <option value="General">General</option>
          </select>
        </div>

        <div className="form-field">
          <label className="field-label" htmlFor="task-priority">Priority</label>
          <select
            id="task-priority"
            className="field-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <button type="submit" className="btn-add">
          <Plus size={16} />
          Add Task
        </button>
      </form>
    </div>
  );
}
