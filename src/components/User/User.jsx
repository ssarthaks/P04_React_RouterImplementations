import { useParams } from "react-router-dom"

function User() {

    const {userid} = useParams()
  return (
    <div className="text-white flex justify-center">
      <div className="bg-gray-300 p-4 text-3xl rounded-xl mt-5 mb-5 text-gray-700">
          <h1>Fetched the user/ from thr browser url. Value: {userid}</h1>
      </div>
      


    </div>
  )
}

export default User
