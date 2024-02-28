export type CommentType = {
    id: number,
    authorName: string,
    commentDateTime: Date,
    commentText: string,
    rating: number,
    replies?: ReplyType[]
}

export type ReplyType = {
    id: number,
    replyAuthor: string,
    replyDateTime: Date,
    replyText: string,
    replyRating: number
}