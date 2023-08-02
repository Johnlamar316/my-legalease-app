"use client";
import React from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import styled from "styled-components";

export enum SortOption {
  All = "all",
  Tier1 = "T_1",
  Tier2 = "T_2",
  Tier3 = "T_3",
  Tier4 = "T_4",
}

interface SortBarProps {
  sortValue: SortOption;
  setSortValue: (value: SortOption) => void;
}

interface Option {
  value: SortOption;
  label: string;
}

const options: Option[] = [
  { value: SortOption.All, label: "Sort by: All Tier Ranking" },
  { value: SortOption.Tier1, label: "Tier 1 Firms" },
  { value: SortOption.Tier2, label: "Tier 2 Firms" },
  { value: SortOption.Tier3, label: "Tier 3 Firms" },
  { value: SortOption.Tier4, label: "Tier 4 Firms" },
];

const SortWrapper = styled.div`
  margin-bottom: 10px;
`;

const SortBar: React.FC<SortBarProps> = ({ sortValue, setSortValue }) => {
  return (
    <SortWrapper>
      <FormControl variant="outlined" sx={{ m: 1, minWidth: 200 }}>
        <Select
          value={sortValue}
          onChange={(e) => setSortValue(e.target.value as SortOption)}
          sx={{
            height: "30px",
            fontSize: "12px",
          }}>
          {options.map((option: Option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{ fontSize: "12px" }}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </SortWrapper>
  );
};

export default SortBar;
