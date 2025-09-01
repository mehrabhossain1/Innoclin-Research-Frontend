"use client";

import { useEffect, useState } from 'react';

export default function TestPage() {
  const [tokenInfo, setTokenInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Test the debug endpoint
    fetch('/api/debug/token')
      .then(res => res.json())
      .then(data => {
        setTokenInfo(data);
        setLoading(false);
      })
      .catch(err => {
        setTokenInfo({ error: err.message });
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Authentication Test</h1>
      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify(tokenInfo, null, 2)}
      </pre>
    </div>
  );
}
