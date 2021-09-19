import React ,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {deleteProduct, loadProducts} from '../redux/action';
import {useHistory} from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const UseButtonStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);





const useStyles = makeStyles({
  table: {
    marginTop:100,
    minWidth:900,

  },
});


const Home=()=>{
   const classes=useStyles ();
  const buttonStyles= UseButtonStyles();
    let dispatch =useDispatch();
    let history=useHistory();
    const{products}=useSelector(state=>state.data);

    useEffect (() => {
    dispatch(loadProducts());
    }, []);
    
    const handleDelete =(id)=>{
      if(window.confirm("Are you sure you want to delete this product?")){
        dispatch(deleteProduct(id));
        dispatch(loadProducts());
      }
      };

    return(
      <div>
                      <div className={buttonStyles.root}>
                        <Button variant="contained" color="primary" onClick={()=>history.push("/addProduct")}>Add  Product</Button>
                        </div>

     
             <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">description</StyledTableCell>
            <StyledTableCell align="center">price</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>



            
          </TableRow>
        </TableHead>
        <TableBody> 
          {products && products.map((product) => (
            <StyledTableRow key={product.id}>
             <StyledTableCell component="th" scope="row">
                {product.title}
              </StyledTableCell>
              <StyledTableCell align="center">{product.description}</StyledTableCell>
              <StyledTableCell align="center">{product.price}</StyledTableCell>
              <StyledTableCell align="center">{product.ingredients}</StyledTableCell>

              <StyledTableCell align="center">{}

              <div className={buttonStyles.root}>

              <ButtonGroup variant="contained"  aria-label="contained primary button group">
  <Button color="secondary" onClick={()=>handleDelete(product.id)}>Delete</Button>
  <Button  color="primary" onClick={()=> history.push(`/editProduct/${product.id}`)}>Edit </Button>
  
</ButtonGroup>
</div>
</StyledTableCell>
             </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
); 
}
        
    

export default Home;