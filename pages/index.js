import Layout from '../components/Layout';
import GuitarList from '../components/GuitarList';
import Course from '../components/Course';
import BlogList from "../components/BlogList";
import { useEffect, useState } from 'react';

export default function Home({guitars, course, blog}) {
  const [randomGuitar, setrandomGuitar] = useState({});
  useEffect(()=>{
    setrandomGuitar(guitars[Math.ceil(Math.random() * guitars.length - 1)])
  },[guitars]);

  return (
    <Layout
      guitar={randomGuitar}
    >    
        <main className='contenedor'>
          <h1 className='heading'>Our collection</h1>
          <GuitarList
            guitars={guitars}
          />
        </main>
        <Course
          course={course}
        />
        <section className='contenedor'>
          <BlogList
              entries={blog}
          />
        </section>
    </Layout>
  )
}

export async function getServerSideProps() {
  const guitarsURL = `${process.env.API_URL}/guitars`;
  const courseURL = `${process.env.API_URL}/course`;
  const blogURL = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`;

  const [resGuitars, resCourse, resBlog] = await Promise.all([
    fetch(guitarsURL),
    fetch(courseURL),
    fetch(blogURL)
  ]);

  const [guitars, course, blog] = await Promise.all([
    resGuitars.json(),
    resCourse.json(),
    resBlog.json()
  ]);

  return {
      props:{
          guitars,
          course,
          blog
      }
  }
}