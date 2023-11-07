import Link from 'next/link';

export default function Register() {
  
  return (
    <div>
      <h1>Register</h1>
      {/* Registration form */}
      <Link href="/login">Already have an account? Log in</Link>
    </div>
  );
}