import { useLocation, useNavigate, useParams } from "react-router-dom"
import { data } from "./Home";
import { useEffect, useState } from "react";
import Home from "./Home";
import axios from 'axios';


const Detail = () => {
    const { id } = useParams();
    const [detailData, setDetailData] = useState();
    // const[getData,setGetData]=useState(null);

    // const location=useLocation();
    // console.log(location.pathname)

    // useEffect(()=>{
    //     if(id) setGetData(data.find(dt=>dt.id==id));
    // },[id])

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setDetailData(data);
        }
        getData();
    }, [id])

    console.log(detailData, "detailData")

    return (
        <>
            {   /* <h2>{getData?.name}</h2>
                <div>{getData?.description}</div> */}

            <div
                style={{ marginBottom: '30px', cursor: 'pointer' }}>
                <div>{detailData?.title}</div>
                <img src={detailData?.image} alt="" width="200" height="200" />
            </div>



        </>
    )
}

export default Detail