import axios from 'axios'
import {useEffect, useState} from 'react'

const useRequest = (initial, url)=>{
	const [data, setData] = useState(initial)

	useEffect(()=>{
		axios.get(url).then(res=>{
			console.log(res.data)
			setData(res.data)
		}).catch(err=>{
			console.log(err.response)
			alert('Deu merda!')
		})
	}, [url])
	return data
}
export default useRequest