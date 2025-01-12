import "./LessonCard.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../pages/App/App";
import { Link } from "react-router-dom";

export default function Lesson({ lessonInfo, lessonIdx, courseLessons, courseInfo }) {
    const [thumbnail, setThumbnail] = useState("");
    const { user } = useContext(UserContext);
    useEffect(() => {
        try {
            if (lessonInfo.youTubeLink) {
                setThumbnail(
                    lessonInfo.youTubeLink.split("v=")[1].split("&")[0]
                );
            }
        } catch (err) {
            console.log(err);
        }
    }, []);

    if (lessonInfo) {
        return (
            <div className="lesson">
                <Link to={`/lessons/${lessonInfo._id}`} state={{lessonInfo, lessonIdx, courseLessons, courseInfo}}>
                    <div className="lessontop">
                        <img
                            src={`https://img.youtube.com/vi/${thumbnail}/hqdefault.jpg`}
                            alt="YouTube thumbnail"
                            />
                    </div>
                    <div className="bottom">
                        <div className="left">{lessonInfo.title}</div>
                        {user && (
                            <div className="right">
                            </div>
                        )}
                    </div>
                </Link>
            </div>
        );
    }
}
