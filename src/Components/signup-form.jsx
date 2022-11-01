import profile from "../Assets/profile.png";
import icon from "../Assets/icon.png";
import show from "../Assets/show.png";

export function SignUpForm() {
  return (
    <div className="signup-form">
      <div className="profile-detail">
        <p className="profile-btn-back">
          <img src={icon} alt="back" /> back
        </p>
        <img src={profile} className="img-rounded" alt="profile-pic" />
        <h4>Personal Account</h4>
        <h2>Andrew@polka.io</h2>
      </div>
      <div className="signup-form-container">
        <form>
          <label for="password">Password</label>
          <div className="flex-container">
            <input type="text" />
            <img src={show} alt="show" className="show-password-icon" />
          </div>
          <p>
            Forgot password?{" "}
            <a href="/" className="reset-password-link">
              Reset
            </a>
          </p>
          <div className="form-footer">
            <label for="stay-signed-in">
              <input type="checkbox" />
              <p> Stay signed in</p>
            </label>
            <button className="signup-form-submit-btn" type="submit">
              Sign In
            </button>
          </div>
        </form>
      </div>
      <p className="site-detail">
        This site is protected by reCAPTCHA and the Google Privacy Policy and
        Terms of Service apply.
      </p>
    </div>
  );
}
