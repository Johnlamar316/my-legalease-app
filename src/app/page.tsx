"use client";
import { Fragment } from "react";
import { Typography, Button } from "@mui/material";
import Link from "next/link";
import styled from "styled-components";

const HomeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;,
`;

const StyledButton = styled(Button)`
  && {
    text-decoration: none;
    margin-top: 20px;
    background-color: #000000;

    &:hover {
      background-color: #333333;
    }
  }
`;

const navigateToApp = () => {
  window.location.href = "/rankings";
};

export default function Home() {
  return (
    <Fragment>
      <HomeContainer
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            navigateToApp();
          }
        }}>
        <Typography variant="h4">Legalease App</Typography>
        <Link href="/rankings" passHref>
          <StyledButton variant="contained">Go to App</StyledButton>
        </Link>
      </HomeContainer>
    </Fragment>
  );
}
