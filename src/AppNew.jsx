import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { MaterialReactTable } from 'material-react-table';
import { TextField, Button } from '@mui/material';

// Mock API fetch function
const fetchUsers = async () => {
  // Simulated fetch delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // Returning mock data
  return [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  ];
};

// Custom hook for fetching users
const useGetUsers = () => useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
});

// App component
const App = () => {
  const queryClient = new QueryClient();
  const [users, setUsers] = useState([]); // State to store users data

  useEffect(() => {
    // Refetch users on initial render
    const refetch = queryClient.invalidateQueries(['users']);
    refetch();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <UsersTable users={users} setUsers={setUsers} />
    </QueryClientProvider>
  );
};

// UsersTable component
const UsersTable = ({ users, setUsers }) => {
  const { isLoading, error } = useGetUsers();

  // Handle errors gracefully
  if (error) {
    return <div>Error fetching users: {error.message}</div>;
  }

  // Columns configuration
  const columns = React.useMemo(
    () => [
      // ... other columns
    ],
    []
  );

  return (
    <div style={{ padding: '20px' }}>
      {isLoading ? (
        <div>Loading users...</div>
      ) : users.length > 0 ? (
        <MaterialReactTable
          columns={columns}
          data={users}
          // Additional props as needed for your setup
        />
      ) : (
        <div>No records to display</div>
      )}
    </div>
  );
};

// ... other components (EditableCell, validateEmail)

export default App1;
