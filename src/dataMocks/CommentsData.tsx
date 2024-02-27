import {CommentType} from "./Types";

export const AuthorData = {
    authorName: "Marry Poppins",
    engagementBait: "Look at this beautiful copy-paste I found online! Tell me what you think about it in the comments"
}

export const AllCommentsData: CommentType[] = [
    {
        id: 1,
        authorName: "Viktor238",
        commentText: "Was there, seen it",
        rating: 1
    },
    {
        id: 2,
        authorName: "TetyaMotya",
        commentText: "What even is this?! Delete this immediately!!! ",
        rating: -5
    },
    {
        id: 3,
        authorName: "asd",
        commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 0,
        replies: [
            {id: 1,
                author: "Ilukha",
                replyText: "nice",
                replyRating: 0
            }
        ]
    },
    {
        id: 4,
        authorName: "fghj",
        commentText: "rtyutyru",
        rating: 0
    },
    {
        id: 5,
        authorName: "HatersAltAccount",
        commentText: "This is just ***",
        rating: -752
    }
]

