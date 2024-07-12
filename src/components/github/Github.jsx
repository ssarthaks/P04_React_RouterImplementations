// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {

    // const [data,setData] = useState([])
    
    // useEffect(() => {
    //     fetch('https://api.github.com/users/ssarthaks')
    //     //string to json format
    //     .then (res => res.json())
    //     //data is then set to data
    //     .then (data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    const data = useLoaderData()

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl ">
      Realtime Data Fetching Through API Integration 
      <br />
      Github Real-time followers: {data.followers}
      <br />
      <div className="text-xl text-gray-900">Sadly Zero Followers 😭</div>
      <div className="flex flex-col justify-center mt-7">
        <p className="underline text-2xl">Profile Pic</p>
        <div className="flex justify-center mt-2"><img src={data.avatar_url} alt="Git Picture" width="300" /></div>
      </div>
    </div>
  )
}

export default Github
