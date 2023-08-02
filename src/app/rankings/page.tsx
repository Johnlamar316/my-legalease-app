import React, { Fragment } from "react";
import { Ranking, getRankingCompany } from "../../utils";
import RankingList from "@/components/RankingList";

export interface RankingsType {
  rankingsData: Ranking[];
}

export default async function Rankings() {
  const rankingsData: RankingsType = await getRankingCompany();
  return (
    <Fragment>
      <RankingList data={rankingsData} />
    </Fragment>
  );
}
