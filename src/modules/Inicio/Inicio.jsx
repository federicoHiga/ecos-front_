import React, { useState } from "react";
import "../../assets/styles/Inicio/inicio.css";
import PostsSection from "../PostsSection/index";
import ImpactEnterprises from "../../components/ImpactEnterprises";
import CategoriesGrid from "../../components/CategoriesGrid";
import SuppliersSection from "../SuppliersSection";
import Searchbar from "../../components/Searchbar";
import useGetByNameHook from "../../utils/services/hooks/getHooks";
import { Typography, useTheme } from "@mui/material";
import {
  NoResultsCard,
  SearchResultCard,
} from "../../components/SearchResultsCards";
import { SuppliersData } from "../../utils/data/suppliersMock";
import SearchByChildren from "../../components/SearchFlexible";

export default function Inicio() {
  return (
    <div>
      <SearchByChildren>
        <ImpactEnterprises />
        <SuppliersSection />
        <CategoriesGrid />
        <PostsSection />
      </SearchByChildren>
    </div>
  );
}
