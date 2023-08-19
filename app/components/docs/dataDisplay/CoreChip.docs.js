import {
  CoreAvatar,
  CoreChip, CoreClasses, CoreH5, CoreIcon, CoreSpan, CoreStack, CoreTypographyBody1 
} from "@wrappid/core";

import CodeSample from "../CodeSample";

export default function CoreChipDocs(){
  const handleClick = ()=>{
    // console.log("You clicked the chip.");
  };

  const handleDelete = ()=>{
    // console.log("You clicked the chip.");
  };

  return (
    <>
      <CoreH5 styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]}>
        CoreChip
      </CoreH5>

      <CoreTypographyBody1>
      Chips are compact elements that represent an input, attribute, or action.
      </CoreTypographyBody1>

      <CodeSample
        title={"Basic chip"}
        description={
          "The Chip component supports outlined and filled styling."
        }
        renderElement={
          <CoreStack spacing={1} direction="row">
            <CoreChip label="Chip Filled" />

            <CoreChip label="Chip Outlined" variant="outlined" />
          </CoreStack>
        }
        code={`<CoreChip label="Chip Filled" />
<CoreChip label="Chip Outlined" variant="outlined" />`}
      />

      <CodeSample
        title={"Chip actions"}
        description={
          <>
         You can use the following actions.
        1-Chips with the <CoreSpan>onClick</CoreSpan> prop defined change appearance on focus, hover, and click.

        2-Chips with the <CoreSpan>onDelete</CoreSpan> prop defined will display a delete icon which changes appearance on hover.
          </>
        }
        renderElement={
          <CoreStack spacing={1} direction="row">
            <CoreChip label="Clickable" onClick={handleClick}/>

            <CoreChip label="Clickable" variant="outlined" onClick={handleClick} />
          </CoreStack>
        }
        code={`<CoreChip label="Clickable" onClick={handleClick}/>
<CoreChip label="Clickable" variant="outlined" onClick={handleClick} />`}
      />

      <CodeSample
        renderElement={
          <CoreStack spacing={1} direction="row">
            <CoreChip label="Deletable" onDelete={handleDelete}/>

            <CoreChip label="Deletable" variant="outlined" onDelete={handleDelete} />
          </CoreStack>
        }
        code={`<CoreChip label="Deletable" onDelete={handleDelete}/>
<CoreChip label="Deletable" variant="outlined" onDelete={handleDelete} />`}
      />

      <CodeSample
        title={"Clickable and deletable"}
        renderElement={
          <CoreStack spacing={1} direction="row">
            <CoreChip label="Clickable Deletable" onClick={handleClick} onDelete={handleDelete}/>

            <CoreChip
              label="Clickable Deletable"
              variant="outlined"
              onClick={handleClick}
              onDelete={handleDelete} />
          </CoreStack>
        }
        code={`<CoreChip label="Clickable Deletable" onClick={handleClick} onDelete={handleDelete}/>
<CoreChip label="Clickable Deletable" 
variant="outlined" 
onClick={handleClick} 
onDelete={handleDelete} />`}
      />

      <CodeSample
        title={"Clickable link"}
        renderElement={
          <CoreStack spacing={1} direction="row">
            <CoreChip label="Clickable Link" component="a" href="#"/>

            <CoreChip
              label="Clickable Link"
              component="a" 
              href="#" />
          </CoreStack>
        }
        code={`<CoreChip label="Clickable Link" component="a" href="#"/>
<CoreChip label="Clickable Link" component="a" href="#"/>`}
      />

      <CodeSample
        title={"Custom delete icon (NOT IMPLEMENTED)"}
      />

      <CoreH5>
        Chip adornments
      </CoreH5>

      <CoreTypographyBody1>You can add ornaments to the beginning of the component.Use the avatar prop to add an avatar or use the icon prop to add an icon.</CoreTypographyBody1>

      <CodeSample
        title={"Avatar chip"}
        renderElement={
          <CoreStack spacing={1} direction="row">
            <CoreChip label="Avatar" variant="outlined" avatar={<CoreAvatar>M</CoreAvatar>} />

            <CoreChip label="Avatar" variant="outlined" avatar={<CoreAvatar alt="Natacha" src="https://mui.com/static/images/avatar/1.jpg" />} />
          </CoreStack>
        }
        code={`<CoreChip label="Avatar" variant="outlined" avatar={<CoreAvatar>M</CoreAvatar>} />
<CoreChip 
label="Avatar" 
variant="outlined" 
avatar={<CoreAvatar alt="Natacha" 
src="https://mui.com/static/images/avatar/1.jpg" />} />`}
      />
      
      <CodeSample
        title={"Icon chip"}
        renderElement={
          <CoreStack spacing={1} direction="row">
            <CoreChip icon={<CoreIcon>face</CoreIcon>} label="With Icon"/>

            <CoreChip icon={<CoreIcon>face</CoreIcon>} label="With Icon"/>
          </CoreStack>
        }
        code={`<CoreChip icon={<CoreIcon>face</CoreIcon>} label="With Icon"/>
<CoreChip icon={<CoreIcon>face</CoreIcon>} label="With Icon"/>`}
      />

      <CodeSample
        title={"Color chip"}
        description={<>You can use the <><CoreSpan>color</CoreSpan></> prop to define a color from theme palette.</>}
        renderElement={
          <>
            <CoreStack spacing={1}>
              <CoreStack direction="row" spacing={1}>
                <CoreChip label="primary" color="primary" />

                <CoreChip label="secondary" color="secondary" />
              </CoreStack>

              <CoreStack direction="row" spacing={1}>
                <CoreChip label="primary" color="primary" variant="outlined" />

                <CoreChip label="secondary" color="secondary" variant="outlined" />
              </CoreStack>
            </CoreStack>
          </>
        }
        code={`<CoreStack direction="column" spacing={1}>
 <CoreChip label="primary" color="primary" />
 <CoreChip label="secondary" color="secondary" />
</CoreStack>
<CoreStack direction="column" spacing={1}>
  <CoreChip label="primary" color="primary" variant="outlined" />
  <CoreChip label="secondary" color="secondary" variant="outlined" />
</CoreStack>`}
      />

      <CodeSample
        title={"Sizes chip"}
        description={
          <>
          You can use the <CoreSpan>size</CoreSpan> prop to define a small Chip.
          </>
        }
        renderElement={
          <CoreStack spacing={1} direction="row">
            <CoreChip label="Small" size="small"/>

            <CoreChip label="Small" size="small" />
          </CoreStack>
        }
        code={`<CoreChip label="Small" size="small" />
<CoreChip label="Small" size="small" />`}
      />

      <CodeSample
        title={"Multiline chip (NOT IMPLEMENTED)"}
      />
    </>
  );
}