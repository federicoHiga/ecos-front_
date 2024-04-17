/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./styles.css";
import AdminProviderCard from "../AdminProviderCard";
import { NoResultsCard } from "../../../components/SearchResultsCards";

const ProvidersList = ({ providers }) => {
  const [selectedProvider, setSelectedProvider] = useState(null);

  const handleSelected = (selected) => {
    setSelectedProvider(selected);
  };

  return (
    <>
      {selectedProvider !== null ? (
        <div className="provider-list-selected-provider">
          Tiene que mostrar el formulario para editar con los datos de {selectedProvider.name}
        </div>
      ) : (
        <div className="providers-list-main-container">
          {providers.length > 0 ?
            providers.map((provider) => (
              <div key={provider.id}>
                <AdminProviderCard provider={provider} handleClick={handleSelected} />
              </div>
            ))
            :
            (<NoResultsCard title={'Todavía no hay proveedores en esta sección'} subtitle={'Cuando estén disponibles los podrás ver'} />)
          }
        </div>
      )}
    </>
  );
};

export default ProvidersList;
