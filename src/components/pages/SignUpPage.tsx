const GoogleMark = () => (
  <svg className="google-mark" viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.2 0 6 1.1 8.2 3.2l6.1-6.1C34.6 3.1 29.7 1 24 1 14.6 1 6.6 6.4 2.7 14.2l7.1 5.5C11.7 13.8 17.3 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.2 24.5c0-1.4-.1-2.4-.3-3.6H24v6.8h12.8c-.3 2-1.6 5-4.4 7.1l6.8 5.3c4-3.7 6.3-9.2 6.3-15.6z" />
    <path fill="#FBBC05" d="M9.8 28.6c-.5-1.4-.8-2.8-.8-4.6s.3-3.2.7-4.6l-7.1-5.5C1.2 16.7.4 20.2.4 24c0 3.8.8 7.3 2.2 10.1l7.2-5.5z" />
    <path fill="#34A853" d="M24 46.5c5.7 0 10.5-1.9 14-5.2l-6.8-5.3c-1.8 1.3-4.2 2.3-7.2 2.3-6.7 0-12.3-4.3-14.2-10.2l-7.2 5.5C6.6 41.6 14.6 46.5 24 46.5z" />
  </svg>
);

export default function SignUpPage() {
  return (
    <section className="auth-wrap">
      <div className="auth-hero">
        <h1>Create your account.</h1>
        <p>Join to save your cart, store your shipping info, and get early access to new arrivals.</p>
      </div>

      <div className="auth-card" aria-label="Sign up form">
        <h2 className="auth-title">Sign Up</h2>
        <p className="auth-subtitle">It only takes a minute.</p>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="auth-field">
            <label htmlFor="signup-name">Full name</label>
            <input id="signup-name" className="auth-input" type="text" autoComplete="name" placeholder="Your name" required />
          </div>
          <div className="auth-field">
            <label htmlFor="signup-email">Email</label>
            <input id="signup-email" className="auth-input" type="email" autoComplete="email" placeholder="name@email.com" required />
          </div>
          <div className="auth-field">
            <label htmlFor="signup-password">Password</label>
            <input id="signup-password" className="auth-input" type="password" autoComplete="new-password" placeholder="Create a password" required />
          </div>

          <div className="auth-actions">
            <button className="btn btn-primary-solid" type="submit">
              <span className="material-symbols-rounded">person_add</span>
              Create Account
            </button>
            <a className="btn btn-outline" href="/sign-in" style={{ textDecoration: "none" }}>
              <span className="material-symbols-rounded">login</span>
              Sign In
            </a>
          </div>

          <button className="btn btn-google" type="button" aria-label="Sign up with Google">
            <GoogleMark />
            Continue with Google
          </button>
        </form>

        <p className="auth-meta">
          By creating an account, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </section>
  );
}
