import React, { Fragment } from "react";
import { getRankingCompany } from "../../utils/index";
import { Ranking } from "../../utils/type";
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
