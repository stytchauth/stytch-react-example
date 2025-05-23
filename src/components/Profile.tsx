import { useStytch, useStytchSession, useStytchUser } from "@stytch/react";
import { useState } from "react";
import type { ReactElement } from "react";

/*
The Profile component is shown to a user that is logged in.

This component renders the full User and Session object for education. 

This component also includes a log out button which is accomplished by making a method call to revoking the existing session
*/
const Profile = (): ReactElement => {
  const stytch = useStytch();
  // Get the Stytch User object if available
  const { user } = useStytchUser();
  // Get the Stytch Session object if available
  const { session } = useStytchSession();
  const [apiMessage, setApiMessage] = useState<string>("");

  const callApi = async () => {
    const res = await fetch("/api/resources", { credentials: "include" });
    if (res.ok) {
      const data = await res.json();
      setApiMessage(data.message);
    } else {
      setApiMessage("Request failed");
    }
  };

  return (
    <div className="card">
      <h1>Profile</h1>
      <h2>User object</h2>
      <pre className="code-block">
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>

      <h2>Session object</h2>
      <pre className="code-block">
        <code>{JSON.stringify(session, null, 2)}</code>
      </pre>
      <p>
        You are logged in, and a Session has been created. The SDK stores the
        Session as a token and a JWT in the browser cookies as{" "}
        <span className="code">stytch_session</span> and{" "}
        <span className="code">stytch_session_jwt</span> respectively.
      </p>
      <button className="primary" onClick={callApi}>
        Call Protected API
      </button>
      {apiMessage && <p className="success">{apiMessage}</p>}
      {/* Revoking the session results in the session being revoked and cleared from browser storage. The user will return to Login */}
      <button className="primary" onClick={() => stytch.session.revoke()}>
        Log out
      </button>
    </div>
  );
};

export default Profile;
