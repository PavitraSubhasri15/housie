import React, { useState } from 'react';

function Resume() {
  const [selectedSection, setSelectedSection] = useState('');
  const [formData, setFormData] = useState({
    photo: '',
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    dateOfBirth: '',
    school: '',
    college: '',
    educationPeriod: '',
    educationDescription: '',
    position: '',
    employmentPeriod: '',
    skillName: '',
    skillExperience: '',
    languageName: '',
    languageProficiency: '',
    hobbyName: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can do whatever you want with the form data, like sending it to a server
    console.log(formData);
  };

  const renderForm = () => {
    switch (selectedSection) {
      case 'personalDetails':
        return (
          <div>
            <h2>Personal Details</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="file"
                name="photo"
                onChange={handleInputChange}
                placeholder="Upload Photo"
              />
              <input
                type="text"
                name="firstName"
                onChange={handleInputChange}
                placeholder="First Name"
              />
              <input
                type="text"
                name="lastName"
                onChange={handleInputChange}
                placeholder="Last Name"
              />
              <input
                type="text"
                name="address"
                onChange={handleInputChange}
                placeholder="Address"
              />
              <input
                type="text"
                name="phoneNumber"
                onChange={handleInputChange}
                placeholder="Phone Number"
              />
              <input
                type="date"
                name="dateOfBirth"
                onChange={handleInputChange}
                placeholder="Date of Birth"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        );
      case 'education':
        return (
          <div>
            <h2>Education</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="school"
                onChange={handleInputChange}
                placeholder="School"
              />
              <input
                type="text"
                name="college"
                onChange={handleInputChange}
                placeholder="College"
              />
              <input
                type="text"
                name="educationPeriod"
                onChange={handleInputChange}
                placeholder="Period of Education"
              />
              <textarea
                name="educationDescription"
                onChange={handleInputChange}
                placeholder="Description"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        );
      case 'employment':
        return (
          <div>
            <h2>Employment</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="position"
                onChange={handleInputChange}
                placeholder="Position"
              />
              <input
                type="text"
                name="employmentPeriod"
                onChange={handleInputChange}
                placeholder="Period of Employment"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        );
      case 'skills':
        return (
          <div>
            <h2>Skills</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="skillName"
                onChange={handleInputChange}
                placeholder="Skill Name"
              />
              <input
                type="text"
                name="skillExperience"
                onChange={handleInputChange}
                placeholder="Level of Experience"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        );
      case 'languages':
        return (
          <div>
            <h2>Languages</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="languageName"
                onChange={handleInputChange}
                placeholder="Language Name"
              />
              <input
                type="text"
                name="languageProficiency"
                onChange={handleInputChange}
                placeholder="Proficiency Level"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        );
      case 'hobbies':
        return (
          <div>
            <h2>Hobbies</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="hobbyName"
                onChange={handleInputChange}
                placeholder="Hobby Name"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Resume Uploading Form</h1>
      <label>Select Section:</label>
      <select value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
        <option value="">Select Section</option>
        <option value="personalDetails">Personal Details</option>
        <option value="education">Education</option>
        <option value="employment">Employment</option>
        <option value="skills">Skills</option>
        <option value="languages">Languages</option>
        <option value="hobbies">Hobbies</option>
      </select>
      {renderForm()}
    </div>
  );
}

export default Resume;
