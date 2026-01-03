import React from "react";
import { Link } from "react-router";
import styled from "styled-components";

const PopularCard = ({ _id, title, image, price, category, duration }) => {
  return (
    <StyledWrapper>
      <div className="card  ">
        <div className="card__shine" />
        <div className="card__glow" />
        <div className="card__content">
          <div className="card__badge">NEW</div>
          <div
            className="card__image"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="card__text">
            <p className="card__title">{title}</p>
            <p className="font-semibold">Category: {category}</p>
            <p className="font-semibold">Duration: {duration} hours</p>
          </div>
          <div className="card__footer">
            <div className="card__price">${price}</div>
            <div className="card__button">
              <svg height={20} width={20} viewBox="0 0 24 24">
                <path
                  strokeWidth={4}
                  stroke="currentColor"
                  d="M4 12H20M12 4V20"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <div>
            <Link to={`/course-details/${_id}`}>
              <button>View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
     
    --card-accent: #7c3aed;
     
    --card-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
    min-width: 300px;
    height:  370px;
    background: var(--card-bg);
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: var(--card-shadow);
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, sans-serif;
  }

 

  .card__glow {
    position: absolute;
    inset: -10px;
    background: radial-gradient(
      circle at 50% 0%,
      rgba(124, 58, 237, 0.3) 0%,
      rgba(124, 58, 237, 0) 70%
    );
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .card__content {
    padding: 1.25em;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75em;
    position: relative;
    z-index: 2;
  }

  .card__badge {
    position: absolute;
    top: 12px;
    right: 12px;
    background: #10b981;
    color: white;
    padding: 0.25em 0.5em;
    border-radius: 999px;
    font-size: 0.7em;
    font-weight: 600;
    transform: scale(0.8);
    opacity: 0;
    transition: all 0.4s ease 0.1s;
  }

  .card__image {
    width: 100%;
    height: 250px;
    background: linear-gradient(45deg, #a78bfa, #8b5cf6);
    border-radius: 12px;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
  }

  .card__image::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
        circle at 30% 30%,
        rgba(255, 255, 255, 0.1) 0%,
        transparent 30%
      ),
      repeating-linear-gradient(
        45deg,
        rgba(139, 92, 246, 0.1) 0px,
        rgba(139, 92, 246, 0.1) 2px,
        transparent 2px,
        transparent 4px
      );
    opacity: 0.5;
  }

  .card__text {
    display: flex;
    flex-direction: column;
    gap: 0.25em;
  }

  .card__title {
    color: var(--card-text);
    font-size: 1.2em;
    margin: 0;
    font-weight: 700;
    transition: all 0.3s ease;
  }

  .card__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
  }

  .card__price {
    color: var(--card-text);
    font-weight: 700;
    font-size: 1.4em;
    transition: all 0.3s ease;
  }

  .card__button {
    width: 38px;
    height: 38px;
    background: var(--card-accent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    transform: scale(0.9);
  }

  button {
    width: 100%;
    height: 40px;
    border: 3px solid #7c3aed;
    border-radius: 45px;
    transition: all 0.3s;
    cursor: pointer;
     
    font-size: 1.2em;
    font-weight: 550;
  }

  button:hover {
    background: linear-gradient(135deg, #7c3aed, #3b82f6);
    color: white;
    font-size: 1.4em;
  }

  /* Hover Effects */
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: rgba(124, 58, 237, 0.2);
  }

  .card:hover .card__shine {
    opacity: 1;
    animation: shine 3s infinite;
  }

  .card:hover .card__glow {
    opacity: 1;
  }

  .card:hover .card__badge {
    transform: scale(1);
    opacity: 1;
    z-index: 1;
  }

  .card:hover .card__image {
    transform: translateY(-5px) scale(1.03);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  .card:hover .card__title {
    color: var(--card-accent);
    transform: translateX(2px);
  }

  .card:hover .card__description {
    opacity: 1;
    transform: translateX(2px);
  }

  .card:hover .card__price {
    color: var(--card-accent);
    transform: translateX(2px);
  }

  .card:hover .card__button {
    transform: scale(1);
    box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.2);
  }

  .card:hover .card__button svg {
    animation: pulse 1.5s infinite;
  }

  /* Active State */
  .card:active {
    transform: translateY(-5px) scale(0.98);
  }

  /* Animations */
  @keyframes shine {
    0% {
      background-position: -100% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

 

`;



export default PopularCard;
