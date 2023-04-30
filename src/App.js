import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"


function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-12">
          <div className="nav-bar">
            <div className="nav-bar-logo">
              <a href="/">
                <span className="logo-container">
                  <svg class="svg" width="32" height="32" fill="#fff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 11c0-1.657 1.343-3 3-3h5c1.657 0 3 1.343 3 3 0 1.043-.533 1.963-1.341 2.5.808.537 1.341 1.457 1.341 2.5 0 1.657-1.343 3-3 3-.768 0-1.47-.289-2-.764V21c0 1.657-1.343 3-3 3-1.657 0-3-1.343-3-3 0-1.044.533-1.962 1.341-2.5-.808-.538-1.341-1.456-1.341-2.5 0-1.043.533-1.963 1.341-2.5-.808-.537-1.341-1.457-1.341-2.5zm3 2c-1.105 0-2-.895-2-2 0-1.105.895-2 2-2h2v4h-2zm2 1h-2c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2h2v-4zm0 5h-2c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2 1.105 0 2-.895 2-2v-2zm3-5c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2 1.105 0 2-.895 2-2 0-1.105-.895-2-2-2zm0-1c1.105 0 2-.895 2-2 0-1.105-.895-2-2-2h-2v4h2z" fill-rule="evenodd" fill-opacity="1" fill="#FFF" stroke="none"></path></svg>
                </span>
              </a>

            </div>

          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <div className="left-layer">

          </div>
        </div>
        <div className="col-6">
          <div className="modal-layer">
            <form className="layer-form">
              <div className="auth-form-header">
                Want to check out this file? Log in or sign up
              </div>
              <div className="auth-form-error">

              </div>
              <button className="google-button" use="hollow" data-no-auto-focus="true">
                <div className="google-button-inner">

                  <span className="icon-spa">
                    <svg class="svg" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill-rule="evenodd" fill-opacity="1" fill="#4285f4" stroke="none"></path><path d="M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z" fill-rule="evenodd" fill-opacity="1" fill="#34a853" stroke="none"></path><path d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill-rule="evenodd" fill-opacity="1" fill="#fbbc05" stroke="none"></path><path d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z" fill-rule="evenodd" fill-opacity="1" fill="#ea4335" stroke="none"></path></svg>
                  </span>

                  <div className="google-button-text">
                    Continue with Google
                  </div>

                </div>

              </button>

              <span className="sign-in-up">or</span>

              <input className="basic-form-name" name="email" placeholder="Email" type="email" id="email" autocomplete="username" autocapitalize="off" autocorrect="off" dir="auto" value=""></input>
              <div style={{ height: "16px" }}></div>
              <input class="basic-form-password" name="password" type="password" placeholder="Password" autocapitalize="off" autocorrect="off" autocomplete="current-password" id="current-password" dir="auto" value=""></input>
              <div style={{ height: "16px" }}></div>
              <div style={{ height: "16px" }}></div>
              <button type="submit" className="auth-view-button">Create account</button>
              <div style={{ height: "16px" }}></div>
              <div className="terms">
                <span className="term-text">By clicking "Create account" or "Continue with Google", you agree to the <a style={{ textDecoration: "none" }} target="_blank" rel="noopener" className="sign_in_and_up--termsLink--FmLXT" tabindex="-1" href="/">Figma TOS</a> and <a style={{ textDecoration: "none" }} target="_blank" rel="noopener" className="sign_in_and_up--termsLink--FmLXT" tabindex="-1" href="/">Privacy Policy</a>.</span>

                <div style={{ height: "16px" }}></div>
              </div>
              <div className="form-footer">
                <div className="form-alt-footer"><a style={{ fontSize: "16px", textDecoration: "none" }} href="/" className="basic-footr" rel="noopener">Use single sign-on</a></div>

                <div style={{ height: "16px" }}></div>

                <div className="sign-alt-footer"><div className="sign-alt-alt-footer">Already have an account?<a style={{fontSize:"16px",textDecoration:"none"}} href="/" tabindex="-1" className="sign-hyp-alt">Log in</a></div></div>
              </div>
            </form>

          </div>
        </div>
        <div className="col-3">
          <div className="right-layer">

          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
