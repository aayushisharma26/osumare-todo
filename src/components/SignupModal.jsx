import React, { useState } from 'react';

const SignupModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: 'female',
    language: {
      english: true,
      hindi: false,
      marathi: false
    },
    email: '',
    termsAgreed: false
  });
  
  const [errors, setErrors] = useState({});
  const [showThankYou, setShowThankYou] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    
    if (!formData.gender) {
      newErrors.gender = "Please select a gender";
    }
    
    const hasSelectedLanguage = Object.values(formData.language).some(val => val === true);
    if (!hasSelectedLanguage) {
      newErrors.language = "Please select at least one language";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    if (!formData.termsAgreed) {
      newErrors.termsAgreed = "You must agree to the terms and conditions";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (name === 'termsAgreed') {
      setFormData({
        ...formData,
        termsAgreed: checked
      });
      
      if (errors[name]) {
        setErrors({
          ...errors,
          [name]: null
        });
      }
    } else {
      setFormData({
        ...formData,
        language: {
          ...formData.language,
          [name]: checked
        }
      });
      
      if (errors.language) {
        setErrors({
          ...errors,
          language: null
        });
      }
    }
  };

  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      gender: e.target.value
    });
    
    if (errors.gender) {
      setErrors({
        ...errors,
        gender: null
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    const selectedLanguages = Object.entries(formData.language)
      .filter(([_, isSelected]) => isSelected)
      .map(([lang]) => lang.charAt(0).toUpperCase() + lang.slice(1))
      .join(', ');
    
    const newEntry = {
      name: `${formData.firstName} ${formData.lastName}`,
      gender: formData.gender.charAt(0).toUpperCase() + formData.gender.slice(1),
      language: selectedLanguages,
      email: formData.email
    };
    
    // Show thank you message
    setShowThankYou(true);
    
    // Submit the form data after a delay
    setTimeout(() => {
      if (typeof onSubmit === 'function') {
        onSubmit(newEntry);
      }
      
      // Reset form and close modal after another delay
      setTimeout(() => {
        setShowThankYou(false);
        setFormData({
          firstName: '',
          lastName: '',
          gender: 'female',
          language: {
            english: true,
            hindi: false,
            marathi: false
          },
          email: '',
          termsAgreed: false
        });
        setErrors({});
      }, 500);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay"  onClick={onClose}>
      <div className="signup-modal" onClick={e => e.stopPropagation()}>
        {!showThankYou ? (
          <>
            <button className="modal-close" onClick={onClose}>&times;</button>
            <div className="modal-header">
              <h2>Get Started Today!</h2>
              <p>Fill in your details and take control of your tasks.</p>
            </div>
            <form className="modal-body"  onSubmit={handleSubmit} autoComplete="off">
              <div className="modal-step">
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.7rem' }}>
                  <div style={{ flex: 1 }}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`${formData.firstName ? 'input-highlight' : ''} ${errors.firstName ? 'input-error' : ''}`}
                    />
                    {errors.firstName && <div className="error-message">{errors.firstName}</div>}
                  </div>
                  <div style={{ flex: 1 }}>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`${formData.lastName ? 'input-highlight' : ''} ${errors.lastName ? 'input-error' : ''}`}
                    />
                    {errors.lastName && <div className="error-message">{errors.lastName}</div>}
                  </div>
                </div>

                <label>Gender</label>
                <div className="gender-options">
                  {['male', 'female'].map(opt => (
                    <label
                      key={opt}
                      className={`gender-option gender-box${formData.gender === opt ? ' gender-active' : ''} ${errors.gender ? 'input-error' : ''}`}
                      htmlFor={opt}
                    >
                      <input
                        type="radio"
                        id={opt}
                        name="gender"
                        value={opt}
                        checked={formData.gender === opt}
                        onChange={handleRadioChange}
                      />
                      {opt.charAt(0).toUpperCase() + opt.slice(1)}
                    </label>
                  ))}
                </div>
                {errors.gender && <div className="error-message">{errors.gender}</div>}

                <label>Language</label>
                <div className={`language-options ${errors.language ? 'input-error-container' : ''}`} style={{ flexDirection: 'column' }}>
                  {['english', 'hindi', 'marathi'].map(lang => (
                    <label
                      key={lang}
                      className={`language-option language-box${formData.language[lang] ? ' language-active' : ''}`}
                      htmlFor={lang}
                    >
                      <input
                        type="checkbox"
                        id={lang}
                        name={lang}
                        checked={formData.language[lang]}
                        onChange={handleCheckboxChange}
                      />
                      {lang.charAt(0).toUpperCase() + lang.slice(1)}
                    </label>
                  ))}
                </div>
                {errors.language && <div className="error-message">{errors.language}</div>}

                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`${formData.email ? 'input-highlight' : ''} ${errors.email ? 'input-error' : ''}`}
                />
                {errors.email && <div className="error-message">{errors.email}</div>}

                <div className={`terms-consent ${errors.termsAgreed ? 'input-error-container' : ''}`}>
                  <input
                    type="checkbox"
                    id="termsAgreed"
                    name="termsAgreed"
                    checked={formData.termsAgreed}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="termsAgreed">
                    I agree to the <span className="terms-link">terms and conditions</span>
                  </label>
                </div>
                {errors.termsAgreed && <div className="error-message">{errors.termsAgreed}</div>}
              </div>
              <div className="modal-footer">
                <button className="submit-button" type="submit">
                  Done
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="thank-you-message">
            <div className="heart-icon">❤️</div>
            <h2>Thank you for connect with us.</h2>
            <p>Our team will contacting with you soon</p>
            <button className="submit-button" onClick={onClose}>Done</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupModal;
