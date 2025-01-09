import React from 'react';
import styled from 'styled-components';

const Button = ({ button_name, close }) => {
    const handleClick = () => {
      window.open('https://www.facebook.com/classifyinc', '_blank', 'noopener noreferrer');
    };
  
    return (
      <StyledWrapper>
        <button
          className="btn learn-more mb-4"
          type="button"
          onClick={() => { handleClick(); close(); }}
        >
          <span className="circle" aria-hidden="true">
            <span className="icon arrow" />
          </span>
          <span className="button-text">{button_name}</span>
        </button>
      </StyledWrapper>
    );
};

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
    width: 12rem;
    height: auto;
  }

  button.learn-more .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 2.5rem;
    height: 2.5rem;
    background: #026488;
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
    border-top: 0.125rem solid #cdf1fe;
    border-right: 0.125rem solid #cdf1fe;
    transform: rotate(45deg);
  }

  button.learn-more .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    left: 0;
    right: 0;
    top: -7px;
    padding: 0.75rem 0;
    margin: 0 0 0 1.85rem;
    color: #026488;
    font-size: 1.15rem;
    font-weight: 600;
    line-height: 1.6;
    text-align: center;
    font-family: "Lora", serif;
    text-transform: uppercase;
  }

  button:hover .circle {
    width: 100%;
  }

  button:hover .circle .icon.arrow {
    background: #cdf1fe;
    transform: translate(1rem, 0);
  }

  button:hover .button-text {
    color: #cdf1fe;
  }
`;

export default Button;
