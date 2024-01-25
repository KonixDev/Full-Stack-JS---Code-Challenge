import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import DataTable from './components/DataTable';
import { useGetFiles } from './hooks/useGetFiles';
import DataTableSkeleton from './components/DataTableSkeleton';
import SearchBar from './components/SearchBar';
import useSearch from './hooks/useSearch';

const App = () => {
  const { search, handleSearch } = useSearch();
  const { data, loading, error } = useGetFiles(search);

  return (
    <div>
      <Header />
      <SearchBar handleSearch={handleSearch} />
      {loading ? (
        <DataTableSkeleton />
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <DataTable data={data} />
      )}
    </div>
  );
};

export default App;
