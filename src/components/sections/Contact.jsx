import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import emailjs from "@emailjs/browser";

const fadeInOut = keyframes`
  0% { opacity: 0; bottom: 20px; }
  10% { opacity: 1; bottom: 40px; }
  90% { opacity: 1; bottom: 40px; }
  100% { opacity: 0; bottom: 20px; }
`;

// Toast style
const Toast = styled.div`
  position: fixed;
  top:10%;
  right:0;
  height:3%;
  transform: translateX(-50%);
  bottom: 20px;
  background-color: ${({ type }) => (type === "success" ? "#4caf50" : "#f44336")};
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  z-index: 9999;
  animation: ${fadeInOut} 3s ease-in-out;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top:3vw;
  justify-contnet: center;
  position: rlative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;
const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;
const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;

const Contact = () => {

  const form = useRef();

  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const [formData, setFormData] = useState({
    from_email: "",
    from_name: "",
    subject: "",
    message: "",
  });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 3000);
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const { from_email, from_name, subject, message } = formData;
    if (!from_email || !from_name || !subject || !message) {
      // console.log(formData);
      showToast("Please fill all the fields ❌", "error");
      return;
    }

    if (!isValidEmail(from_email)) {
      showToast("Enter a valid email address ❌", "error");
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLETE_KEY,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(() => {
        showToast("Message sent successfully ✅", "success");
        form.current.reset();
        setFormData({ from_email: "", from_name: "", subject: "", message: "" });
      })
      .catch((error) => {
        showToast("Something went wrong ❌","error");
        // console.error("EmailJS error:", error);
      });
  };

  return (
    <Container id="Hire">
      <Wrapper>
        <Title>Contact</Title>
        <Desc style={{ marginBottom: "40px" }}>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput
            placeholder="Your Email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
          />
          <ContactInput
            placeholder="Your Name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
          />
          <ContactInput
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <ContactInputMessage
            placeholder="Message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
      </Wrapper>
      {toast.show && <Toast type={toast.type}>{toast.message}</Toast>}
    </Container>
  );
};

export default Contact;