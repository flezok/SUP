import { useRouteLoaderData } from "react-router-dom";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";

export default function Comment({ id, user, employeeId, text, taskId }) {
    const { id: userId } = useRouteLoaderData("root");
    const client = useQueryClient();

    const handleDelete = () => {
        axios.delete(`http://localhost:3000/comments/${id}`, { withCredentials: true }).then((res) => {
            if (res.data.success) {
                client.refetchQueries({ queryKey: ["comments", taskId] });
            };
        });
    };

    return (
        <div className="popup__list-item">
            <img className="popup__list-img" src={user.avatarBase64}></img>
            <div className="popup__list-inner">
                <p className="popup__list-name">
                    {user.firstName} {user.lastName}
                </p>
                <p className="popup__list-text">
                    {text}
                </p>
            </div>
            {userId === employeeId && <button onClick={handleDelete} className="popup__list-delete" />}
        </div>
    )
};