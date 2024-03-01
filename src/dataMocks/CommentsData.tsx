import {CommentType} from "./Types";

export const AllCommentsData: CommentType[] = [
    {
        id: 1,
        authorName: "Довольный Ворчун",
        commentDateTime: new Date(2024, 1, 28, 16, 37),
        commentText: "Finally, a good post",
        rating: 1
    },
    {
        id: 2,
        authorName: "Always angry",
        commentDateTime: new Date(2024, 1, 28, 16, 37),
        commentText: "Это что такое? Немедленно удалите это! Куда смотрят администраторы?!",
        rating: -5
    },
    {
        id: 3,
        authorName: "Pasta-bot",
        commentDateTime: new Date(2024, 1, 28, 16, 37),
        commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: -1,
        replies: [
            {
                id: 1,
                replyAuthor: "Ilukha",
                replyDateTime: new Date(2024, 1, 28, 16, 37),
                replyText: "down-vote this, thx",
                replyRating: 0
            }
        ]
    },
    {
        id: 4,
        authorName: "fghj",
        commentDateTime: new Date(2024, 1, 28, 16, 37),
        commentText: "rtyutyru",
        rating: 0
    },
    {
        id: 5,
        authorName: "HatersAltAccount",
        commentDateTime: new Date(2024, 1, 28, 16, 37),
        commentText: "This is just ***",
        rating: -752
    }
]

