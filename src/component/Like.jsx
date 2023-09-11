import { useEffect, useState } from "react";
import { api } from "../Contexts";

function Like(props) {
  const [isLiked, setIsLiked] = useState();
  useEffect(() => {
    if (props.postcontent.likes?.includes(props.user + "@gmail.com")) {
      setIsLiked(true);
    }
  }, [props.postcontent.likes, props.user]);
  const submitLike = async () => {
    if (props.user) {
      setIsLiked(!isLiked);
      try {
        const likeresponse = await fetch(`${api}/p/${props.postcontent._id}/likes`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            "accessToken": props.cookies.accessToken
          },
          credentials: "include"
        });
        if (likeresponse.ok) {
          const likemessage = await likeresponse.json();
          props.setstatusCode(likeresponse.status);
          props.setMessage(likemessage);
          await props.likeadd();
        } else {
          throw new Error('Something went wrong');
        }
      } catch (error) {
        props.setstatusCode(500);
        props.setMessage(error.message);
      }
    } else {
      props.setstatusCode("notification");
      props.setMessage("Login to Like");
    }
  };

  return (
    <label htmlFor={props.postcontent._id} className="cmnt" data-text={props.postcontent.likes?.length} onClick={submitLike}>
      <button className={`like-button ${isLiked ? 'like-active' : ''}`} title="Like" type="button" name={props.postcontent._id}>
        <div className="like-wrapper" >
          <svg className="heart" width={24} height={24} viewBox="0 0 24 24" >
            <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
          </svg>
          <div className="particles likea">
            <div className="particle likeb" />
            <div className="particle likec" />
            <div className="particle liked" />
            <div className="particle likee" />
            <div className="particle likef" />
            <div className="particle likeg" />
          </div>
        </div>
      </button>
    </label>
  );
} export default Like;