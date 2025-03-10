import React, { useState } from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import RouteTransition from "../components/RouteTransition"
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';


const FormContainer = styled.div`
  padding: 7rem 3rem;
  background-color: white;
  border-radius: 15px;
  max-width: 1200px;
  margin: auto;
  font-family: 'Mona Sans', sans-serif;

  @media (max-width: 768px) {
    padding: 5rem 2rem;
  }

  @media (max-width: 568px) {
    padding: 5rem 1rem;
  }
`;

const FormTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #333;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  width: 100%;

  .input {
    flex: 1;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .input span {
    font-weight: 500;
    color: #000000d1;
  }

  .input input,
  .input select,
  .input textarea {
    width: 100%;
    font-family: "Mona Sans";
    font-size: 1rem;
    font-weight: 400;
    outline: none;
    padding: 0.8rem 1rem;
   
    border-radius: 20px;
        border:1.2px solid rgba(223, 215, 215, 0.82);

    transition: all 0.2s ease-in-out;
  }

  .input textarea{
      height:10rem;
}

  .input input:focus,
  .input select:focus,
  .input textarea:focus {
    border: 1.5px solid #0000006a;
    border-bottom: 3px solid #000000c0;
  }
`;

const IssueButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;
`;


const IssueButton = styled.button`
  padding: 0.8rem 1.6rem;
  background-color: white;
  border: 2px solid #333;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background-color: #333;
    color: white;
  }

  &.selected {
    background-color: #333;
    color: white;
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: #000000;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 99px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  &:hover {
    background-color: #333;
  }

  svg {
    color: white;
  }
`;

const CompatibilityForm = () => {


  const [error, setError] = useState("");
  const [SelectDomain, setSelectedDomain] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    domain: "",
    description: "",
  
    websiteLink: "",
  });
  const [PDF, setPDF] = useState(null);


  const handleDomainSelection = (domain) => {
    setSelectedDomain((prevSelected) =>
      prevSelected.includes(domain)
        ? prevSelected.filter((item) => item !== domain)
        : [...prevSelected, domain]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


const handleFileUpload = async (e) => {
  setError(null); // Clear any previous errors
  const file = e.target.files[0];

  if (!file) {
    setError("Please select a file.");
    return;
  }

  if (file.type !== 'application/pdf') {
    setError("Please upload a PDF file.");
    return;
  }

  if (file.size > 10 * 1024 * 1024) { // 10MB limit
    setError("File size exceeds 10MB limit.");
    return;
  }

  try {
    const base64PDF = await convertToBase64(file); // Convert to Base64
    const payload = {
      filename: file.name,
      content: base64PDF,
    };
    
    // Assuming setPDF is setting the base64 content to the state
    setPDF(payload);
  } catch (err) {
    setError("An error occurred during file processing.");
    console.error("Error setting file:", err);
  }
};

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = reader.result.split(",")[1]; // Remove the prefix
      if (!base64) {
        reject(new Error("Error: Base64 encoding failed."));
      } else {
        resolve(base64);  // Returning the Base64 string without the prefix
      }
    };
    reader.onerror = (error) => reject(error);
  });
};

  


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const nameRegex = /^[A-Za-z\s]+$/; // Name must contain only letters and spaces
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Email validation regex
    const phoneRegex = /^[0-9]{10}$/; // Phone must be exactly 10 digits
    const briefRegex = /^[A-Za-z0-9\s]+$/; // Brief must contain only letters, numbers, and spaces

    // Validate all fields
    if (!formData.name || !nameRegex.test(formData.name)) {
      toast.error("Please enter a valid name (only letters and spaces).", "fail");
      return;
    }

    if (!formData.email || !emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.", "fail");
      return;
    }

    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid phone number (10 digits).", "fail");
      return;
    }

    if (!formData.domain) {
      toast.error("Please enter a domain.", "fail");
      return;
    }

    if (!formData.description) {
      toast.error("Please enter a description.", "fail");
      return;
    }

    if (!formData.websiteLink) {
      toast.error("Please enter a website link.", "fail");
      return;
    }

   
    if (!SelectDomain || SelectDomain.length === 0) {
      toast.error("Please select at least one domain.", "fail");
      return;
    }

    // if (!PDF) {
    //   toast.error("Please upload a PDF file.", "fail");
    //   return;
    // }

    // Construct the data object
    const data = {
      PDF,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      domain: formData.domain,
      description: formData.description,
      websiteLink: formData.websiteLink,
      selectDomain: SelectDomain,
    };

    const jsonData = JSON.stringify(data);
    console.log(jsonData);

    // Send data to the server using Axios
    await toast.promise(
      axios.post("https://clever-studio-backend.vercel.app/SendJobForm", jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      }),
      {
        loading: "Saving...",
        success: <b>Event created successfully!</b>,
        error: <b>Could not save event. Please try again.</b>,
      }
    );

    // Reset form data
    setFormData({
      name: "",
      email: "",
      phone: "",
      domain: "",
      description: "",
      websiteLink: "",
      PDF: null,
    });
  } catch (error) {
    console.error("Error submitting event:", error);
    setError(error.response?.data?.message || "An error occurred. Please try again.");
  }
};


  return (
    <RouteTransition>
    <FormContainer>
      <FormTitle>Internship Applications</FormTitle>
      <FormWrapper onSubmit={handleSubmit}>
        <FormGroup>
          <div className="input">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="input">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
        </FormGroup>

        <FormGroup>
          <div className="input">
            <input
              type="text"
              name="phone"
              placeholder="Your Number"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="input">
            <select
              name="domain"
              value={formData.domain}
              onChange={handleInputChange}
            >
              <option value="">Domains</option>
              <option value="Computer_Engineering">Web Development</option>
              <option value="Artist_2D/3D">Artist 2D/3D</option>

              <option value="Project_Manager">Project Manager</option>
              <option value="Video_Editing">Video Editing</option>
              <option value="Content_Writing">
               Content Writing
              </option>
              
              <option value="Creative_Design">Creative Design</option>
              <option value="Logo_Design">Logo Design</option>
              <option value="Social_Media">Social Media Manager</option>
              <option value="Community_Manager">Community Manager</option>



            </select>
          </div>
        </FormGroup>

        <FormGroup>
          <div className="input">
            <textarea
              name="description"
              placeholder="Describe About Your Self"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>
        </FormGroup>

        <FormGroup>
          <div className="input">
            <input
              type="text"
              name="websiteLink"
              placeholder="Portfilio Link"
              value={formData.websiteLink}
              onChange={handleInputChange}
            />
          </div>
     
        </FormGroup>

        <h3>Web Development Internship</h3>
        <IssueButtonGroup>
          {[
            
            "Web Developer (HTML,CSS,JS)",
            "Web Developer (REACT JS)",
            "Web Developer (UI/UX)",
          ].map((role, index) => (
            <IssueButton
              key={index}
              type="button"
              className={SelectDomain.includes(role) ? "selected" : ""}
              onClick={() => handleDomainSelection(role)}
            >
              + {role}
            </IssueButton>
          ))}
        </IssueButtonGroup>

        <h3>Artist Internship</h3>
        <IssueButtonGroup>
          {[
            "3D Artist ",
            "2D Artist",
           
          ].map((role, index) => (
            <IssueButton
              key={index}
              type="button"
              className={SelectDomain.includes(role) ? "selected" : ""}
              onClick={() => handleDomainSelection(role)}
            >
              + {role}
            </IssueButton>
          ))}
        </IssueButtonGroup>

        <h3>Video Editor</h3>
        <IssueButtonGroup>
          {[
           
            "Video Editor (ADOBE PREMIERE PRO)",
            "Video Editor (AFTER EFFECT)",

          
          ].map((role, index) => (
            <IssueButton
              key={index}
              type="button"
              className={SelectDomain.includes(role) ? "selected" : ""}
              onClick={() => handleDomainSelection(role)}
            >
              + {role}
            </IssueButton>
          ))}
        </IssueButtonGroup>

        <h3>Creative Design Internship</h3>
        <IssueButtonGroup>
          {[
           
            "Creative Designer (CANVA)",
            "Creative Designer (UI/UX)",
            "Creative Designer (GRAPHIC DESIGN)",
          ].map((role, index) => (
            <IssueButton
              key={index}
              type="button"
              className={SelectDomain.includes(role) ? "selected" : ""}
              onClick={() => handleDomainSelection(role)}
            >
              + {role}
            </IssueButton>
          ))}
        </IssueButtonGroup>

        <h3>Logo Design Internship</h3>
        <IssueButtonGroup>
          {[
         
            "Logo Designer ",
          ].map((role, index) => (
            <IssueButton
              key={index}
              type="button"
              className={SelectDomain.includes(role) ? "selected" : ""}
              onClick={() => handleDomainSelection(role)}
            >
              + {role}
            </IssueButton>
          ))}
        </IssueButtonGroup>

        <h3> Management Internship</h3>
        <IssueButtonGroup>
          {[
          
            "Project Manager (SOFTWARE)",
          ].map((role, index) => (
            <IssueButton
              key={index}
              type="button"
              className={SelectDomain.includes(role) ? "selected" : ""}
              onClick={() => handleDomainSelection(role)}
            >
              + {role}
            </IssueButton>
          ))}
        </IssueButtonGroup>

        <h3>Content Writing Internship</h3>
        <IssueButtonGroup>
          {[
           
            "Content writer (WEBSITE)",
            "Content writer (SOCIAL MEDIA) ",

         
          ].map((role, index) => (
            <IssueButton
              key={index}
              type="button"
              className={SelectDomain.includes(role) ? "selected" : ""}
              onClick={() => handleDomainSelection(role)}
            >
              + {role}
            </IssueButton>
          ))}
        </IssueButtonGroup>


        <h3>Community</h3>
        <IssueButtonGroup>
          {[
          
            "Community Manager",

         
          ].map((role, index) => (
            <IssueButton
              key={index}
              type="button"
              className={SelectDomain.includes(role) ? "selected" : ""}
              onClick={() => handleDomainSelection(role)}
            >
              + {role}
            </IssueButton>
          ))}
        </IssueButtonGroup>


        <h3>Social Media  Internship</h3>
        <IssueButtonGroup>
          {[
            "Social Media Manager ",
            
          ].map((role, index) => (
            <IssueButton
              key={index}
              type="button"
              className={SelectDomain.includes(role) ? "selected" : ""}
              onClick={() => handleDomainSelection(role)}
            >
              + {role}
            </IssueButton>
          ))}
        </IssueButtonGroup>

        <SubmitButton type="submit">
          Submit <FaArrowRight />
        </SubmitButton>
      </FormWrapper>
    </FormContainer>
    </RouteTransition>
  );
};

export default CompatibilityForm;
