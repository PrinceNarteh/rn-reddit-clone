import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { formatDistanceToNowStrict } from "date-fns";
import { Image, StyleSheet, Text, View } from "react-native";
import { Post } from "../types";

type PostListItemProps = {
  post: Post;
};

export default function PostListItem({ post }: PostListItemProps) {
  return (
    <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
      {/* POST HEADER */}
      <View style={styles.container}>
        <Image source={{ uri: post.group.image }} style={styles.groupImage} />
        <Text style={styles.groupName}>{post.group.name}</Text>
        <Text style={styles.datePosted}>
          {formatDistanceToNowStrict(new Date(post.created_at))}
        </Text>
        <View style={{ marginLeft: "auto" }}>
          <Text style={styles.joinButton}>Join</Text>
        </View>
      </View>

      {/* CONTENT */}
      <View style={{ gap: 5 }}>
        <Text style={styles.contentTitle}>{post.title}</Text>
        {post.image && (
          <Image source={{ uri: post.image }} style={styles.contentImage} />
        )}
        {!post.image && post.description && (
          <Text numberOfLines={4}>{post.description}</Text>
        )}
      </View>

      {/* FOOTER */}
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={[{ flexDirection: "row" }, styles.iconBox]}>
            <MaterialCommunityIcons
              name="arrow-up-bold-outline"
              size={19}
              color="black"
            />
            <Text
              style={{ fontWeight: "500", marginLeft: 5, alignSelf: "center" }}
            >
              {post.upvotes}
            </Text>
            <View
              style={{
                width: 1,
                backgroundColor: "#D4D4D4",
                height: 14,
                marginHorizontal: 7,
                alignSelf: "center",
              }}
            />
            <MaterialCommunityIcons
              name="arrow-down-bold-outline"
              size={19}
              color="black"
            />
          </View>
          <View style={[{ flexDirection: "row" }, styles.iconBox]}>
            <MaterialCommunityIcons
              name="comment-outline"
              size={19}
              color="black"
            />
            <Text
              style={{ fontWeight: "500", marginLeft: 5, alignSelf: "center" }}
            >
              {post.nr_of_comments}
            </Text>
          </View>
        </View>
        <View style={{ marginLeft: "auto", flexDirection: "row", gap: 10 }}>
          <MaterialCommunityIcons
            name="trophy-outline"
            size={19}
            color="black"
            style={styles.iconBox}
          />
          <MaterialCommunityIcons
            name="share-outline"
            size={19}
            color="black"
            style={styles.iconBox}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  groupImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  groupName: { fontWeight: "bold" },
  datePosted: { color: "grey" },
  joinButton: {
    color: "white",
    backgroundColor: "#0d469b",
    fontWeight: "bold",
    paddingVertical: 2,
    paddingHorizontal: 7,
    borderRadius: 10,
  },
  contentTitle: { fontWeight: "bold", letterSpacing: 0.5, fontSize: 17 },
  contentImage: { width: "100%", aspectRatio: 4 / 3, borderRadius: 15 },
  iconBox: {
    borderWidth: 0.5,
    borderColor: "#D4D4D4",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
});
