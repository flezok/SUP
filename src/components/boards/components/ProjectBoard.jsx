import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";

export default function ProjectBoard({ title, description, id, projectAvatar, isFavorite }) {
    const navigate = useNavigate();
    const client = useQueryClient();

    const [isFollowed, setIsFollowed] = useState(isFavorite);

    const handleButtonClick = () => {
        axios.post(`http://localhost:3000/project/${id}/favorite`, { currentState: isFavorite }, { withCredentials: true }).then((res) => {
            if (res.data.isFavorite) {
                setIsFollowed(true);
            } else {
                setIsFollowed(false)
            };
            [["projectType", "all"], ["projectType", "lastVisited"]].forEach((key) => {
                client.setQueryData(key, (oldData) => {
                    return oldData.map((proj) => proj.id === id ? { ...proj, isFavorite: res.data.isFavorite } : proj);
                });
            });
            client.refetchQueries({ queryKey: ["projectType", "favorite"] });
        });
    };

    const handleBoardClick = (projectId = id) => {
        navigate(`/project/${projectId}`);
    };

    return (
        <div key={id} className="boards__item">
            <div className="boards__item-wrapper" onClick={() => { handleBoardClick(id); }}>
                <img className="boards__item-img" src={projectAvatar}></img>

            </div>
            <button className={`boards__item-btn ${isFavorite ? "boards__item-btn--follow" : ""}`}
                onClick={handleButtonClick}>
            </button>

            <h4 className="boards__item-title">
                {title}
            </h4>
            <p className='boards__item-text'>
                {description}
            </p>
        </div>
    );
};