import { useState } from "react";
import Nav from "../components/Nav";
import { useCookies } from 'react-cookie'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import figureHead from "../images/dummy-profile-pic-300x300.png"

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
    pet_interest: "",
    avatar: "",
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

  const maxDayInMonth = (month, year) =>{    
    if(month === 2 && year % 4 !== 0){
      return 28
    } else if(month === 2 && year % 4 === 0){
      return 29
    } else if(month === 4 || month === 6 || month === 9 || month === 11){
      return 30
    } else { 
      return 31
    }
  }
  
  const minYear = new Date().getFullYear() - 100
  const maxYear = new Date().getFullYear() - 18

  return (
    <>
      <Nav
        minimal={true}
        setShowModal={() => {}}
        showModal={false}
        setuserSignUp={false}
      />
      <div className="profile">
        <h2>Fill out your profile</h2>

        <form onSubmit={handleSubmit}>
          <section>
            <div className="photo-upload-container">
              <div className="photo-container">
                {formData.url ? <img  src={formData.avatar} alt="avatar" />
                : <img src={figureHead}/>} 
              </div>
              <input
                id="avatar"
                type="file"
                name="avatar"
                onChange={handleChange}
              />
              <label htmlFor="avatar" id="pic-upload-button">Upload</label>
              </div>

            <label htmlFor="first-name">Name</label>
            <div className="name-input">
            <input
              id="first-name"
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
              value={formData.surname}
              onChange={handleChange}
            />
            </div>

            <label>Birthday</label>
            <div className="multiple-input-container">
              <input
                id="dob_day"
                type="number"
                name="dob_day"
                placeholder="DD"
                min = "1"
                max = {maxDayInMonth(formData.dob_month, formData.dob_year)}
                required={true}
                value={formData.dob_day}
                onChange={handleChange}
              />
              <input
                id="dob_month"
                type="number"
                name="dob_month"
                placeholder="MM"
                min = "1"
                max = "12"
                required={true}
                value={formData.dob_month}
                onChange={handleChange}
              />
              <input
                id="dob_year"
                type="number"
                name="dob_year"
                placeholder="YYYY"
                min = {minYear}
                max = {maxYear}
                required={true}
                value={formData.dob_year}
                onChange={handleChange}
              />
            </div>

            <label>Address</label>
            <div className="address-input-container">
              <div className="street-address-container">
                <input
                  id="address_number"
                  type="text"
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
                type="text"
                name="address_post_code"
                placeholder="Code"
                required={true}
                value={formData.address_post_code}
                onChange={handleChange}
              />
            </div>

            <label htmlFor="request-precheck">Request Home Precheck 
              <input
                id="request-precheck"
                type="checkbox"
                name="request_precheck"
                onChange={handleChange}
                checked={formData.request_precheck}
              />
              <span className="hover-text">🛈
                <span className="tooltip-text" id="right">Prechecks speed up the adoption process. We will contact you to setup a suitable date.
                </span>
              </span>
            </label>

            <label className="adopt">I want to 
              <div className="inline-multiple-input-container"> 
                <input
                  id="i-want-to-adopt"
                  type="radio"
                  name="i-want-to"
                  value="adopt"
                  checked={formData.i_want_to === "adopt"}
                  onChange={handleChange}     />
                  <label htmlFor="i-want-to">Adopt</label>
                <input
                  id="i-want-to-foster"
                  type="radio"
                  name="i-want-to"
                  value="foster"
                  checked={formData.i_want_to === "foster"}
                  onChange={handleChange}     />
                  <label htmlFor="i-want-to">Foster</label>
              </div> a pet.
            </label>

            <div className="multiple-input-container">
              <input
                id="cat-pet-interest"
                type="radio"
                name="pet_interest"
                value="cat"
                checked={formData.pet_interest === "cat"}
                onChange={handleChange}     />
                <label htmlFor="cat-pet-interest">Cats</label>
                
              <input
                id="dog-pet-interest"
                type="radio"
                name="pet_interest"
                value="dog"
                checked={formData.pet_interest === "dog"}
                onChange={handleChange}     />
                <label htmlFor="dog-pet-interest">Dogs</label>
                
              <input
                id="both-pet-interest"
                type="radio"
                name="pet_interest"
                value="both"
                checked={formData.pet_interest === "both"}
                onChange={handleChange}     />
                <label htmlFor="both-pet-interest">All of Them</label>
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
        </form>
      </div>
    </>
  );
};

export default Profile;