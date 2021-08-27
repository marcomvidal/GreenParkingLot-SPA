import { InputGroup } from 'react-bootstrap';
import FormControl from 'components/FormControl';
import { SearchBarProps } from './types';

const SearchBar = ({ placeholder, onChange }: SearchBarProps) => (
  <InputGroup className='my-3'>
    <FormControl
      placeholder={placeholder}
      aria-label={placeholder}
      aria-describedby='search-bar'
      onChange={onChange}
    />
  </InputGroup>
);

export default SearchBar;
