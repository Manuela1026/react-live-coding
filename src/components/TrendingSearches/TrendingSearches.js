import {useEffect, useState} from 'react'
import getTrendingTerms from 'services/getTrendingTermsServices'


export default function TrendingSearches () {
    const [trends, setTrends] = useState([])

    useEffect(function () {
        getTrendingTerms().then(setTrends)
    }, [])

    return 
}