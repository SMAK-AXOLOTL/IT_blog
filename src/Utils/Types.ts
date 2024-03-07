export type CommentType = {
    id: number,
    authorName: string,
    commentDateTime: number,
    commentText: string,
    rating: number,
    replies?: ReplyType[]
}

export type ReplyType = {
    id: number,
    replyAuthor: string,
    replyDateTime: number,
    replyText: string,
    replyRating: number
}