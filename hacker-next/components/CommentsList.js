import Comment from "./Comment";

export default ({ comments }) => (
    <React.Fragment>
        {comments.map(comment => (
            <Comment key={comment.id} comment={comment}></Comment>
        ))}
    </React.Fragment>
)