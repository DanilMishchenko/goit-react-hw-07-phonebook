import PropTypes from 'prop-types';

import {
  FilterContainer,
  DescriptionFilter,
  InputFilter,
} from './ContactFilter.styled';

export const ContactFilter = ({ filter, onChange }) => {
  return (
    <FilterContainer>
      <DescriptionFilter>Find contacts by name</DescriptionFilter>
      <InputFilter
        type="text"
        name="filter"
        onChange={onChange}
        value={filter}
      ></InputFilter>
    </FilterContainer>
  );
};

ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
