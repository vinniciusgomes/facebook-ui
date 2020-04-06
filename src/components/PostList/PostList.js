import React, { Component } from "react";

import "./PostList.css";

import SinglePost from "../SinglePost/SinglePost";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Vanessa Romero",
          avatar: "https://i.pravatar.cc/150?img=1",
        },
        date: "04 Jun 2019",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae luctus nulla. Cras fermentum velit ligula, et tincidunt lorem ornare vitae. Phasellus lacinia tellus id suscipit lobortis.",
        comments: [
          {
            id: 2,
            author: {
              name: "Vinnicius Gomes",
              avatar: "https://avatars2.githubusercontent.com/u/28509313?v=4",
            },
            date: "04 Jun 2019",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae luctus nulla. Cras fermentum velit ligula, et tincidunt lorem ornare vitae. Phasellus lacinia tellus id suscipit lobortis.",
          },
        ],
      },
      {
        id: 3,
        author: {
          name: "Neil Cook",
          avatar: "https://i.pravatar.cc/150?img=8",
        },
        date: "04 Jun 2019",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae luctus nulla. Cras fermentum velit ligula, et tincidunt lorem ornare vitae. Phasellus lacinia tellus id suscipit lobortis.",
        comments: [
          {
            id: 4,
            author: {
              name: "Clara Lisboa",
              avatar: "https://i.pravatar.cc/150?img=5",
            },
            date: "04 Jun 2019",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae luctus nulla. Cras fermentum velit ligula, et tincidunt lorem ornare vitae. Phasellus lacinia tellus id suscipit lobortis.",
          },
          {
            id: 5,
            author: {
              name: "Cézar Toledo",
              avatar: "https://i.pravatar.cc/150?img=11",
            },
            date: "04 Jun 2019",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae luctus nulla. Cras fermentum velit ligula, et tincidunt lorem ornare vitae. Phasellus lacinia tellus id suscipit lobortis.",
          },
        ],
      },
      {
        id: 6,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://i.pravatar.cc/150?img=51",
        },
        date: "04 Jun 2019",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae luctus nulla. Cras fermentum velit ligula, et tincidunt lorem ornare vitae. Phasellus lacinia tellus id suscipit lobortis.",
        comments: [
          {
            id: 4,
            author: {
              name: "Clara Lisboa",
              avatar: "https://i.pravatar.cc/150?img=5",
            },
            date: "04 Jun 2019",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae luctus nulla. Cras fermentum velit ligula, et tincidunt lorem ornare vitae. Phasellus lacinia tellus id suscipit lobortis.",
          },
          {
            id: 5,
            author: {
              name: "Cézar Toledo",
              avatar: "https://i.pravatar.cc/150?img=11",
            },
            date: "04 Jun 2019",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae luctus nulla. Cras fermentum velit ligula, et tincidunt lorem ornare vitae. Phasellus lacinia tellus id suscipit lobortis.",
          },
        ],
      },
    ],
  };
  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map((post) => (
          <SinglePost key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
