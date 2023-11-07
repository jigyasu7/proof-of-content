import React from 'react';

import Link from 'next/link';

export default function Login() {
  
  return (
    <div>
      <h1>Login</h1>
      {/* Login form */}
      <Link href="/register">Don't have an account? Register</Link>
    </div>
  );
}