import {AuthorData} from "./AuthorData";
import {AllCommentsData} from "./CommentsData";
import ContentPlaceholder from "./ContentPlaceholder";

export const PostData = {
    postAuthor: AuthorData,
    postTime: new Date(2024, 2, 16, 18, 34),
    postViews: 14876,
    engagementBait: "What are your thoughts on the frontend? Share them in the comments!",
    commentsData: AllCommentsData,
    post: ContentPlaceholder
}