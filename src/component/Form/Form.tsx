import { useState } from "react";
import { Modal } from "../Modal/Modal";
import shopImage from "../../../public/Image/BarbarShop.jpeg";
import {
  faUser,
  faEnvelope,
  faLock,
  faPhone,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Frame,
  Img,
  Header,
  Input,
  FontAwesomeIcon,
  ErrorFontAwesomeIcon,
  Span,
  LabelSpan,
  FormTemplate,
  Btn,
  Anchor,
  Terms,
  TermsLabel,
  CheckBox,
  ErrorMsg,
} from "../Form/Form.styled";

export function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAgreedToTerms: false,
  });

  const [errorInput, setErrorInput] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    successful: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkBox" ? checked : value,
    }));

    if (errorInput[name as keyof typeof errorInput]) {
      setErrorInput({ ...errorInput, [name]: "" });
    }
  };

  console.log(formData);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errorMessage = {
      fullName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      successful: "",
    };

    if (
      !formData.fullName &&
      !formData.phone &&
      !formData.email &&
      !formData.password &&
      !formData.confirmPassword
    ) {
      setErrorInput({
        ...errorMessage,
        fullName: "Required",
        phone: "Required",
        email: "Required",
        password: "Required",
      });
    } else if (!formData.fullName) {
      setErrorInput({
        ...errorMessage,
        fullName: "Field can not be empty",
      });
    } else if (formData.fullName.length < 5) {
      setErrorInput({
        ...errorMessage,
        fullName: "Enter your full name please",
      });
    } else if (!formData.phone) {
      setErrorInput({
        ...errorMessage,
        phone: "Enter valid phone number",
      });
    } else if (formData.phone.length < 12) {
      setErrorInput({
        ...errorMessage,
        phone: "Kindly enter a valid phone number",
      });
    } else if (!formData.email) {
      setErrorInput({
        ...errorMessage,
        email: "Enter a valid email address",
      });
    } else if (!formData.password) {
      setErrorInput({
        ...errorMessage,
        password: "Password should not be empty",
      });
    } else if (formData.password.length < 5) {
      setErrorInput({
        ...errorMessage,
        password: "Password is too short",
      });
    } else if (formData.password.search(/[0-9]/) < 0) {
      setErrorInput({
        ...errorMessage,
        password: "include at least one number",
      });
    } else if (formData.password.search(/[A-Z]/) < 0) {
      setErrorInput({
        ...errorMessage,
        password: "include at least one uppercase",
      });
    } else if (formData.password.search(/[!@#$*]/) < 0) {
      setErrorInput({
        ...errorMessage,
        password: "include at least one character",
      });
    } else if (formData.password === formData.confirmPassword) {
      setErrorInput({
        ...errorMessage,
        successful: "You have successfully sign up to Barbar Hub",
      });

      setFormData({
        fullName: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAgreedToTerms: false,
      });

      setTimeout(() => {
        setErrorInput({
          ...errorMessage,
          successful: "",
        });
      }, 5000);
    } else {
      setErrorInput({
        ...errorMessage,
        confirmPassword: "Password do not match",
      });
    }
  };

  return (
    <Container>
      <Frame>
        <Img src={shopImage} alt="ShopImage" />

        <FormTemplate onSubmit={handleSubmit}>
          <Header>Registration Form</Header>


          <div>
            <LabelSpan>
              <label htmlFor="">Full Name:</label>
              <ErrorMsg>
                {errorInput.fullName && (
                  <ErrorFontAwesomeIcon icon={faCircleExclamation} />
                )}{" "}
                {errorInput.fullName}
              </ErrorMsg>
            </LabelSpan>
            <Span>
              <FontAwesomeIcon icon={faUser} />
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                placeholder="full name"
                onChange={handleChange}
              />
            </Span>
          </div>

          <div>
            <LabelSpan>
              <label htmlFor="">Phone:</label>
              <ErrorMsg>
                {errorInput.phone && (
                  <ErrorFontAwesomeIcon icon={faCircleExclamation} />
                )}{" "}
                {errorInput.phone}
              </ErrorMsg>
            </LabelSpan>
            <Span>
              <FontAwesomeIcon icon={faPhone} />
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                placeholder="2349078695208"
                onChange={handleChange}
              />
            </Span>
          </div>

          <div>
            <LabelSpan>
              <label htmlFor="">Email:</label>
              <ErrorMsg>
                {errorInput.email && (
                  <ErrorFontAwesomeIcon icon={faCircleExclamation} />
                )}{" "}
                {errorInput.email}
              </ErrorMsg>
            </LabelSpan>
            <Span>
              <FontAwesomeIcon icon={faEnvelope} />
              <Input
                type="email"
                name="email"
                value={formData.email}
                placeholder="abcdefgh@gmail.com"
                onChange={handleChange}
              />
            </Span>
          </div>

          <div>
            <LabelSpan>
              <label htmlFor="">Password:</label>
              <ErrorMsg>
                {errorInput.password && (
                  <ErrorFontAwesomeIcon icon={faCircleExclamation} />
                )}{" "}
                {errorInput.password}
              </ErrorMsg>
            </LabelSpan>
            <Span>
              <FontAwesomeIcon icon={faLock} />
              <Input
                type="password"
                name="password"
                value={formData.password}
                placeholder="password"
                onChange={handleChange}
              />
            </Span>
          </div>

          <div>
            <LabelSpan>
              <label htmlFor="">Confirm Password:</label>
              <ErrorMsg>
                {errorInput.confirmPassword && (
                  <ErrorFontAwesomeIcon icon={faCircleExclamation} />
                )}{" "}
                {errorInput.confirmPassword}
              </ErrorMsg>
            </LabelSpan>
            <Span>
              <FontAwesomeIcon icon={faLock} />
              <Input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                placeholder="confirm password"
                onChange={handleChange}
              />
            </Span>
          </div>

          <Terms>
            <CheckBox
              type="checkbox"
              id="agreed"
              name="isAgreedToTerms"
              checked={formData.isAgreedToTerms}
              onChange={() => {
                setFormData({
                  ...formData,
                  isAgreedToTerms: !formData.isAgreedToTerms,
                });
              }}
            />

            <TermsLabel htmlFor="agreed">
              By signing up, You agree to the
              <Anchor href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/#Terms_And_Conditions_Faqs">
                play terms of service.
              </Anchor>
            </TermsLabel>
          </Terms>

          <div>
            <Btn type="submit">Register</Btn>
          </div>
        </FormTemplate>
      </Frame>

      <Modal
        isClose={!errorInput.successful}
        onClick={() => setErrorInput({ ...errorInput, successful: "" })}
      />
    </Container>
  );
}
