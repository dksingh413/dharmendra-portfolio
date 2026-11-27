// Shown instantly while a page loads during navigation.
export default function Loading() {
  return (
    <div className="skel-page" role="status" aria-live="polite" aria-label="Loading">
      <div className="skel-bar">
        <span className="skel skel-dot" />
        <span className="skel" style={{ width: 120, height: 16 }} />
      </div>
      <div className="skel-body">
        <span className="skel" style={{ width: 140, height: 12 }} />
        <span className="skel" style={{ width: '82%', height: 44 }} />
        <span className="skel" style={{ width: '64%', height: 44 }} />
        <span className="skel" style={{ width: '90%', height: 14, marginTop: 8 }} />
        <span className="skel" style={{ width: '70%', height: 14 }} />
        <div className="skel-cards">
          <span className="skel skel-card" />
          <span className="skel skel-card" />
          <span className="skel skel-card" />
        </div>
      </div>
    </div>
  )
}
