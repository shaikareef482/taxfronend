import React, { ChangeEvent } from 'react';

interface FilterProps {
  filters: { year: string; type: string; organization: string };
  setFilters: React.Dispatch<React.SetStateAction<{ year: string; type: string; organization: string }>>;
  applyFilters: () => void;
}

const TransactionFilter: React.FC<FilterProps> = ({ filters, setFilters, applyFilters }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="row mb-3">
      <div className="col">
        <input
          type="text"
          name="year"
          className="form-control"
          placeholder="Year"
          value={filters.year}
          onChange={handleChange}
        />
      </div>
      <div className="col">
        <input
          type="text"
          name="type"
          className="form-control"
          placeholder="Type"
          value={filters.type}
          onChange={handleChange}
        />
      </div>
      <div className="col">
        <input
          type="text"
          name="organization"
          className="form-control"
          placeholder="Organization"
          value={filters.organization}
          onChange={handleChange}
        />
      </div>
      <div className="col">
        <button className="btn btn-primary" onClick={applyFilters}>
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default TransactionFilter;