import './Categories.css'
import * as course from '../../utilities/courses-api';
import { useState, useEffect } from 'react';
import heart from '../../img/Vector.svg'

export default function CatOne({ category }) {

  const [courses, setCourses] = useState([])

  const [filter, setFilter] = useState({categories: {$in: [`${category}`]}})

  const [newCourseInfo, setNewCourseInfo] = useState([])

  const [showCourses, setShowCourses] = useState()

  // useEffect(() => {
  //   let courseList = []
  //   course.getAllCourses(filter).then((data) => {
  //     data.forEach((courseInfo) => {
  //       courseList = [courseList, ...[courseInfo]]
  //       })})
  //       const test = courseList.map((courseObject) => {
  //         return <div>{courseObject.title}</div>
  //       })
  //       setShowCourses(test)
  // }, []);

  useEffect(() => {
    let courseList = [];
  
    course.getAllCourses(filter).then((data) => {
      data.forEach((courseInfo) => {
        courseList.push(courseInfo);
      });
  
      const test = courseList.map((courseObject) => (
      <div key={courseObject._id} className='course'>
      {/* <div className="top">{courseObject.bannerImage}</div> */}
      <div className="top"><img src={courseObject.bannerImage} alt="course-banner" /></div>
      <div className="bottom">
      <div className="left">{courseObject.title}</div>
      <div className="right"><img src={heart} alt ="favourite button"/></div>
      </div>
      </div>
      ));
  
      setShowCourses(test);
    });
  }, []);

  // async function CourseReveal() {
  //   try {
  //       const newCourseInfo = await course.getAllCourses(filter)
  //       console.log('new course info returned from controller: ', newCourseInfo)
  //   } catch(err) {
  //     console.log(err)
  //   }
  // }

  // useEffect(() => {
  //   CourseReveal()
  // }, [])

//   useEffect(() => {
//     setListOfLessons(
//         courseInfo.lessons?.map((id) => {
//             return <LessonCard lessonId={id} />;
//         })
//     );
// }, [courseInfo]);

  
  // useEffect(() => {
  //   const filteredCourses = async () => {
  //   await course.getAllCourses().then((data) => {
  //     setCourses(data)
  //   })
  //   console.log(courses)
  //   } 
  // }, [])

  return(
    <>
      <h1>{category}</h1>
      <div className="course-grid">
      {showCourses}
      </div>
    </>
  )
}