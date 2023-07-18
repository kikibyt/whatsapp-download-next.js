import { useState } from "react";
import { Link } from "next/link";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/users/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.status === 200) {
      const data = await response.json();
     console.log(data);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={setEmail}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={setPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
      <Link href="/">Login</Link>
    </div>
  );
};

export default SignUp;
