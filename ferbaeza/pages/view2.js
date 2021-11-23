import Link from 'next/link'


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
            <div className="back">
                <Link href="/">
                    <a>Home</a>
                </Link>

            </div>
          <section className="sec_counter">

        </section>
        <div className="mainblog">

        <h1 className="hola">Blog Page</h1> 
        <div className='blog'>
          {data.map((post, i) => {
            return (
              <div className="entry" key={i}>
                <h1 className="titulo">{post.title}</h1>
                <p className="body">{post.body}</p>
            </div>
            )
          })}
        </div>
        </div>
      </>
    )
  }