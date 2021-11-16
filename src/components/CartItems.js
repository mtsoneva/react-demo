import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { deleteItem } from '../actions';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@mui/styles';


function CartItems({ items }) {
    const styles = useStyles();
    console.log(items)
    const dispatch = useDispatch();

    function totalPrice(item) {
        console.log(item)
        return item.salePrice * item.quantity;
    }

    return (
        <>
            {items.length > 0 ? <h1>Your Cart</h1> : <h1>Your Cart is empty</h1>}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Product</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Total price</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((item) => (
                            <TableRow
                                key={item.sku}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell className={styles.cell}>
                                    <img src={item.image} alt="" className={styles.img} />
                                </TableCell>
                                <TableCell align="left">
                                    <span>
                                        {item.name}
                                    </span>
                                </TableCell>
                                <TableCell align="left">
                                    ${item.salePrice}
                                </TableCell>
                                <TableCell align="left">
                                    {item.quantity}
                                </TableCell>
                                <TableCell align="left">
                                    ${totalPrice(item)}
                                </TableCell>
                                <TableCell align="left">
                                    <DeleteIcon
                                        className={styles.deleteButton}
                                        onClick={() => dispatch(deleteItem(item.sku))}
                                    >
                                    </DeleteIcon>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default CartItems;

const useStyles = makeStyles({
    deleteButton: {
        cursor: 'pointer'
    },
    img: {
        height: 100
    },
    cell: {
        textAlign: 'center !important'
    }
})
