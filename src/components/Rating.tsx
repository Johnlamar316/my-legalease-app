"use client";
import React, { useState } from "react";
import { Button, Rating } from "@mui/material";
import styled from "styled-components";

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 10px;
  & > p {
    font-size: 12px;
    text-transform: uppercase;
  }
  & .MuiRating-root {
    font-size: 19px;
    color: #000000;
  }
`;

const RatingLabel = styled.p`
  font-size: 10px;
  margin-bottom: 5px;
`;

const RatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e5e5e5;
  margin-bottom: 6px;
  width: 80%;
  padding: 4px;
`;

const RatingGroup: React.FC<{ label: string }> = ({ label }) => {
  const [ratings, setRatings] = useState<number[]>([5, 4, 3, 2, 1]);

  const handleRatingChange = (index: number, newValue: number | null) => {
    if (newValue !== null) {
      const updatedRatings = [...ratings];
      updatedRatings[index] = newValue;
      setRatings(updatedRatings);
    }
  };

  return (
    <RatingWrapper>
      <RatingLabel>{label}</RatingLabel>
      {ratings.map((rating, index) => (
        <RatingContainer key={index}>
          <Rating
            name={`rating-${label}`}
            value={rating}
            onChange={(event, newValue) => handleRatingChange(index, newValue)}
          />
          <Button
            sx={{ color: "#000000", marginLeft: "12px", fontSize: "10px" }}>
            ADD UP
          </Button>
        </RatingContainer>
      ))}
    </RatingWrapper>
  );
};

export default RatingGroup;
