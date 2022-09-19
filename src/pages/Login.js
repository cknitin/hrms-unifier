import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    if (!phoneNumber || !password) return;
    setUser({ password: password, phoneNumber: phoneNumber });

    const token = await loginUser(phoneNumber, password);
    localStorage.setItem("token", JSON.stringify(token));

    navigate("/dashboard");
  };

  async function loginUser(phoneNumber, password) {
    try {
      const resp = await axios.post("http://localhost:8080/Api/Login", {
        Type: "PhoneNumber",
        PhoneNumber: phoneNumber,
        Password: password
      });

      return resp.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="section">
      <form className="form" onSubmit={handleSubmit}>
        <h5>login</h5>

        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Mobile Number
          </label>
          <input
            type="text"
            className="form-input"
            id="email"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          login
        </button>
      </form>
    </section>
  );
};
export default Login;
