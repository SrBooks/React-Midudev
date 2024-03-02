import { useState, useEffect } from "react"

const CAT_PREFIX_URL = 'https://cataas.com/'

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    // to retrieve the image every time we have a new appointment
    useEffect(() => {
        if (!fact) return

        const firstWord = fact.split(' ', 1).join(' ')

        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { _id } = response
                const url = `/cat/${_id}/says/${firstWord}`
                setImageUrl(url)
            })
    }, [fact])

    return { imageUrl: `${CAT_PREFIX_URL}${imageUrl}` }
}