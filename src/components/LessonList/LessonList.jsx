import "./LessonList.css";
import Lesson from "../../components/Lesson/Lesson";
import { useEffect, useState } from "react";
import * as course from "../../utilities/courses-api";

export default function LessonList({ courseId }) {
    const [courseInfo, setCourseInfo] = useState([]);
    const [listOfLessons, setListOfLessons] = useState();
    useEffect(() => {
        const fetchCourse = async () => {
            await course.getCourse(courseId).then((data) => {
                setCourseInfo(data);
                console.log("thi shhit is data: ", data);
            });
        };
        fetchCourse();
    }, []);

    useEffect(() => {
        setListOfLessons(
            courseInfo.lessons?.map((id) => {
                return <Lesson lessonId={id} />;
            })
        );
    }, [courseInfo]);

    return (
        <div className="container-grey">
            {listOfLessons}
        </div>
    );
}

// const listOfLessons = async () => {
//   await courseInfo.lessons.map((lesson) => {
//     console.log('each lesson here', lesson)
//     console.log('each lesson._id here', lesson._id)
//     return <p>{lesson}</p>
//   })
// }
