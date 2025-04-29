import React, { useEffect, useState } from 'react'
function App() {
  const [data, setData] = useState([])
  const [start, setStart] = useState(0)
  const [loading, setloading] = useState(false)

  useEffect(() => {
      setloading(true)
      fetch(`https://jsonplaceholder.typicode.com/comments?_start=${start}&_limit=6`).then(res => res.json()).then(data => {
        {setData(prev => [...prev, ...data] )}
      }).catch(err => {
          console.log(err.message);
      }).finally(() => {
          setloading(false)
      })
  }, [start])

  function handleClick() {
    setStart(prev => prev + 6)
  }
 
  return <div >
      <h2 className='font-mono font-bold text-3xl my-5 border-b py-3 text-center'>Welcome to the JssCoding!</h2>
      <div className='grid grid-cols-3 container mx-auto gap-y-5 px-4'>
          {data && data.map(item => {
                return(
                    <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 max-h-80 w-auto">
                        <a href="#">
                            <img className="rounded-t-lg" src={`https://picsum.photos/400/200?random=${item.id}`} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden text-ellipsis line-clamp-1">{`${item.id}. ${item.name}`}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden text-ellipsis line-clamp-2">{item.body}</p>
                        </div>
                    </div>
                )
          })}
      </div>
      
      {loading && <div className="px-3 py-3 text-xl font-bold leading-none text-center text-blue-800 rounded-full animate-pulse dark:text-blue-500">loading...</div>}

    <div className='w-1/2 text-center text-white font-bold rounded-sm text-xl mx-auto py-3 bg-blue-600 cursor-pointer my-5' onClick={handleClick}>Ko'proq ko'rish↗</div>
    
  </div>
 
}

export default App