import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Button = ({button_name}) => {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/Contact");
  };

  return (
    <StyledWrapper>
      <button className="learn-more" onClick={handleNavigation}>
        <span className="circle" aria-hidden="true">
          <span className="icon arrow" />
        </span>
        <span className="button-text">{button_name}</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
   position: relative;
   display: inline-block;
   cursor: pointer;
   outline: none;
   border: 0;
   vertical-align: middle;
   text-decoration: none;
   background: transparent;
   padding: 0;
   font-size: inherit;
   font-family: inherit;
  }

  button.learn-more {
   width: 15rem;
   height: auto;
  }

  button.learn-more .circle {
   transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
   position: relative;
   display: block;
   margin: 0;
   width: 3rem;
   height: 3rem;
   background:rgba(205, 241, 254);
   border-radius: 1.625rem;
  }

  button.learn-more .circle .icon {
   transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
   position: absolute;
   top: -1px;
   bottom: 0;
   margin: auto;
   background: #026488;
  }

  button.learn-more .circle .icon.arrow {
   transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
   left: 0.625rem;
   width: 1.125rem;
   height: 0.125rem;
   background: none;
  }

  button.learn-more .circle .icon.arrow::before {
   position: absolute;
   content: "";
   top: -0.25rem;
   right: 0.0625rem;
   width: 0.625rem;
   height: 0.625rem;
   border-top: 0.125rem solid #026488;
   border-right: 0.125rem solid #026488;
   transform: rotate(45deg);
  }

  button.learn-more .button-text {
   transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
   position: absolute;
   top: -2px;
   left: 0;
   right: 0;
   bottom: 0;
   padding: 0.75rem 0;
   margin: 0 0 0 1.85rem;
   color:rgba(205, 241, 254, 0.92);
   font-weight: 700;
   line-height: 1.6;
   text-align: center;
   text-transform: uppercase;
  }

  button:hover .circle {
   width: 100%;
  }

  button:hover .circle .icon.arrow {
   background: #026488;
   transform: translate(1rem, 0);
  }

  button:hover .button-text {
   color: #026488;
  }`;

export default Button;
