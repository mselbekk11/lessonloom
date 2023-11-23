import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./CoursePage.css";
import Button from "../../components/Button/Button";
import LessonSetUp from "../../components/LessonSetUp/LessonSetUp";
import LessonList from "../../components/LessonList/LessonList";

export default function CoursePage() {
    const location = useLocation();
    const courseInfo = location.state;
    const [addLessonVisible, setAddLessonVisible] = useState(true);
    const [resetKey, setResetKey] = useState(0);

    return (
        <div className="coursepage-container">
            <div className="course-page-intro">
                <div className="intro-title">
                    <h1>{courseInfo.title}</h1>
                    <h3>85%</h3>
                </div>
                <p>{courseInfo.description}</p>
                <img src={courseInfo.bannerImage} alt="" />
            </div>
            <LessonList key={resetKey} courseId={courseInfo._id} />
            <Button
                addLessonVisible={addLessonVisible}
                setAddLessonVisible={setAddLessonVisible}
            />
            {!addLessonVisible && (
                <LessonSetUp
                    courseId={courseInfo._id}
                    addLessonVisible={addLessonVisible}
                    setAddLessonVisible={setAddLessonVisible}
                    resetKey={resetKey}
                    setResetKey={setResetKey}
                />
            )}
        </div>
    );
}
