import React, { useState } from "react";

const SignupForm: React.FC<{ toggle: () => void }> = ({ toggle }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add signup logic here
    alert("Account created! You can now log in.");
    toggle();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Sign Up</button>
      <p onClick={toggle}>Already have an account? Login</p>
    </form>
  );
};

export default SignupForm;
