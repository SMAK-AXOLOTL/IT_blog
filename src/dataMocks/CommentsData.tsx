import {CommentType} from "../Utils/Types";

export const AllCommentsData: CommentType[] = [
    {
        id: 0,
        authorName: "Довольный Ворчун",
        commentDateTime: 1706459820,
        commentText: "Finally, a good post",
        rating: 1
    },
    {
        id: 1,
        authorName: "Always angry",
        commentDateTime: 1706459820,
        commentText: "Это что такое? Немедленно удалите это! Куда смотрят администраторы?!",
        rating: -5
    },
    {
        id: 2,
        authorName: "Pasta-bot",
        commentDateTime: 1706459940,
        commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: -1,
        replies: [
            {
                id: 0,
                replyAuthor: "Ilukha",
                replyDateTime: 1706460060,
                replyText: "down-vote this, thx",
                replyRating: 0
            }
        ]
    },
    {
        id: 3,
        authorName: "fghj",
        commentDateTime: 1706466120,
        commentText: "rtyutyru",
        rating: 0
    },
    {
        id: 4,
        authorName: "HatersAltAccount",
        commentDateTime: 1706467020,
        commentText: "This is just ***",
        rating: -752
    }
]

