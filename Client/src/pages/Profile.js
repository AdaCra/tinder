import { useState } from "react";
import Nav from "../components/Nav";
import { useCookies } from 'react-cookie'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [ cookies, setCookie, removeCookie] = useCookies(null)
  
  const [formData, setFormData] = useState({
    user_id: cookies.UserId,
    first_name: "",
    surname: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    address_number: "",
    address_street: "",
    address_city: "",
    address_post_code: "",
    request_precheck: false,
    pet_interest: "cat",
    url: "",
    about: "",
    matches: [],
  });

const navigate = useNavigate()

const handleSubmit = async (e) => {
  console.log('submitted')
  e.preventDefault()
    try {
      const response = await axios.put('http://localhost:8000/user', {formData})
      const success = response.status === 200
      if (success) navigate('/dashboard')
    } catch (err) {
      console.log(err)
    }
  };


  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;    

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  return (
    <>
      <Nav
        minimal={true}
        setShowModal={() => {}}
        showModal={false}
        setIsSignUp={false}
      />
      <div className="profile">
        <h2>CREATE AN ACCOUNT</h2>

        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="first_name">Name</label>
            <input
              id="first_name"
              type="text"
              name="first_name"
              placeholder="First Name"
              required={true}
              value={formData.first_name}
              onChange={handleChange}
            />
            <input
              id="surname"
              type="text"
              name="surname"
              placeholder="Surname"
              required={true}
              value={formData.first_name}
              onChange={handleChange}
            />
            

            <label>Birthday</label>
            <div className="multiple-input-container">
              <input
                id="dob_day"
                type="number"
                name="dob_day"
                placeholder="DD"
                required={true}
                value={formData.dob_day}
                onChange={handleChange}
              />
              <input
                id="dob_month"
                type="number"
                name="dob_month"
                placeholder="MM"
                required={true}
                value={formData.dob_month}
                onChange={handleChange}
              />
              <input
                id="dob_year"
                type="number"
                name="dob_year"
                placeholder="YYYY"
                required={true}
                value={formData.dob_year}
                onChange={handleChange}
              />
            </div>

            <label>Address</label>
            <div className="address-input-container">
              <div>
                <input
                  id="address_number"
                  type="number"
                  name="address_number"
                  placeholder="#"
                  required={true}
                  value={formData.address_number}
                  onChange={handleChange}
                />
                <input
                  id="address_street"
                  type="text"
                  name="address_street"
                  placeholder="Street Name"
                  required={true}
                  value={formData.address_street}
                  onChange={handleChange}
                />
              </div>
              <input
                id="address_city"
                type="text"
                name="address_city"
                placeholder="City"
                required={true}
                value={formData.address_city}
                onChange={handleChange}
              />
              <input
                id="address_post_code"
                type="number"
                name="address_post_code"
                placeholder="Code"
                required={true}
                value={formData.address_post_code}
                onChange={handleChange}
              />
            </div>

            <label htmlFor="request_precheck">Request Home Precheck 
              <span className="hover-text">🛈
                <span className="tooltip-text" id="right">Prechecks speed up the adoption process. We will contact you to setup a suitable date.
                </span>
              </span>
            </label>
            

            <input
              id="request_precheck"
              type="checkbox"
              name="request_precheck"
              onChange={handleChange}
              checked={formData.request_precheck}
            />

            <label>I want to adopt</label>

            <div className="multiple-input-container">
              <input
                id="man-gender-interest"
                type="radio"
                name="gender_interest"
                value={formData.gender_interest === "man"}
                onChange={handleChange}
              />
              <label htmlFor="man-gender-interest">Cats</label>
              <input
                id="woman-gender-interest"
                type="radio"
                name="gender_interest"
                value="woman"
                onChange={handleChange}
                checked={formData.gender_interest === "woman"}
              />
              <label htmlFor="woman-gender-interest">Woman</label>
              <input
                id="everyone-gender-interest"
                type="radio"
                name="gender_interest"
                value="more"
                onChange={handleChange}
                checked={formData.gender_interest === "everyone"}
              />
              <label htmlFor="everyone-gender-interest">Everyone</label>
            </div>

            <label htmlFor="about">About me</label>
            <input
              id="about"
              type="text"
              name="about"
              required={true}
              placeholder="I like long walks..."
              value={formData.about}
              onChange={handleChange}
            />

            <input type="submit" />
          </section>

          <section>
            <label htmlFor="url">Profile Photo</label>
            <input
              type="url"
              name="url"
              id="url"
              onChange={handleChange}
              required={true}
            />
            <div className="photo-container">
              {formData.url && (<img src={formData.url} alt="profile pic preview" />
              )}
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default Profile;