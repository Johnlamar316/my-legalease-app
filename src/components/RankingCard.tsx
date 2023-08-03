"use client";
import { calculateRating } from "../utils/index";
import { Badge, Typography, Rating } from "@mui/material";
import styled from "styled-components";

export interface Badge {
  id: string;
  name: string;
  slug: string;
}

interface RankingCardProps {
  id: string;
  isBookingFirm: boolean;
  badges: Badge[];
  firm: {
    name: string;
    firmRegions: {
      booking?: boolean;
      expertiseAndReputationRating: number;
      clientSatisfactionRating: number;
    }[];
  };
}

const TitleContainer = styled.div`
  min-height: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 9px;
  margin-left: 10px;
`;

const FirmName = styled(Typography)`
  font-size: 15px;
  font-weight: 600;
  margin-left: 10px;
  line-height: 0;
`;

const BookingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 22px;
  margin-bottom: 0;
  line-height: 0;

  & > p {
    font-size: 14px;
    margin-right: 8px;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 7px;

  & > p {
    font-size: 11px;
    margin-right: 4px;
    font-weight: 400;
    text-transform: uppercase;
  }

  & .MuiRating-root {
    font-size: 11px;
    color: #000000;
  }
`;

const RankingCard: React.FC<RankingCardProps> = ({
  id,
  isBookingFirm,
  badges,
  firm,
}) => {
  return (
    <>
      <TitleContainer>
        <BadgeContainer>
          <Badge
            badgeContent={!badges.length ? "0" : badges.length}
            sx={{
              "& .MuiBadge-badge": {
                color: "#ffffff",
                backgroundColor: isBookingFirm ? "#000000" : "#bdbdbd",
              },
            }}
          />
        </BadgeContainer>
        <FirmName variant="h6">{firm.name}</FirmName>
      </TitleContainer>
      {isBookingFirm && (
        <BookingContainer>
          <RatingContainer>
            <p>Expertise and Reputation Rating:</p>
            <Rating
              name={`expertise-rating-${id}`}
              value={calculateRating(
                firm.firmRegions[0].expertiseAndReputationRating,
                1000
              )}
              max={5}
              readOnly
              style={{ marginRight: 10 }}
            />
            <p>Client Satisfaction Rating:</p>
          </RatingContainer>
          <RatingContainer>
            <Rating
              name={`client-satisfaction-rating-${id}`}
              value={calculateRating(
                firm.firmRegions[0].clientSatisfactionRating,
                1000
              )}
              max={5}
              readOnly
            />
          </RatingContainer>
        </BookingContainer>
      )}
    </>
  );
};

export default RankingCard;
