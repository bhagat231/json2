import React ,{useState,useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';


export default function Products() {
    const [Data,setData]=useState([]);
    const [Filter,setFilter]=useState(Data);
    const [Loading ,setLoading]=useState(false);
    let compMounted = true;
    
    useEffect(()=>{
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/Products`);
            if(compMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(Filter)
            }
            return () => {
                compMounted = false;
            }
        }
        getProducts();

    },[]);
    const loading = () => {
    return(
        <>
       <div className='col-md-3'>
        <Skeleton height={350}/>
       </div>
       <div className='col-md-3'>
        <Skeleton height={350}/>
       </div>
       <div className='col-md-3'>
        <Skeleton height={350}/>
       </div>
       <div className='col-md-3'>
        <Skeleton height={350}/>
       </div>
        </>
    )

    }
    const filterProducts = (Cat) => {
        const updatedList= Data.filter((x)=> x.category === Cat);
        setFilter(updatedList);
    }
    const ShowProducts =() => {
         return(
            <>
              <div className='buttons d-flex justify-content-center mb-5 pb-5'>
            <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(Data)}>ALL</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterProducts("men's clothing")}>MEN'S CLOTHING</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterProducts("women's clothing")} >WOMEN'S CLOTHING</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterProducts("jewelery")}>JEWELERY</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterProducts("electronics")}>ELECTRONIC</button>
        </div>
        {Filter.map((Products)=>{
            return(
                <>
                <div className='col-md-3 mb-4'>
                <div class="card h-100 text-center p-4" key={Products.id}>
  <img src={Products.image} class="card-img-top" alt={Products.title} height="250px"/>
  <div class="card-body">
    <h5 class="card-title mb-0">{Products.title.substring(0,12)}</h5>
    <p class="card-text lead fw-bold">${Products.price}</p>
    <NavLink className ="bg-dark kbc  "  to={`/Products/${Products.id}`} class="btn bg-white text-dark ">Buy Now</NavLink>
  </div>
</div>
                    
                </div> 
                </>
            )

        })}
            </>
         )
      
    }


  return (
    <>
    <div>
        <div className='container my-5 py-5'>
            <div className='row'>
                <div className='col-lg-12 mb-5'>
                    <h1 className='display-6 fw-bolder text-center'>LATEST PRODUCT</h1>
                    <hr/>
                </div>
            </div>
            <div className='row justify-content-center'>
                { Loading ? <loading/> : <ShowProducts/>}
            </div>
        </div>
    </div>
    </>
  )
}
