"use client";
import React, { useState } from "react";
import { RankingsType } from "@/app/rankings/page";
import { Button, Container, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import FilterBar, { FilterOption } from "./FilterBar";
import SortBar, { SortOption } from "./SortBar";
import RankingCard from "./RankingCard";
import RatingGroup from "./Rating";
import Link from "next/link";

interface RankingListProps {
  data: RankingsType;
}

const StyledContainer = styled(Container)`
  padding-top: 10px;
`;

const RankingContainer = styled.div<{ isBooking: boolean }>`
  border: none;
  padding: 15px 10px 10px;
  margin-bottom: 2px;
  color: ${(props) => (props.isBooking ? "#000000" : "#bdbdbd")};
  background-color: ${(props) => (props.isBooking ? "#dbecf1" : "#f5f5f5")};

  &:nth-child(2) {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

const SortContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`;

const LogoTypography = styled(Typography)`
  border: 1px solid #000000;
  font-size: 24px;
  padding: 7px;
  font-weight: bold;
  cursor: pointer;
  color: #000000;
  display: inline;
  margin-bottom: 4px;
  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;

const RankingList: React.FC<RankingListProps> = ({ data }) => {
  const [sortValue, setSortValue] = useState<SortOption>(SortOption.All);
  const [filterValue, setFilterValue] = useState<FilterOption>(
    FilterOption.All
  );
  const { rankingsData } = data;

  const filteredRankings = rankingsData.filter((ranking: any) => {
    if (filterValue === "all") return true;
    return (
      ranking?.firm?.firmRegions[0].crossBorderCapability ===
      filterValue.toUpperCase()
    );
  });

  const compareTiers = (a: string, b: string) => {
    if (a === sortValue && b !== sortValue) return -1;
    if (a !== sortValue && b === sortValue) return 1;
    return a.localeCompare(b);
  };

  const sortedRankings = [...filteredRankings].sort((a, b) =>
    compareTiers(a.tier, b.tier)
  );

  return (
    <StyledContainer maxWidth="lg">
      <Link href="/" passHref style={{ textDecoration: "none" }}>
        <LogoTypography variant="h6">Legalease</LogoTypography>
      </Link>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3} md={3}>
          <FilterBar
            filterValue={filterValue}
            setFilterValue={setFilterValue}
          />
          <div>
            <RatingGroup label="Expertise and Reputation Rating" />
            <RatingGroup label="Client Satisfaction Rating" />
          </div>
        </Grid>
        <Grid item xs={12} sm={9} md={9}>
          <SortContainer>
            <SortBar sortValue={sortValue} setSortValue={setSortValue} />
          </SortContainer>
          {sortedRankings.map(({ firm, id }: any) => {
            const { badges, firmRegions } = firm;
            const isBookingFirm = firmRegions[0]?.booking;
            return (
              <RankingContainer key={id} isBooking={isBookingFirm}>
                <RankingCard
                  id={id}
                  isBookingFirm={isBookingFirm}
                  badges={badges}
                  firm={firm}
                />
              </RankingContainer>
            );
          })}
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default RankingList;
