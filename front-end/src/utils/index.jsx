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
    path: "admin/dashboard/",
  },
  {
    title: "article",
    icon: <MdOutlineArticle />,

    nested: [
      {
        title: "all article",
        path: "admin/dashboard/posts/allpost",
        icon: <LiaBorderAllSolid />,
      },
      {
        title: "add article",
        path: "admin/dashboard/posts/addpost",
        icon: <MdPostAdd />,
      },
    ],
  },
  {
    title: "tag",

    icon: <AiFillTags />,
    nested: [
      {
        title: "all tag",
        path: "admin/dashboard/tags/alltag",
        icon: <LiaBorderAllSolid />,
      },
      {
        title: "add tag",
        path: "admin/dashboard/tags/addtag",
        icon: <MdPostAdd />,
      },
    ],
  },
  {
    title: "category",

    icon: <BiCategory />,
    nested: [
      {
        title: "all category",
        path: "admin/dashboard/categorys/allcategory",
        icon: <LiaBorderAllSolid />,
      },
      {
        title: "add category",
        path: "admin/dashboard/categorys/addcategory",
        icon: <MdPostAdd />,
      },
    ],
  },
  {
    title: "users",

    icon: <AiOutlineUser />,
    nested: [
      {
        title: "all sub admins",
        path: "admin/dashboard/admins/allsubadmins",
        icon: <LiaBorderAllSolid />,
      },
      {
        title: "add users",
        path: "admin/dashboard/users/addusers",
        icon: <AiOutlineUserAdd />,
      },
    ],
  },
];

export const FakeCategory = [
  {
    id: Math.ceil((Math.random() * 9) / 8 + (2 % 2)),
    name: "select a N",
  },
  {
    id: Math.ceil((Math.random() * 9) / 8 + (2 % 2)),
    name: "technonogy",
  },
  {
    id: Math.ceil((Math.random() * 9) / 8 + (2 % 2)),
    name: "C sharp",
  },
  {
    id: Math.ceil((Math.random() * 9) / 8 + (2 % 2)),
    name: "C plus plus",
  },
];
export const FakeTags = [
  {
    id: Math.ceil((Math.random() * 9) / 8 + (2 % 2)),
    name: "select a N",
  },
  {
    id: Math.ceil((Math.random() * 9) / 8 + (2 % 2)),
    name: "technonogy",
  },
  {
    id: Math.ceil((Math.random() * 9) / 8 + (2 % 2)),
    name: "C sharp",
  },
  {
    id: Math.ceil((Math.random() * 9) / 8 + (2 % 2)),
    name: "C plus plus",
  },
];
