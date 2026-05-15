const GoogleMark = () => (
  <svg className="google-mark" viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.2 0 6 1.1 8.2 3.2l6.1-6.1C34.6 3.1 29.7 1 24 1 14.6 1 6.6 6.4 2.7 14.2l7.1 5.5C11.7 13.8 17.3 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.2 24.5c0-1.4-.1-2.4-.3-3.6H24v6.8h12.8c-.3 2-1.6 5-4.4 7.1l6.8 5.3c4-3.7 6.3-9.2 6.3-15.6z" />
    <path fill="#FBBC05" d="M9.8 28.6c-.5-1.4-.8-2.8-.8-4.6s.3-3.2.7-4.6l-7.1-5.5C1.2 16.7.4 20.2.4 24c0 3.8.8 7.3 2.2 10.1l7.2-5.5z" />
    <path fill="#34A853" d="M24 46.5c5.7 0 10.5-1.9 14-5.2l-6.8-5.3c-1.8 1.3-4.2 2.3-7.2 2.3-6.7 0-12.3-4.3-14.2-10.2l-7.2 5.5C6.6 41.6 14.6 46.5 24 46.5z" />
  </svg>
);

export default function SignInPage() {
  return (
    <section className="auth-wrap">
      <div className="auth-hero">
        <h1>Welcome back.</h1>
        <p>Sign in to save your favorites, track orders, and checkout faster across all your devices.</p>
      </div>

      <div className="auth-card" aria-label="Sign in form">
        <h2 className="auth-title">Sign In</h2>
        <p className="auth-subtitle">Use your email and password.</p>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="auth-field">
            <label htmlFor="signin-email">Email</label>
            <input id="signin-email" className="auth-input" type="email" autoComplete="email" placeholder="name@email.com" required />
          </div>
          <div className="auth-field">
            <label htmlFor="signin-password">Password</label>
            <input id="signin-password" className="auth-input" type="password" autoComplete="current-password" placeholder="••••••••" required />
          </div>

          <div className="auth-actions">
            <button className="btn btn-primary-solid" type="submit">
              <span className="material-symbols-rounded">login</span>
              Sign In
            </button>
            <button className="btn btn-outline" type="button">
              <span className="material-symbols-rounded">help</span>
              Forgot password
            </button>
          </div>

          <button className="btn btn-google" type="button" aria-label="Continue with Google">
            <GoogleMark />
            Continue with Google
          </button>
        </form>

        <p className="auth-meta">
          Don&rsquo;t have an account?
          <a href="/sign-up"> Create one</a>
        </p>
      </div>
    </section>
  );
}
