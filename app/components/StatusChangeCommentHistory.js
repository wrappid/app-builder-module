import {
  CoreLabel, CoreGrid, CoreStack, StatusText, UserChip, CoreTypographyCaption 
} from "@wrappid/core";

export default function StatusChangeCommentHistory(props) {
  const { data } = props;
  const { comments } = data;

  return (
    <>
      {comments[0]?.comment && <CoreStack direction="column">
        <CoreGrid>
          
          <CoreLabel gridProps={{ gridSize: 2 }}>From:</CoreLabel>
          
          <CoreLabel gridProps={{ gridSize: 2 }}>To:</CoreLabel>

          <CoreLabel gridProps={{ gridSize: 4 }}>Comment:</CoreLabel>

          <CoreLabel gridProps={{ gridSize: 2 }}>Request Time:</CoreLabel>
          
          <CoreLabel gridProps={{ gridSize: 2 }}>User:</CoreLabel>
          
        </CoreGrid>
      </CoreStack>
      }
      
      <CoreStack direction="column">
        {comments?.map((comment, index) => (
          <CoreGrid key={index}>
            <StatusText gridProps={{ gridSize: 2 }} status={comment?.currentStatus} />

            <StatusText gridProps={{ gridSize: 2 }} status={comment?.nextStatus} />

            <CoreTypographyCaption gridProps={{ gridSize: 4 }}>{comment?.comment}</CoreTypographyCaption>

            <CoreTypographyCaption gridProps={{ gridSize: 2 }}>{new Date(comment?.requestTime).toLocaleString()}</CoreTypographyCaption>

            <UserChip gridProps={{ gridSize: 2 }} userid={comment?.userId} />
          </CoreGrid>
        ))}
      </CoreStack>
    </>
  );
}
