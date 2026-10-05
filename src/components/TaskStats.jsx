import React from 'react';

/**
 * TaskStats — shows real counts from actual task state.
 * No fake numbers. All values come from props.
 */
export default function TaskStats({ total, completed, pending }) {
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <>
      <div className="stats-row">
        <div className="stat-cell">
          <div className="stat-num">{total}</div>
          <div className="stat-label">Total</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num">{pending}</div>
          <div className="stat-label">Pending</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num">{completed}</div>
          <div className="stat-label">Done</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num">{pct}%</div>
          <div className="stat-label">Complete</div>
        </div>
      </div>

      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
    </>
  );
}
