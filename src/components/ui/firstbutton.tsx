'use client';

import React, { ReactNode } from "react";
import styled from "styled-components";
import { useRouter } from 'next/navigation';

interface ButtonProps {
  children: ReactNode;
  route?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, route, className }) => {
  const router = useRouter();
  const handleRedirect = () => {
    if (route) {
      router.push(route);
    }
  };

  return (
    <StyledWrapper>
      <button className="btn cube cube-hover" type="button" onClick={handleRedirect}>
        <div className="bg-top">
          <div className="bg-inner" />
        </div>
        <div className="bg-right">
          <div className="bg-inner" />
        </div>
        <div className="bg">
          <div className="bg-inner" />
        </div>
        <div className={className}>{children}</div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn {
    display: block;
    padding: 0.7em 1em;
    background: transparent;
    outline: none;
    border: 0;
    color: #d4af37;
    letter-spacing: 0.1em;
    font-family: monospace;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
    z-index: 1;
    position: relative;
  }

  .cube {
    position: relative;
    transition: all 0.5s;
  }

  .cube .bg-top {
    position: absolute;
    height: 10px;
    background: #d4af37;
    bottom: 100%;
    left: 5px;
    right: -5px;
    transform: skew(-45deg, 0);
    margin: 0;
    transition: all 0.4s;
  }

  .cube .bg-right {
    position: absolute;
    background: #d4af37;
    top: -5px;
    z-index: 0;
    bottom: 5px;
    width: 10px;
    left: 100%;
    transform: skew(0, -45deg);
    transition: all 0.4s;
  }

  .cube .bg {
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    background: #d4af37;
    transition: all 0.4s;
  }

  .cube .bg-inner {
    background: #28282d;
    position: absolute;
    left: 2px;
    right: 2px;
    top: 2px;
    bottom: 2px;
  }

  .cube .text {
    position: relative;
    z-index: 1;
    display: inline-block;
    transition: all 0.4s;
  }

  .cube:hover .bg-inner {
    background: #d4af37;
    transition: all 0.4s;
  }

  .cube:hover .text {
    color: #28282d;
    transition: all 0.4s;
  }

  .cube:hover .bg-right,
  .cube:hover .bg,
  .cube:hover .bg-top {
    background: #28282d;
  }

  .cube:active {
    z-index: 9999;
    animation: bounce 0.1s linear;
  }

  @keyframes bounce {
    50% {
      transform: scale(0.9);
    }
  }
`;

export default Button;
