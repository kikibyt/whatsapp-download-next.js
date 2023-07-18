import { useState } from "react";
import { Link } from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/users/login`, {
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
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br /><br />
        <button type="submit">Log In</button>
      </form>
      <p style={{ textAlign: "center" }}>
        You need An Account?{" "}
        <Link href="/signup">
          <span className='underline hover:text-blue'>Sign Up Here!</span>
        </Link>
      </p>
    </div>
  );
};

export default Login;

