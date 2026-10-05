import React, { useState, useEffect } from 'react';
import TaskCard from './components/TaskCard';
import TaskInput from './components/TaskInput';
import TaskStats from './components/TaskStats';
import ThemeToggle from './components/ThemeToggle';
import { Search } from 'lucide-react';

const SEED_TASKS = [
  { id: '1', title: 'Submit React Assignment #1', category: 'Academics', priority: 'High', completed: false, createdAt: '10:00' },
  { id: '2', title: 'Prepare midterm presentation slides', category: 'Projects', priority: 'Medium', completed: false, createdAt: '11:30' },
  { id: '3', title: 'Register for campus hackathon', category: 'Campus Event', priority: 'High', completed: true, createdAt: '13:15' },
  { id: '4', title: 'Review graph algorithm lecture notes', category: 'Exam Prep', priority: 'Low', completed: false, createdAt: '14:45' },
];

/** Read persisted tasks from localStorage, fall back to seed data on first run. */
function loadTasks() {
  try {
    const raw = localStorage.getItem('ctb_tasks');
    return raw ? JSON.parse(raw) : SEED_TASKS;
  } catch {
    return SEED_TASKS;
  }
}

const CATEGORIES = ['All', 'Academics', 'Projects', 'Campus Event', 'Exam Prep', 'General'];

export default function App() {
  // Requirement 1 — tasks stored in useState
  const [tasks, setTasks] = useState(loadTasks);
  const [theme, setTheme] = useState('dark');
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [logLine, setLogLine] = useState('');

  // Requirement 4 — useEffect runs whenever task list changes
  // Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('ctb_tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Requirement 4 — log to console on every task list change
  useEffect(() => {
    console.log('Task list updated!');
    console.log('Total number of tasks:', tasks.length);
    setLogLine(`Task list updated — total: ${tasks.length}`);
  }, [tasks]);

  // Requirement 3 — add task handler updates useState
  const handleAdd = ({ title, category: cat, priority }) => {
    const now = new Date();
    setTasks(prev => [
      {
        id: Date.now().toString(),
        title,
        category: cat,
        priority,
        completed: false,
        createdAt: `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`,
      },
      ...prev,
    ]);
  };

  const handleToggle = (id) =>
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));

  const handleDelete = (id) =>
    setTasks(prev => prev.filter(t => t.id !== id));

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
  };

  // Filtered view
  const visible = tasks.filter(t => {
    const matchCat = category === 'All' || t.category === category;
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const completed = tasks.filter(t => t.completed).length;

  return (
    <div className="app-shell">
      {/* Header */}
      <header className="app-header">
        <div>
          <div className="brand-title">Campus Task Board</div>
          <div className="brand-sub">CLO-1 — React Fundamentals Assignment</div>
        </div>

        <div className="header-right">
          <span className="task-count-badge">{tasks.length} tasks</span>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </header>

      {/* Grid */}
      <div className="main-grid">
        {/* Left — Requirement 3: input form */}
        <aside>
          <TaskInput onAddTask={handleAdd} />
        </aside>

        {/* Right — stats + task list */}
        <main className="panel">
          {/* Stats — Requirement 1 derived counts, all real */}
          <TaskStats
            total={tasks.length}
            completed={completed}
            pending={tasks.length - completed}
          />

          {/* Search + filter */}
          <div className="controls-row">
            <div className="search-wrap">
              <Search size={15} />
              <input
                type="text"
                className="field-input"
                placeholder="Search tasks..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <div className="filter-row">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  className={`filter-btn ${category === cat ? 'active' : ''}`}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Requirement 1 & 2 — .map() with unique key, TaskCard via props */}
          <div className="task-list">
            {visible.length > 0 ? (
              visible.map(task => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onToggle={handleToggle}
                  onDelete={handleDelete}
                />
              ))
            ) : (
              <div className="empty-state">No tasks match your filters.</div>
            )}
          </div>

          {/* Requirement 4 indicator — shows last console.log output */}
          <div className="console-bar">
            <span className="console-dot" />
            <span>{logLine || 'Waiting for task update…'}</span>
          </div>
        </main>
      </div>
    </div>
  );
}
