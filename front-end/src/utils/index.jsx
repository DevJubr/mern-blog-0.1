import { MdOutlineArticle, MdPostAdd } from "react-icons/md";
import { LiaBorderAllSolid } from "react-icons/lia";
import { AiOutlineUser, AiFillTags, AiOutlineUserAdd } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";

export const commemts = [
  {
    user: "kamal",
    userImg:
      "https://unsplash.com/photos/3g3V1TWQi8k/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg4ODA5MTc1fA&force=true&w=640",
    connent: "comment 1",
    type: "comment",
    replays: [
      {
        user: "kamal",
        userImg:
          "https://unsplash.com/photos/ruWf1KGPPsY/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg4ODA5MTU0fA&force=true&w=640",
        connent: "comment 1",
        type: "rip",
      },

      {
        user: "kamal",
        userImg:
          "https://unsplash.com/photos/ruWf1KGPPsY/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg4ODA5MTU0fA&force=true&w=640",
        connent: "riply to the 1 comment",
        type: "rip",
      },

      {
        user: "kamal",
        userImg:
          "https://unsplash.com/photos/ruWf1KGPPsY/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg4ODA5MTU0fA&force=true&w=640",
        connent: "riply to the 1 comment",
        type: "rip",
      },
    ],
  },
  {
    user: "Tamim Iqbal",
    userImg:
      "https://unsplash.com/photos/Y_NYEk8BtRM/download?force=true&w=640",
    connent: "comment 1",
    type: "comment",
    replays: [
      {
        user: "Tamim Iqbal",
        userImg:
          "https://unsplash.com/photos/ruWf1KGPPsY/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg4ODA5MTU0fA&force=true&w=640",
        connent: "comment 1",
        type: "rip",
      },

      {
        user: "Tamim Iqbal",
        userImg:
          "https://unsplash.com/photos/ruWf1KGPPsY/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg4ODA5MTU0fA&force=true&w=640",
        connent: "riply to the 1 comment",
        type: "rip",
      },

      {
        user: "Tamim Iqbal",
        userImg:
          "https://unsplash.com/photos/ruWf1KGPPsY/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg4ODA5MTU0fA&force=true&w=640",
        connent: "riply to the 1 comment",
        type: "rip",
      },
    ],
  },
];

export const fakedsb = [
  {
    title: "dashboadrd",
    icon: <MdOutlineArticle />,
    path: "",
  },
  {
    title: "article",
    icon: <MdOutlineArticle />,
    path: "posts",
    nested: [
      {
        title: "all article",
        icon: <LiaBorderAllSolid />,
      },
      {
        title: "add article",
        icon: <MdPostAdd />,
      },
    ],
  },
  {
    title: "tag",
    path: "tags",
    icon: <AiFillTags />,
    nested: [
      {
        title: "all tag",
        icon: <LiaBorderAllSolid />,
      },
      {
        title: "add tag",
        icon: <MdPostAdd />,
      },
    ],
  },
  {
    title: "category",
    path: "categorys",
    icon: <BiCategory />,
    nested: [
      {
        title: "all category",
        icon: <LiaBorderAllSolid />,
      },
      {
        title: "add category",
        icon: <MdPostAdd />,
      },
    ],
  },
  {
    title: "users",
    path: "users",
    icon: <AiOutlineUser />,
    nested: [
      {
        title: "all users",
        icon: <LiaBorderAllSolid />,
      },
      {
        title: "add users",
        icon: <AiOutlineUserAdd />,
      },
    ],
  },
];
