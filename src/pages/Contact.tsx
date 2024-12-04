import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled(motion.main)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  gap: 20px;
`;

const Header = styled(motion.h1)`
  margin: 50px 0;
  width: 100%;
  font-size: 40px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 2;
  &::before {
    content: "Contact";
    position: absolute;
    top: 38%;
    left: 50%;
    opacity: 0.5;
    transform: translate(-50%, -50%);
    font-size: 120px;
    font-weight: bold;
    color: #dee3e4;
    z-index: -1;
    @media (max-width: 990px) {
      font-size: 80px;
    }
    @media (max-width: 430px) {
      font-size: 70px;
    }
  }
`;

const Content = styled.div`
  padding: 30px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  @media (max-width: 835px) {
    flex-direction: column;
    gap: 50px;
  }
  @media (max-width: 430px) {
    padding: 0;
  }
`;

const Form = styled(motion.form)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
  width: 100%;
  max-width: 600px;
  grid-template-areas:
    "name"
    "email"
    "phone"
    "textarea"
    "submit";
  @media (max-width: 430px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "name"
      "email"
      "phone"
      "textarea"
      "submit";
  }
`;

const Input = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #22272c;
  font-size: 14px;
  color: #757575;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
  @media (max-width: 430px) {
    width: 100%;
  }
`;

const Name = styled(Input)`
  grid-area: name;
`;

const Email = styled(Input)`
  grid-area: email;
`;

const Phone = styled(Input)`
  grid-area: phone;
`;

const Textarea = styled.textarea`
  grid-area: textarea;
  resize: none;
  width: 100%;
  height: 200px;
  border: 1px solid #22272c;
  border-radius: 8px;
  font-size: 14px;
  color: #757575;
  padding: 10px;
  &::placeholder {
    font-family: "Pretendard", sans-serif;
    font-weight: normal;
  }
  &:focus {
    outline: none;
  }
`;

const Submit = styled.button`
  grid-area: submit;
  width: 180px;
  height: 55px;
  border-radius: 50px;
  border: none;
  background-color: #000;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  justify-self: start;
  align-self: center;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: #20c997;
  }
`;

const Information = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 100px;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  @media (max-width: 835px) {
    margin-bottom: 10px;
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 10px;
  width: 100%;
  cursor: pointer;
`;

const IconImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Adrres = styled.div`
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s;
  &:hover {
    color: #20c997;
  }
`;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: "easeOut" },
  },
};

const formVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const informationVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const Contact = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 430);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Wrapper
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Header variants={headerVariants}>Contact</Header>
      <Content>
        <Form variants={formVariants}>
          <Name placeholder="Full Name" />
          <Email placeholder="Email address" />
          <Phone placeholder="Phone number" />
          <Textarea placeholder="Message" />
          <Submit>Send Message</Submit>
        </Form>
        <Information variants={informationVariants}>
          <Card>
            <IconImg src="/img/Github-Dark.svg"></IconImg>
            <Adrres>https://github.com/BeakJunHyeok</Adrres>
          </Card>
          <Card>
            <IconImg src="/img/꼬북이.jfif"></IconImg>
            <Adrres>wnsgur1832@naver.com</Adrres>
          </Card>
          <Card>
            <IconImg src="/img/꼬북이.jfif"></IconImg>
            <Adrres>Hwaseong-si, Gyeonggi-do</Adrres>
          </Card>
        </Information>
      </Content>
    </Wrapper>
  );
};

export default Contact;
