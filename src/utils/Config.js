export const Youtube_Videos_Api = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${process.env.REACT_APP_API_KEY}`;
export const Youtube_Search_Api =
  "https://naughty-rose-sweatsuit.cyclic.app/suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_VIDEO_SEARCH_RESULTS = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=${process.env.REACT_APP_API_KEY}&q=`;
export const Offset_Live_Chat = 25;
export const commentsData = [
  {
    name: "Avery Hernandez",
    comment: "Great tutorial!",
    replies: [
      {
        name: "Oliver Thompson",
        comment: "Thanks for sharing!",
        replies: [],
      },
      {
        name: "Sophie White",
        comment: "Can't wait for more!",
        replies: [
          {
            name: "Noah Martinez",
            comment: "Same here!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Liam Davis",
    comment: "Awesome content",
    replies: [
      {
        name: "Ava Anderson",
        comment: "Agreed!",
        replies: [],
      },
    ],
  },
  {
    name: "John",
    comment: "This is a great tutorial!",
    replies: [
      {
        name: "Mary",
        comment: "I agree, it's really helpful.",
        replies: [
          {
            name: "David",
            comment: "Yes, the author did a great job!",
            replies: [
              {
                name: "Karen",
                comment: "Absolutely, I learned so much!",
                replies: [
                  {
                    name: "Steve",
                    comment: "I can't wait for the next one!",
                    replies: [
                      {
                        name: "Lisa",
                        comment: "Me too, I hope it's just as good!",
                        replies: [
                          {
                            name: "Paul",
                            comment:
                              "I'm sure it will be, this author never disappoints!",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Aria Robinson",
    comment: "Incredible job!",
    replies: [
      {
        name: "Ethan Brown",
        comment: "Thanks, glad you liked it!",
        replies: [
          {
            name: "Sophia Martin",
            comment: "Agreed, great work",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Emma Wilson",
    comment: "Can't wait for the next one",
    replies: [],
  },
  {
    name: "James Thompson",
    comment: "Loved it, keep it up!",
    replies: [
      {
        name: "Avery Garcia",
        comment: "Me too!",
        replies: [],
      },
      {
        name: "Olivia Smith",
        comment: "Great tutorial!",
        replies: [
          {
            name: "Noah Hernandez",
            comment: "Agreed!",
            replies: [],
          },
          {
            name: "Sophie Lee",
            comment: "Looking forward to more!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Evelyn Johnson",
    comment: "This was so helpful, thank you!",
    replies: [
      {
        name: "William Clark",
        comment: "Glad it was helpful!",
        replies: [],
      },
    ],
  },
  {
    name: "Lucas Anderson",
    comment: "Amazing work, keep it up!",
    replies: [
      {
        name: "Isabella Brown",
        comment: "Agreed!",
        replies: [
          {
            name: "Sophia Hernandez",
            comment: "Looking forward to more!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Emily Davis",
    comment: "Looking forward to the next one",
    replies: [],
  },
  {
    name: "Mia Clark",
    comment: "Awesome content",
    replies: [],
  },
  {
    name: "Michael Thompson",
    comment: "Can't wait for more!",
    replies: [
      {
        name: "Avery Hernandez",
        comment: "Same here!",
        replies: [],
      },
    ],
  },
  {
    name: "Sophia Davis",
    comment: "Incredible job!",
    replies: [
      {
        name: "Lucas Anderson",
        comment: "Thanks, glad you liked it!",
        replies: [],
      },
      {
        name: "Mia Hernandez",
        comment: "Keep it up!",
        replies: [],
      },
    ],
  },
];
export const Explore = [
  "Music",
  "Sports",
  "Gaming",
  "Fashion",
  "Learning",
  "News",
  "Coding",
  "Funny",
];
