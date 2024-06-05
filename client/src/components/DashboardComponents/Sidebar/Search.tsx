import { Input } from "@/components/ui/input";
import { GoIcon, SearchIcon } from "../Icons";

type SearchProps = {
  className?: string;
  setSearchQuery: (query: string) => void;
  searchQuery: string;
};

const Search = ({ className, setSearchQuery, searchQuery }: SearchProps) => {
  // TODO: Implement showSearchResults function using search API
  const showSearchResults = () => {
    console.log("Search results for: ", searchQuery);
  };

  return (
    <div className={className}>
      <Input
        placeholder="Search"
        className="h-8 px-10"
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <SearchIcon className="absolute top-1 left-1 pointer-events-none" />
      <GoIcon
        className="absolute top-0 right-0 cursor-pointer rounded-lg overflow-hidden"
        disabled={searchQuery === ""}
        onClick={showSearchResults}
      />
    </div>
  );
};

export default Search;
