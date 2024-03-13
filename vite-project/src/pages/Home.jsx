import Button from "../components/Button"
import Text from "../components/Text"
import Input from "../components/input"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

export const data = [
    {
        id: 0,
        name: "React",
        description: "React Açıklama"
    },
    {
        id: 1,
        name: "Vue",
        description: "Vue Açıklama"
    },
    {
        id: 2,
        name: "Angular",
        description: "Angular Açıklama"
    }
]


const Home = () => {

    const navigate = useNavigate();
    const [allData, setAllData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const { data } = await axios.get('https://fakestoreapi.com/products');
            setAllData(data);
            setLoading(false);
        }
        getData();
    }, [])


    return (
        loading ? <div>Loading...</div> :
            
            <div>
                
                {
                    allData?.map((data, index) => {
                        return (
                            <div onClick={()=>navigate(`detail/${data?.id}`)} key={index} style={{marginBottom:'30px',cursor:'pointer'}}>
                                <div>{data?.title}</div>
                                    <img src={data?.image} alt="" width="200" height="200" />                               
                            </div>
                        )
                    })
                }


            </div>
    )
}

export default Home