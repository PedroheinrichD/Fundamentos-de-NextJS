// https://jsonplaceholder.typicode.com/posts

type Props = {
    params: {
        postId: string
    }
}

type PostType = {
    userId: number
    id: number
    title: number
    body: number
}

export const generateMetadata = async ({ params }: Props) => {
    const { postId } = await params

    const postRequest = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const post:PostType = await postRequest.json()


    return {
        title: post.title
    }
}

export default async function page({ params }: Props) {
    const { postId } = await params

    const postRequest = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const post:PostType = await postRequest.json()

    return(
        <div className="flex items-center justify-center flex-col">
            <h1 className="text-3xl">{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
    
}