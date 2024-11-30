import React, { useState, FormEvent } from 'react';
// import { Link } from 'react-router-dom';
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Add your login logic here
    console.log({ email, password });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-md-6 col-lg-5">
        <h2 className="text-center mb-4">Login to your account</h2>
        <div className="card shadow p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-muted">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3 position-relative">
              <label htmlFor="password" className="form-label text-muted">
                Password
              </label>
              <div className="input-group">
                <input
                  type={visible ? 'text' : 'password'}
                  className="form-control"
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="input-group-text bg-white border-0"
                  onClick={() => setVisible(!visible)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* {visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />} */}
                </span>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="remember-me"
                />
                <label className="form-check-label" htmlFor="remember-me">
                  Remember Me
                </label>
              </div>
              {/* <Link to="/forget-password" className="text-primary">
                Forget your password?
              </Link> */}
            </div>

            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>

            <div className="text-center">
              <p className="mb-0">
                Not have any account?{' '}
                {/* <Link to="/sign-up" className="text-primary">
                  Sign Up
                </Link> */}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
