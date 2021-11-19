export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}    


export default function Home({data}) {
    return (
      <>
        <h1 className="hola">Blog Page</h1> 
        <div>
          {data.map((post, i) => {
            return (
              <div key={i}>
                <h1 className="titulo">{post.title}</h1>
                <p className="body">{post.body}</p>
            </div>
            )
          })}
        </div>
      </>
    )
  }