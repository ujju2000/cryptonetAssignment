
import React, {useState, useEffect}  from 'react'

export default function Card() {
  const [data, setData] = useState([]); 
  const [loader, setLoader] = useState(true);
  const fetchData = async () => {
    const data = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
    return data.json();
  }

  useEffect(() => {
    fetchData().then((res) => setData(res.results));
    
    setTimeout(() => {
        setLoader(false);
    }, 3000);
  },[])
    
  return (
      <>
        { !loader ? ( 
        <div className = 'bg-slate-200   m-auto w-1/3 p-4  flex border-black rounded-md border-2 justify-around items-center  font-bold cursor-pointer'>
                <img src={data[0].picture.large} alt="" className = 'border-1 border-black'/>
                <div>
                    <h4 className = 'text-3xl text-underline'>{data[0].name.first} {data[0].name.last}</h4>     
                    <h4 className = 'text-2xl'>{data[0].gender}</h4>
                    <h4 className = 'text-1xl'>{data[0].phone}</h4>
                </div>

            </div>
        ) : <div className = 'flex flex-col '> 
                <img src="assets/loader.gif" alt="" className = 'h-[200px] w-[200px] '/>
                <h1 className = 'font-bold text-center  mt-3 uppercase'>Fetching Data</h1>
        </div>}
    </>
  )
}


