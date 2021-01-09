import React, { useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'

const GET_POSTS = gql`
query getPosts {
  posts {
    title
    text
    comments {
      author
      text
    }
  }
}
`

function App() {
    const { loading, error, data } = useQuery(GET_POSTS)

    useEffect(() => {
        console.log('data', data)
        console.log('laoding', loading)
    }, [loading, data])

    if (loading) return "Loading..."
    else if (error) return `Error! ${error.message}`

else return (
<>
    {
        data.posts.map(post => (
        <>
            <h1>{post.title}</h1>
            <p>{post.text}</p>

            {post.comments.map(comment => (
                <p><strong>{comment.author}: </strong>{comment.text}</p>
            ))}
        </>
        ))
    }
</>
);
}

export default App;
