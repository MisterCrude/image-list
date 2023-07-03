import { Input, Box } from "@chakra-ui/react";
import { ChangeEvent } from "react";

interface SearchBarProps {
  query: string;
  onChange: (query: string) => void;
}

const SearchBar = ({ query, onChange }: SearchBarProps) => {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    onChange(target.value);
  };

  return (
    <Box mb={10}>
      <Input
        placeholder="Find image by title"
        value={query}
        onChange={handleChange}
      />
    </Box>
  );
};

export default SearchBar;
