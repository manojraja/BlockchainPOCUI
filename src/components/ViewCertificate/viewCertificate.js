import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Layout from '../Layout/layout';
import Typography from '@mui/material/Typography';

const columns = [
  { id: 'fileHash', label: 'Certificate Hash', minWidth: 170 },
  { id: 'issuerName', label: 'Issuer Name', minWidth: 100 },
  {
    id: 'dateOfIssuance',
    label: 'Date Of Issuance',
    minWidth: 170,
  },

  {
    id: 'placeOfIssuance',
    label: 'Place Of Issuance',
    minWidth: 170,
  },
  {
    id: 'certificateType',
    label: 'Certificate Type',
    minWidth: 170,
  },
  {
    id: 'timestamp',
    label: 'Timestamp',
    minWidth: 170,
  },
];

function createData(fileHash, issuerName, dateOfIssuance,placeOfIssuance,certificateType, timestamp) {
  return {fileHash, issuerName, dateOfIssuance,placeOfIssuance,certificateType, timestamp};
}

const rows = [
  createData('sbfskjbfskj', 'manoj', '25-05-2023', 'chennai','edu','25-05-2023'),
  createData('sbfskjbfskj', 'test1', '25-05-2023', 'chennai','edu','25-05-2023'),
  createData('sbfskjbfskj', 'test2', '25-05-2023', 'chennai','edu','25-05-2023'),

];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const CustomTableHeader = ({ children }) => {
    return (
      <TableCell>
        <Typography variant="subtitle1" fontWeight="bold">
          {children}
        </Typography>
      </TableCell>
    );
  };
  return (
    <>
    <Layout page="NoForm"/>
    <Paper sx={{ marginLeft:"5%", width: '90%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead sx={{fontWeight:900}}>
            <TableRow>
              {columns.map((column) => (
                <CustomTableHeader
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </CustomTableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
    </>
  );
}