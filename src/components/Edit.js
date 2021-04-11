import {useParams} from "react-router-dom";

const Edit = () => {
    const {studentId} = useParams();
    return (
     <article className="panel is-danger">
          <div className="panel-heading">
            <span class="icon-text">
              <span class="icon">
                <i class="fas fa-calendar-check"></i>
              </span>
              <span>EDIT A STUDENT </span>
            </span>
          </div>   
    </article>
    );
}

export default Edit;