import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/action';



    
    const useStyles = makeStyles((theme) => ({
        root: {
            marginTop:100,
          '& > *': {
            margin: theme.spacing(1),
            width: '80ch',
          },
        },
      }));
      const AddProduct =()=>{
const classes=useStyles();
const [state, setState]=useState({

    title:"",
    description:"",
    price:"",
    recipe:"",
    
});


const[error, setError]=useState("");

let history=useHistory();
let dispatch = useDispatch();

const {title, description, price, recipe, ingredients}= state;

const handleInputChange =(e)=>{
    let {name, value}=e.target
    setState({...state, [name]: value});
};

const handleSubmit =(e)=>{
    e.preventDefault();
    if(!title || !description ||!price ){
        setError("Please Fill All Input Field");
    }else{
        dispatch(addProduct(state));
        history.push("/");
        setError("");
    }
    
}

    return(
    <div>
     <Button style={{width:"100px",marginTop:"20px"}} variant="contained" color="secondary" onClick={()=>history.push("/")}>
         Go Back</Button>

                <h2>Add Product</h2>
                {error && <h3 style={{color:"red"}}>{error}</h3>}

 <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField id="standard-basic" label="Product Name" value={title}  name="title" type="text" onChange={handleInputChange}/>
      <br/>
      <TextField id="standard-basic" label="Description" value={description} name="description" type="text" onChange={handleInputChange}/>
      <br/>
      <TextField id="standard-basic" label="Price" value={price} name="price" type="number" onChange={handleInputChange} />
      <br />
<br/>


                        <Button  variant="contained" color="primary" type="submit">
                            Add Product</Button>
                        

    </form>  
      </div>
    );
}
      
export default AddProduct;