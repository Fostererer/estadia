import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'

export default function index({data}) {
  return (
    <Layout>
        
      <h1>primer proyecto</h1>
      {
        data.map(({id, title, body}) =>(
          <div id='articulos' Key={id}>
            <h3>
              <Link href={`/blog/${id}`}>
              {id}- {title}
              </Link>
              </h3>
            <p>{body}</p>
          </div>
        ))
      }
      <Image  
      src="/img/i.jpg" 
      width={536} 
      height={354}
      alt="Mi Imagen"
      ></Image>
      

      <Link href="/">
      <i>
      Volver al Inicio 
      </i>
      </Link>
      
      <br></br>
      </Layout>
  );
}

export async function getStaticProps (){
  try{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await  res.json();
    return{
      props: {
        data,
      },
    }
  } catch(error){
    console.log(error)
  }
  
}
