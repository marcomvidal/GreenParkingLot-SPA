import { FormControl, InputGroup } from "react-bootstrap";
import { SearchBarProps } from "./types";
import { ReactComponent as SearchIcon } from './icon.svg';
import { SearchIconContainer } from "./styles";

const SearchBar = ({ placeholder, onChange }: SearchBarProps) => (
  <InputGroup className="my-3">
    <FormControl
      placeholder={placeholder}
      aria-label={placeholder}
      aria-describedby='searchbar'
      onChange={onChange}
    />

    <SearchIconContainer>
      <SearchIcon />
    </SearchIconContainer>
  </InputGroup>
);

export default SearchBar;
