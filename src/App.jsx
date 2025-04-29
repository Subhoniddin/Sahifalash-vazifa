import React, { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])
  const [start, setStart] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/comments?_start=${start}&_limit=6`)
      .then(res => res.json())
      .then(data => {
        setData(prev => [...prev, ...data])
      })
      .catch(err => {
        console.log(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [start])

  function handleClick() {
    setStart(prev => prev + 6)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-10">
      <h2 className="font-mono font-bold text-3xl py-5 border-b border-gray-400 mb-5 text-center text-gray-800 dark:text-white">
        Welcome to the JssCoding!
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto px-4">
        {data.map(item => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-80 max-w-[400px] w-full mx-auto overflow-hidden"
          >
            <a href="#">
              <img
                className="rounded-t-lg w-full object-cover"
                src={`https://picsum.photos/400/200?random=${item.id}`}
                alt=""
              />
            </a>
            <div className="p-4">
              <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
                  {`${item.id}. ${item.name}`}
                </h5>
              </a>
              <p className="text-sm text-gray-700 dark:text-gray-400 line-clamp-3">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      {loading && (
        <div className="text-center text-blue-800 dark:text-blue-400 font-semibold mt-6 animate-pulse">
          Yuklanmoqda...
        </div>
      )}

      <div
        className="w-[90%] sm:w-1/2 text-center text-white font-bold rounded-md text-xl mx-auto py-3 bg-blue-600 cursor-pointer mt-8 hover:bg-blue-700 transition-all duration-200"
        onClick={handleClick}
      >
        Ko'proq ko‘rish ↗
      </div>
    </div>
  )
}

export default App
