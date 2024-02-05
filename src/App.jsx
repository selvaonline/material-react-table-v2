import React from 'react';
import { Box, Button, IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import IosShareIcon from '@mui/icons-material/IosShare';
import { MaterialReactTable } from 'material-react-table';

const UsersTableComponent = ({
  columns,
  fetchedUsers,
  isLoadingUsers,
  isLoadingUsersError,
  isCreatingUser,
  isUpdatingUser,
  isDeletingUser,
  isFetchingUsers,
  handleCreateUser,
  handleSaveUser,
  setValidationErrors,
  openDeleteConfirmModal,
}) => {

  // Directly pass the props in the component
  return (
    <MaterialReactTable
      columns={columns}
      data={fetchedUsers}
      createDisplayMode="row"
      editDisplayMode="row"
      enableEditing={true}
      getRowId={(row) => row.id}
      muiToolbarAlertBannerProps={
        isLoadingUsersError
          ? {
              color: 'error',
              children: 'Error loading data',
            }
          : undefined
      }
      muiTableContainerProps={{
        sx: {
          minHeight: '500px',
        },
      }}
      onCreatingRowCancel={() => setValidationErrors({})}
      onCreatingRowSave={handleCreateUser}
      onEditingRowCancel={() => setValidationErrors({})}
      onEditingRowSave={handleSaveUser}
      renderRowActions={({ row, table }) => (
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Tooltip title="Edit">
            <IconButton onClick={() => table.setEditingRow(row)}>
              <EditIcon />
            </IconButton>
          </Tooltip>
         
        </Box>
      )}
     
      state={{
        isLoading: isLoadingUsers,
        isSaving: isCreatingUser || isUpdatingUser || isDeletingUser,
        showAlertBanner: isLoadingUsersError,
        showProgressBars: isFetchingUsers,
      }}
    />
  );
};

export default UsersTableComponent;
