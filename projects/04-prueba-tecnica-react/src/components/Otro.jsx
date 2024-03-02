import { useCatImage } from "../hooks/useCatImage"

export function Otro() {
    const { imageUrl } = useCatImage({ fact: 'hello' })

    return (
        <>
            {imageUrl && <img src={imageUrl} />}
        </>
    )
}