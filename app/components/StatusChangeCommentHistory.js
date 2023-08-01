import { CoreLabel, CoreBox, CoreGrid, CoreStack } from "@wrappid/core";

export default function StatusChangeCommentHistory(props) {
  const { data } = props;
  const { comments } = data;

  return (
    <>
      {comments && <CoreStack direction="column">
        <CoreGrid>
          <CoreBox gridProps={{ gridSize: 2 }}>
            <CoreLabel>Current Status:</CoreLabel>
          </CoreBox>
          
          <CoreBox gridProps={{ gridSize: 2 }}>
            <CoreLabel>Next Status:</CoreLabel>
          </CoreBox>

          <CoreBox gridProps={{ gridSize: 6 }}>
            <CoreLabel>Comment:</CoreLabel>
          </CoreBox>

          <CoreBox gridProps={{ gridSize: 2 }}>
            <CoreLabel>User Id:</CoreLabel>
          </CoreBox>
        </CoreGrid>
      </CoreStack>
      }
      
      <CoreStack direction="column">
        {comments?.map((comment, index) => (
          <CoreGrid key={index}>
            <CoreBox gridProps={{ gridSize: 2 }}>
              <CoreLabel>{comment?.currentStatus}</CoreLabel>
            </CoreBox>

            <CoreBox gridProps={{ gridSize: 2 }}>
              <CoreLabel>{comment?.nextStatus}</CoreLabel>
            </CoreBox>

            <CoreBox gridProps={{ gridSize: 6 }}>
              <CoreLabel>{comment?.comment}</CoreLabel>
            </CoreBox>

            <CoreBox gridProps={{ gridSize: 2 }}>
              <CoreLabel>{comment?.userId}</CoreLabel>
            </CoreBox>
          </CoreGrid>
        ))}
      </CoreStack>
    </>
  );
}
