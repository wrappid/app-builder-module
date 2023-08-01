import {
  CoreLabel, CoreBox, CoreGrid, CoreStack, StatusText, UserChip 
} from "@wrappid/core";

export default function StatusChangeCommentHistory(props) {
  const { data } = props;
  const { comments } = data;

  return (
    <>
      {props && <CoreStack direction="column">
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
            <CoreLabel>User:</CoreLabel>
          </CoreBox>
        </CoreGrid>
      </CoreStack>
      }
      
      <CoreStack direction="column">
        {comments?.map((comment, index) => (
          <CoreGrid key={index}>
            <CoreBox gridProps={{ gridSize: 2 }}>
              <StatusText status={comment?.currentStatus} />
            </CoreBox>

            <CoreBox gridProps={{ gridSize: 2 }}>
              <StatusText status={comment?.nextStatus} />
            </CoreBox>

            <CoreBox gridProps={{ gridSize: 6 }}>
              <StatusText status={comment?.comment} />
            </CoreBox>

            <CoreBox gridProps={{ gridSize: 2 }}>
              <UserChip userid={comment?.userId} />
            </CoreBox>
          </CoreGrid>
        ))}
      </CoreStack>
    </>
  );
}
