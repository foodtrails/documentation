import React from 'react';

export default function Home() {
  // This will redirect to docs on the client side
  React.useEffect(() => {
    window.location.href = '/docs/';
  }, []);

  // For static generation, return a simple message
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <p>Redirecting to documentation...</p>
    </div>
  );
}
