import SearchBar from "components/SearchBar";
import { DropdownButton } from "react-bootstrap";
import { ActionBarProps } from "./types";

const ActionBar = ({
  children,
  searchPlaceholder,
  onSearchTextChange,
}: ActionBarProps) => (
  <div className='d-flex align-items-center'>
    <DropdownButton title='Actions' variant='success' className='mr-1'>
      {children}
    </DropdownButton>
    <SearchBar
      placeholder={searchPlaceholder}
      onChange={onSearchTextChange}
    />
  </div>
);

export default ActionBar;
