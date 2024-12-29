import UsersList from '@/app/(dashboard)/[id]/l/[projectId]/components/UsersList';
import SearchBar from './SearchBar';

const AddAssignee = () => {
  return (
    <div className="relative">
      <div className="absolute top-8 mt-2 bg-white border rounded p-2 w-[280px] ">
        <SearchBar />
        <UsersList />
      </div>
    </div>
  );
};

export default AddAssignee;
