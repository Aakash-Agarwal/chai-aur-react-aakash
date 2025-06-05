import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch("https://api.github.com/users/aakash-agarwal")
        .then(response => response.json())
        .then(data => setData(data))
    }, [])

    return (
        <>
            <div className='bg-gray-700 text-white text-3xl p-4 text-center'>Github User Name: {data.name}</div>
            <img src={data.avatar_url} alt="Git Avatar" />
        </>
    )
}

export default Github