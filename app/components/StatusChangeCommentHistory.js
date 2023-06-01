import { CoreLabel, CoreBox, CoreGrid, CoreStack } from "@wrappid/core";

export default function StatusChangeCommentHistory(props) {
  const { data } = props;
  const { comments } = data;

  return (
    <CoreStack direction="column">
      {comments?.map((comment, index) => (
        <CoreGrid key={index}>
          <CoreBox gridProps={{ gridSize: 2 }}>
            <CoreLabel>Current Status:</CoreLabel>

            <br />

            <CoreLabel>{comment?.currentStatus}</CoreLabel>
          </CoreBox>

          <CoreBox gridProps={{ gridSize: 2 }}>
            <CoreLabel>Next Status:</CoreLabel>

            <br />

            <CoreLabel>{comment?.nextStatus}</CoreLabel>
          </CoreBox>

          <CoreBox gridProps={{ gridSize: 6 }}>
            <CoreLabel>Comment:</CoreLabel>

            <br />

            <CoreLabel>{comment?.comment}</CoreLabel>
          </CoreBox>

          <CoreBox gridProps={{ gridSize: 2 }}>
            <CoreLabel>User Id:</CoreLabel>

            <br />

            <CoreLabel>{comment?.userId}</CoreLabel>
          </CoreBox>
        </CoreGrid>
      ))}
    </CoreStack>
  );
}
