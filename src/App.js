import React, { useState } from 'react'

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [adress, setAdress] = useState('');
  const [country, setCountry] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleAdress = (e) => setAdress(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleCountry = (e) => setCountry(e.target.value);
  const handleCheckbox = (e) => setCheckbox(!checkbox);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  }
  const handleBack = () => {
    setSubmit(false);
  }
  return (
    <>
    {/* Table after submit */}
    {submit && (<div>
      <button type="button" onClick={handleBack} className="btn btn-primary">Back</button>
      <table className="table">
        <tbody>
          <tr>
            <td>acceptRules</td>
            <td>{checkbox.toString()}</td>
          </tr>
          <tr>
            <td>address</td>
            <td>{adress}</td>
          </tr>
          <tr>
            <td>city</td>
            <td>{city}</td>
          </tr>
          <tr>
            <td>country</td>
            <td>{country}</td>
          </tr>
          <tr>
            <td>email</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>password</td>
            <td>{password}</td>
          </tr>
        </tbody>
      </table>
    </div>)
    }
    {/* Filling form */}
    {submit || (<form name="myForm" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="email" className="col-form-label">Email</label>
          <input type="email" onChange={handleEmail} value={email} name="email" className="form-control" id="email" placeholder="Email" />
        </div>
        <div className="form-group col-md-6">
            <label htmlFor="password" className="col-form-label">Password</label>
          <input type="password" onChange={handlePassword} value={password} name="password" className="form-control" id="password" placeholder="Password" />
        </div>
      </div>
      <div className="form-group">
          <label htmlFor="address" className="col-form-label">Address</label>
        <textarea type="text" onChange={handleAdress} value={adress} className="form-control" name="address" id="address" placeholder="1234 Main St"></textarea>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
            <label htmlFor="city" className="col-form-label">City</label>
          <input type="text" onChange={handleCity} value={city} className="form-control" name="city" id="city" />
        </div>
        <div className="form-group col-md-6">
            <label htmlFor="country" className="col-form-label">Country</label>
          <select id="country" onChange={handleCountry} value={country} name="country" className="form-control">
            <option>Choose</option>
            <option value="argentina">Argentina</option>
            <option value="russia">Russia</option>
            <option value="china">China</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <div className="form-check">
            <label className="form-check-label" htmlFor="rules">
            <input id="rules" onChange={handleCheckbox} checked={checkbox} type="checkbox" name="acceptRules" className="form-check-input" />
            Accept Rules
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Sign in</button>
    </form>
    )}
    </>
  );
}

export default App;
