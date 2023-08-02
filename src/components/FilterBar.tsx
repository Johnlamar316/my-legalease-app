"use client";
import React from "react";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";
import styled from "styled-components";

export enum FilterOption {
  All = "all",
  Local = "local",
  Global = "global",
}

interface FilterBarProps {
  filterValue: FilterOption;
  setFilterValue: (value: FilterOption) => void;
}

interface Option {
  value: FilterOption;
  label: string;
}

const options: Option[] = [
  { value: FilterOption.All, label: "All Firms" },
  { value: FilterOption.Local, label: "Local Firms" },
  { value: FilterOption.Global, label: "Global Firms" },
];

const FilterWrapper = styled.div`
  margin-bottom: 14px;
  margin-top: 56px;
`;

const StyledRadioGroup = styled(RadioGroup)`
  display: flex;
  flex-direction: column;
`;

const StyledFormControlLabel = styled(FormControlLabel)`
  .MuiFormControlLabel-label {
    font-size: 12px;
    line-height: 0;
  }
  .MuiRadio-root {
    color: black;
    &.Mui-checked {
      color: black;
    }
    padding-bottom: 3px;
  }
`;

const FilterBar: React.FC<FilterBarProps> = ({
  filterValue,
  setFilterValue,
}) => {
  return (
    <FilterWrapper>
      <StyledRadioGroup
        row
        aria-label="sort"
        name="sort"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value as FilterOption)}>
        {options.map((option) => (
          <StyledFormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </StyledRadioGroup>
    </FilterWrapper>
  );
};

export default FilterBar;
