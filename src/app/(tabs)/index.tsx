import { View } from "react-native";
import posts from "../../../assets/data/posts.json";
import PostListItem from "../../components/PostListItem";

export default function HomeScreen() {
  return (
    <View>
      <PostListItem post={posts[0]} />
      <PostListItem post={posts[1]} />
      <PostListItem post={posts[2]} />
    </View>
  );
}
