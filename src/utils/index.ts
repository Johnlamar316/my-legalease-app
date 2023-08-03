import axios from "axios";
import { Ranking } from "./type";

export const getRankingCompany = async () => {
  const apiUrl = 'https://legalease-code-test-api.infra.eu-west-1.wearespork.net/api/v1/rankings';
  const apiKey = 'L5e9X1a9gswH3x7ynz9cKyDnsgvqJEen';
  const regionId = '170';
  const practiceAreaId = '326';

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'x-api-key': apiKey,
      },
      params: {
        regionId,
        practiceAreaId,
      },
    });
    const rankingsData: Ranking[] = response.data;
    return {
      rankingsData,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      rankingsData: [],
    };
  }
};

export const calculateRating = (value: number, max: number) => {
  const minRating = 1;
  const maxRating = 5;
  return ((value - 1) / (max - 1)) * (maxRating - minRating) + minRating;
};

