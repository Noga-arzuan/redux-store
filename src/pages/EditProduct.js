import React,{useState,useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { getSingleProduct,updateProduct } from '../redux/action';


    
    const useStyles = makeStyles((theme) => ({
        root: {
            marginTop:100,
          '& > *': {
            margin: theme.spacing(1),
            width: '80ch',
          },
        },
      }));
      const EditProduct =()=>{
const classes=useStyles();
const [state, setState]=useState({

    title:"",
    description:"",
    price:"",
    
});


const [error, setError] =useState("");
let {id} =useParams();
const{product}= useSelector((state) => state.data);
let history=useHistory();

let dispatch = useDispatch();
const {title, description, price} = state;

useEffect(() => {
  dispatch(getSingleProduct(id))  
}, []);


useEffect(()=>{
if(product){
    setState({...product});
}
},[product]);

const handleInputChange =(e)=>{
    let {name, value}=e.target
    setState({...state, [name]: value});
};

const handleSubmit =(e)=>{
    e.preventDefault();
    if(!title || !description ||!price ){
        setError("Please Fill All Input Field");
    }else{
        dispatch(updateProduct(state,id));
        history.push("/");
        setError("");
    }
    
}

    return(
    <div>
     <Button style={{width:"100px",marginTop:"20px"}} variant="contained" color="secondary" onClick={()=>history.push(`/getSingleProduct${product.id}`)}>
         Go Back</Button>

                <h2>Edit Product</h2>
                {error && <h3 style={{color:"red"}}>{error}</h3>}

 <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField id="standard-basic" label="Product Name" value={title||""}  name="title" type="text" onChange={handleInputChange}/>
      <br/>
      <TextField id="standard-basic" label="Description" value={description||""} name="description" type="text" onChange={handleInputChange}/>
      <br/>
      <TextField id="standard-basic" label="Price" value={price||""} name="price" type="number" onChange={handleInputChange} />
      <br />
      {/* <TextField id="standard-basic" label="Recipe" value={recipe} name="recipe" type="text" onChange={handleInputChange} /> */}
<br/>


                        <Button  variant="contained" color="primary" type="submit">Update Product </Button>
                        

    </form>  
      </div>
    );
}
      
export default EditProduct;