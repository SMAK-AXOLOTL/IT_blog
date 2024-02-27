export type CommentType = {
    id: number,
    authorName: string,
    commentText: string,
    rating: number,
    replies?: ReplyType[]
}

export type ReplyType = {
    id: number,
    author: string,
    replyText: string,
    replyRating: number
}