import React, { useState } from "react";

import {
  CoreH5,
  CoreList,
  CoreIcon,
  CoreDivider,
  CoreClasses,
  CoreListItem,
  CoreListItemText,
  CoreListItemIcon,
  CoreTypographyBody1,
  CoreTypographyBody2,
  CoreListItemButton,
  CoreCollapse,
  CoreListItemAvatar,
  CoreAvatar,
  CoreListSubheader,
  CoreFormGroup,
  CoreFormControlLabel,
  CoreBox,
  CoreCheckbox,
  CoreGrid,
  CoreIconButton,
  CoreSwitch,
} from "@wrappid/core";

import CodeSample from "../CodeSample";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function CoreListDocs() {
  const [open, setOpen] = useState(false);
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  //   const [checked, setChecked] = React.useState([0]); // for checkbox
  const [checked, setChecked] = React.useState(["wifi"]); // for switch

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <CoreH5 styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]}>CoreList</CoreH5>

      <CoreTypographyBody1>
        Lists are continuous, vertical indexes of text or images.
      </CoreTypographyBody1>

      <CodeSample
				title={"Basic List"}
				code={`<CoreList styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.BG.BG_SECONDARY]}>
<CoreListItem>
	<CoreListItemIcon><CoreIcon>inbox</CoreIcon></CoreListItemIcon>
	<CoreListItemText primary="Inbox" />
</CoreListItem>
<CoreListItem>
	<CoreListItemIcon><CoreIcon>drafts</CoreIcon></CoreListItemIcon>
	<CoreListItemText primary="Drafts" />
</CoreListItem>
<CoreDivider />
<CoreListItem>
	<CoreListItemText primary="Trash" />
</CoreListItem>
<CoreListItem>
	<CoreListItemText primary="Spam" />
</CoreListItem>
</CoreList>`}
				renderElement={
					<CoreList styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.BG.BG_SECONDARY]}>
						<CoreListItem>
							<CoreListItemIcon><CoreIcon>inbox</CoreIcon></CoreListItemIcon>
							<CoreListItemText primary="Inbox" />
						</CoreListItem>
						<CoreListItem>
							<CoreListItemIcon><CoreIcon>drafts</CoreIcon></CoreListItemIcon>
							<CoreListItemText primary="Drafts" />
						</CoreListItem>
						<CoreDivider />
						<CoreListItem>
							<CoreListItemText primary="Trash" />
						</CoreListItem>
						<CoreListItem>
							<CoreListItemText primary="Spam" />
						</CoreListItem>
					</CoreList>
				}
			/>

      {/* Nested List */}
      <CodeSample
				title={"Nested List"}
				code={`<CoreList subheader={<CoreListSubheader styleClasses={[CoreClasses.BG.BG_SECONDARY]}
disableSticky={true}>Nested List Items</CoreListSubheader>}
styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.BG.BG_SECONDARY]}>
<CoreListItemButton>
	<CoreListItemIcon><CoreIcon>send</CoreIcon></CoreListItemIcon>
	<CoreListItemText primary="Send Mail" />
</CoreListItemButton>
<CoreListItemButton>
	<CoreListItemIcon><CoreIcon>drafts</CoreIcon></CoreListItemIcon>
	<CoreListItemText primary="Drafts" />
</CoreListItemButton>
<CoreListItemButton onClick={handleClick}>
	<CoreListItemIcon><CoreIcon>move_to_inbox</CoreIcon></CoreListItemIcon>
	<CoreListItemText primary="Inbox" />
	{open ? <CoreIcon>expand_less</CoreIcon> : <CoreIcon>expand_more</CoreIcon>}
</CoreListItemButton>
<CoreCollapse in={open} timeout="auto" unmountOnExit>
	<CoreList>
		<CoreListItemButton styleClasses={[CoreClasses.PADDING.PL4]}>
			<CoreListItemIcon><CoreIcon>star</CoreIcon></CoreListItemIcon>
			<CoreListItemText primary="Starred" />
		</CoreListItemButton>
	</CoreList>
</CoreCollapse>
</CoreList>`}
				renderElement={
					<CoreList subheader={<CoreListSubheader styleClasses={[CoreClasses.BG.BG_SECONDARY]} disableSticky={true}>Nested List Items</CoreListSubheader>}
						styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.BG.BG_SECONDARY]}>
						<CoreListItemButton>
							<CoreListItemIcon><CoreIcon>send</CoreIcon></CoreListItemIcon>
							<CoreListItemText primary="Send Mail" />
						</CoreListItemButton>
						<CoreListItemButton>
							<CoreListItemIcon><CoreIcon>drafts</CoreIcon></CoreListItemIcon>
							<CoreListItemText primary="Drafts" />
						</CoreListItemButton>
						<CoreListItemButton onClick={handleClick}>
							<CoreListItemIcon><CoreIcon>move_to_inbox</CoreIcon></CoreListItemIcon>
							<CoreListItemText primary="Inbox" />
							{open ? <CoreIcon>expand_less</CoreIcon> : <CoreIcon>expand_more</CoreIcon>}
						</CoreListItemButton>
						<CoreCollapse in={open} timeout="auto" unmountOnExit>
							<CoreList>
								<CoreListItemButton styleClasses={[CoreClasses.PADDING.PL4]}>
									<CoreListItemIcon><CoreIcon>star</CoreIcon></CoreListItemIcon>
									<CoreListItemText primary="Starred" />
								</CoreListItemButton>
							</CoreList>
						</CoreCollapse>
					</CoreList>
				}
			/>

      {/* Folder List */}
      <CodeSample
				title={"Folder List"}
				code={`<CoreList styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.BG.BG_SECONDARY]}>
<CoreListItem>
	<CoreListItemAvatar>
		<CoreAvatar styleClasses={[CoreClasses.BG.BG_SECONDARY_DARK]}>
			<CoreIcon>image</CoreIcon>
		</CoreAvatar>
	</CoreListItemAvatar>
	<CoreListItemText primary="Photos" secondary="Jan 9, 2014" />
</CoreListItem>
<CoreListItem>
	<CoreListItemAvatar>
	<CoreAvatar styleClasses={[CoreClasses.BG.BG_SECONDARY_DARK]}>
		<CoreIcon>work</CoreIcon>
	</CoreAvatar>
	</CoreListItemAvatar>
	<CoreListItemText primary="Work" secondary="Jan 7, 2014" />
</CoreListItem>
<CoreListItem>
	<CoreListItemAvatar>
		<CoreAvatar styleClasses={[CoreClasses.BG.BG_SECONDARY_DARK]}>
			<CoreIcon>beach_access</CoreIcon>
		</CoreAvatar>
	</CoreListItemAvatar>
	<CoreListItemText primary="Vacation" secondary="July 20, 2014" />
</CoreListItem>
</CoreList>`}
				renderElement={
					<CoreList styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.BG.BG_SECONDARY]}>
						<CoreListItem>
							<CoreListItemAvatar>
								<CoreAvatar styleClasses={[CoreClasses.BG.BG_SECONDARY_DARK]}>
									<CoreIcon>image</CoreIcon>
								</CoreAvatar>
							</CoreListItemAvatar>
							<CoreListItemText primary="Photos" secondary="Jan 9, 2014" />
						</CoreListItem>
						<CoreListItem>
							<CoreListItemAvatar>
							<CoreAvatar styleClasses={[CoreClasses.BG.BG_SECONDARY_DARK]}>
								<CoreIcon>work</CoreIcon>
							</CoreAvatar>
							</CoreListItemAvatar>
							<CoreListItemText primary="Work" secondary="Jan 7, 2014" />
						</CoreListItem>
						<CoreListItem>
							<CoreListItemAvatar>
								<CoreAvatar styleClasses={[CoreClasses.BG.BG_SECONDARY_DARK]}>
									<CoreIcon>beach_access</CoreIcon>
								</CoreAvatar>
							</CoreListItemAvatar>
							<CoreListItemText primary="Vacation" secondary="July 20, 2014" />
						</CoreListItem>
					</CoreList>
				}
			/>

      {/* Interactive */}
      <CodeSample
        title={"Interactive"}
        description={
          <>
            Below is an interactive demo that lets you explore the visual
            results of the different settings:
          </>
        }
        code={`<CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
<CoreFormGroup row>
	<CoreFormControlLabel
	control={
		<CoreCheckbox
		checked={dense}
		onChange={(event) => setDense(event.target.checked)}
		/>
	}
	label="Enable dense"
	/>
	<CoreFormControlLabel
	control={
		<CoreCheckbox
		checked={secondary}
		onChange={(event) => setSecondary(event.target.checked)}
		/>
	}
	label="Enable secondary text"
	/>
</CoreFormGroup>

<CoreGrid spacing={2}>
	<CoreBox gridProps={{ gridSize: 6 }}>
	<CoreTypographyBody1>Text only</CoreTypographyBody1>
	<CoreList
		dense={dense}
		styleClasses={[CoreClasses.BG.BG_SECONDARY]}
	>
		{generate(
		<CoreListItem>
			<CoreListItemText
			primary="Single-line item"
			secondary={secondary ? "Secondary text" : null}
			/>
		</CoreListItem>
		)}
	</CoreList>
	</CoreBox>
	<CoreBox gridProps={{ gridSize: 6 }}>
	<CoreTypographyBody1>Icon with text</CoreTypographyBody1>
	<CoreList
		dense={dense}
		styleClasses={[CoreClasses.BG.BG_SECONDARY]}
	>
		{generate(
		<CoreListItem>
			<CoreListItemIcon>
			<CoreIcon>folder</CoreIcon>
			</CoreListItemIcon>
			<CoreListItemText
			primary="Single-line item"
			secondary={secondary ? "Secondary text" : null}
			/>
		</CoreListItem>
		)}
	</CoreList>
	</CoreBox>
	<CoreBox gridProps={{ gridSize: 6 }}>
	<CoreTypographyBody1>Avatar with text</CoreTypographyBody1>
	<CoreList
		dense={dense}
		styleClasses={[CoreClasses.BG.BG_SECONDARY]}
	>
		{generate(
		<CoreListItem>
			<CoreListItemAvatar>
			<CoreAvatar styleClasses={[CoreClasses.BG.BG_SECONDARY_DARK]}>
				<CoreIcon>folder</CoreIcon>
			</CoreAvatar>
			</CoreListItemAvatar>
			<CoreListItemText
			primary="Single-line item"
			secondary={secondary ? "Secondary text" : null}
			/>
		</CoreListItem>
		)}
	</CoreList>
	</CoreBox>
	<CoreBox gridProps={{ gridSize: 6 }}>
	<CoreTypographyBody1>Avatar with text and icon</CoreTypographyBody1>
	<CoreList
		dense={dense}
		styleClasses={[CoreClasses.BG.BG_SECONDARY]}
	>
		{generate(
		<CoreListItem secondaryAction={
			<CoreIconButton title="Delete" onClick={() => {}}>
				<CoreIcon>delete</CoreIcon>
			</CoreIconButton>
		}>
			<CoreListItemAvatar>
			<CoreAvatar styleClasses={[CoreClasses.BG.BG_SECONDARY_DARK]}>
				<CoreIcon>folder</CoreIcon>
			</CoreAvatar>
			</CoreListItemAvatar>
			<CoreListItemText
			primary="Single-line item"
			secondary={secondary ? "Secondary text" : null}
			/>
		</CoreListItem>
		)}
	</CoreList>
	</CoreBox>
</CoreGrid>
</CoreBox>`}
        renderElement={
          <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
            <CoreFormGroup row>
              <CoreFormControlLabel
                control={
                  <CoreCheckbox
                    checked={dense}
                    onChange={(event) => setDense(event.target.checked)}
                  />
                }
                label="Enable dense"
              />
              <CoreFormControlLabel
                control={
                  <CoreCheckbox
                    checked={secondary}
                    onChange={(event) => setSecondary(event.target.checked)}
                  />
                }
                label="Enable secondary text"
              />
            </CoreFormGroup>

            <CoreGrid spacing={2}>
              <CoreBox gridProps={{ gridSize: 6 }}>
                <CoreTypographyBody1>Text only</CoreTypographyBody1>
                <CoreList
                  dense={dense}
                  styleClasses={[CoreClasses.BG.BG_SECONDARY]}
                >
                  {generate(
                    <CoreListItem>
                      <CoreListItemText
                        primary="Single-line item"
                        secondary={secondary ? "Secondary text" : null}
                      />
                    </CoreListItem>
                  )}
                </CoreList>
              </CoreBox>
              <CoreBox gridProps={{ gridSize: 6 }}>
                <CoreTypographyBody1>Icon with text</CoreTypographyBody1>
                <CoreList
                  dense={dense}
                  styleClasses={[CoreClasses.BG.BG_SECONDARY]}
                >
                  {generate(
                    <CoreListItem>
                      <CoreListItemIcon>
                        <CoreIcon>folder</CoreIcon>
                      </CoreListItemIcon>
                      <CoreListItemText
                        primary="Single-line item"
                        secondary={secondary ? "Secondary text" : null}
                      />
                    </CoreListItem>
                  )}
                </CoreList>
              </CoreBox>
              <CoreBox gridProps={{ gridSize: 6 }}>
                <CoreTypographyBody1>Avatar with text</CoreTypographyBody1>
                <CoreList
                  dense={dense}
                  styleClasses={[CoreClasses.BG.BG_SECONDARY]}
                >
                  {generate(
                    <CoreListItem>
                      <CoreListItemAvatar>
                        <CoreAvatar styleClasses={[CoreClasses.BG.BG_SECONDARY_DARK]}>
                          <CoreIcon>folder</CoreIcon>
                        </CoreAvatar>
                      </CoreListItemAvatar>
                      <CoreListItemText
                        primary="Single-line item"
                        secondary={secondary ? "Secondary text" : null}
                      />
                    </CoreListItem>
                  )}
                </CoreList>
              </CoreBox>
			  <CoreBox gridProps={{ gridSize: 6 }}>
                <CoreTypographyBody1>Avatar with text and icon</CoreTypographyBody1>
                <CoreList
                  dense={dense}
                  styleClasses={[CoreClasses.BG.BG_SECONDARY]}
                >
                  {generate(
                    <CoreListItem secondaryAction={
						<CoreIconButton title="Delete" onClick={() => {}}>
							<CoreIcon>delete</CoreIcon>
						</CoreIconButton>
					}>
                      <CoreListItemAvatar>
                        <CoreAvatar styleClasses={[CoreClasses.BG.BG_SECONDARY_DARK]}>
                          <CoreIcon>folder</CoreIcon>
                        </CoreAvatar>
                      </CoreListItemAvatar>
                      <CoreListItemText
                        primary="Single-line item"
                        secondary={secondary ? "Secondary text" : null}
                      />
                    </CoreListItem>
                  )}
                </CoreList>
              </CoreBox>
            </CoreGrid>
          </CoreBox>
        }
      />

      {/* Selected ListItem */}
      <CodeSample
        title={"Selected ListItem"}
        code={`<CoreList
styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.BG.BG_SECONDARY]}
>
<CoreListItemButton
	selected={selectedIndex === 0}
	onClick={(event) => handleListItemClick(event, 0)}
>
	<CoreListItemIcon>
	<CoreIcon>inbox</CoreIcon>
	</CoreListItemIcon>
	<CoreListItemText primary="Inbox" />
</CoreListItemButton>
<CoreListItemButton
	selected={selectedIndex === 1}
	onClick={(event) => handleListItemClick(event, 1)}
>
	<CoreListItemIcon>
	<CoreIcon>drafts</CoreIcon>
	</CoreListItemIcon>
	<CoreListItemText primary="Drafts" />
</CoreListItemButton>
<CoreDivider />
<CoreListItemButton
	selected={selectedIndex === 2}
	onClick={(event) => handleListItemClick(event, 2)}
>
	<CoreListItemText primary="Trash" />
</CoreListItemButton>
<CoreListItemButton
	selected={selectedIndex === 3}
	onClick={(event) => handleListItemClick(event, 3)}
>
	<CoreListItemText primary="Spam" />
</CoreListItemButton>
</CoreList>`}
        renderElement={
          <CoreList
            styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.BG.BG_SECONDARY]}
          >
            <CoreListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <CoreListItemIcon>
                <CoreIcon>inbox</CoreIcon>
              </CoreListItemIcon>
              <CoreListItemText primary="Inbox" />
            </CoreListItemButton>
            <CoreListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <CoreListItemIcon>
                <CoreIcon>drafts</CoreIcon>
              </CoreListItemIcon>
              <CoreListItemText primary="Drafts" />
            </CoreListItemButton>
            <CoreDivider />
            <CoreListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <CoreListItemText primary="Trash" />
            </CoreListItemButton>
            <CoreListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <CoreListItemText primary="Spam" />
            </CoreListItemButton>
          </CoreList>
        }
      />

      {/* Align list items */}
      <CodeSample
        title={"Align list items"}
        description={
          <>
            When displaying three lines or more, the avatar is not aligned at
            the top. You should set the <code>alignItems="flex-start"</code>{" "}
            prop to align the avatar at the top, following the Material Design
            guidelines:
          </>
        }
        code={`<CoreList
styleClasses={[
	CoreClasses.WIDTH.W_50,
	CoreClasses.TEXT.TEXT_CENTER,
	CoreClasses.BG.BG_SECONDARY,
]}
>
<CoreListItem alignItems="flex-start">
	<CoreListItemAvatar>
	<CoreAvatar src="https://mui.com/static/images/avatar/1.jpg" />
	</CoreListItemAvatar>
	<CoreListItemText
	primary="Brunch this weekend?"
	secondary={
		<>
		<CoreTypographyBody2
			component="span"
			color="text.primary"
		>
			Ali Connors
		</CoreTypographyBody2>
		{" - I'll be in your neighborhood doing errands this..."}
		</>
	}
	/>
</CoreListItem>
<CoreDivider variant="inset" component="li" />
<CoreListItem alignItems="flex-start">
	<CoreListItemAvatar>
	<CoreAvatar src="https://mui.com/static/images/avatar/2.jpg" />
	</CoreListItemAvatar>
	<CoreListItemText
	primary="Summer BBQ"
	secondary={
		<>
		<CoreTypographyBody2 component="span" color="text.primary">
			to Scott, Alex, Jennifer
		</CoreTypographyBody2>
		{" - Wish I could come, but I'm out of town this..."}
		</>
	}
	/>
</CoreListItem>
<CoreDivider variant="inset" />
<CoreListItem alignItems="flex-start">
	<CoreListItemAvatar>
	<CoreAvatar src="https://mui.com/static/images/avatar/3.jpg" />
	</CoreListItemAvatar>
	<CoreListItemText
	primary="Oui Oui"
	secondary={
		<>
		<CoreTypographyBody2 component="span" color="text.primary">
			Sandra Adams
		</CoreTypographyBody2>
		{" - Do you have Paris recommendations? Have you ever..."}
		</>
	}
	/>
</CoreListItem>
</CoreList>`}
        renderElement={
          <CoreList
            styleClasses={[
              CoreClasses.WIDTH.W_50,
              CoreClasses.TEXT.TEXT_CENTER,
              CoreClasses.BG.BG_SECONDARY,
            ]}
          >
            <CoreListItem alignItems="flex-start">
              <CoreListItemAvatar>
                <CoreAvatar src="https://mui.com/static/images/avatar/1.jpg" />
              </CoreListItemAvatar>
              <CoreListItemText
                primary="Brunch this weekend?"
                secondary={
                  <>
                    <CoreTypographyBody2
                      component="span"
                      color="text.primary" /* styleClasses={[CoreClasses.COLOR.TEXT_BLACK]} */
                    >
                      Ali Connors
                    </CoreTypographyBody2>
                    {" - I'll be in your neighborhood doing errands this..."}
                  </>
                }
              />
            </CoreListItem>
            <CoreDivider variant="inset" component="li" />
            <CoreListItem alignItems="flex-start">
              <CoreListItemAvatar>
                <CoreAvatar src="https://mui.com/static/images/avatar/2.jpg" />
              </CoreListItemAvatar>
              <CoreListItemText
                primary="Summer BBQ"
                secondary={
                  <>
                    <CoreTypographyBody2 component="span" color="text.primary">
                      to Scott, Alex, Jennifer
                    </CoreTypographyBody2>
                    {" - Wish I could come, but I'm out of town this..."}
                  </>
                }
              />
            </CoreListItem>
            <CoreDivider variant="inset" />
            <CoreListItem alignItems="flex-start">
              <CoreListItemAvatar>
                <CoreAvatar src="https://mui.com/static/images/avatar/3.jpg" />
              </CoreListItemAvatar>
              <CoreListItemText
                primary="Oui Oui"
                secondary={
                  <>
                    <CoreTypographyBody2 component="span" color="text.primary">
                      Sandra Adams
                    </CoreTypographyBody2>
                    {" - Do you have Paris recommendations? Have you ever..."}
                  </>
                }
              />
            </CoreListItem>
          </CoreList>
        }
      />

      <CoreH5>List Controls</CoreH5>

      {/* Checkbox */}
      <CodeSample
        title={"Checkbox"}
        description={
          <>
            A checkbox can either be a primary action or a secondary action. The
            checkbox is the primary action and the state indicator for the list
            item. The comment button is a secondary action and a separate
            target.
          </>
        }
        code={`<CoreList styleClasses={[CoreClasses.WIDTH.W_25]}>
{[0, 1, 2, 3].map((value) => {
	const labelId = \`checkbox-list-label-\${value}\`;
	return (
	<CoreListItem
		key={value}
		secondaryAction={
		<CoreIconButton title="Comment" onClick={() => {}}>
			<CoreIcon>comment</CoreIcon>
		</CoreIconButton>
		}
		disablePadding
	>
		<CoreListItemButton onClick={handleToggle(value)} dense>
		<CoreListItemIcon>
			<CoreCheckbox
			edge="start"
			checked={checked.indexOf(value) !== -1}
			tabIndex={-1}
			disableRipple
			/>
		</CoreListItemIcon>
		<CoreListItemText
			id={labelId}
			primary={\`Line item \${value + 1}\`}
		/>
		</CoreListItemButton>
	</CoreListItem>
	);
})}
</CoreList>`}
        renderElement={
          <CoreList styleClasses={[CoreClasses.WIDTH.W_25]}>
            {[0, 1, 2, 3].map((value) => {
              const labelId = `checkbox-list-label-${value}`;
              return (
                <CoreListItem
                  key={value}
                  secondaryAction={
                    <CoreIconButton title="Comment" onClick={() => {}}>
                      <CoreIcon>comment</CoreIcon>
                    </CoreIconButton>
                  }
                  disablePadding
                >
                  <CoreListItemButton onClick={handleToggle(value)} dense>
                    <CoreListItemIcon>
                      <CoreCheckbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                      />
                    </CoreListItemIcon>
                    <CoreListItemText
                      id={labelId}
                      primary={`Line item ${value + 1}`}
                    />
                  </CoreListItemButton>
                </CoreListItem>
              );
            })}
          </CoreList>
        }
      />

      {/* Checkbox continued */}
      <CodeSample
        description={
          <>
            The checkbox is the secondary action for the list item and a
            separate target.
          </>
        }
        code={`<CoreList dense styleClasses={[CoreClasses.WIDTH.W_25]}>
{[0, 1, 2, 3].map((value) => {
	const labelId = \`checkbox-list-secondary-label-\${value}\`;
	return (
	<CoreListItem
		key={value}
		secondaryAction={
		<CoreCheckbox
			edge="end"
			onChange={handleToggle(value)}
			checked={checked.indexOf(value) !== -1}
		/>
		}
		disablePadding
	>
		<CoreListItemButton>
		<CoreListItemAvatar>
			<CoreAvatar
			src={\`https://mui.com/static/images/avatar/\${value + 1}.jpg\`}
			/>
		</CoreListItemAvatar>
		<CoreListItemText
			id={labelId}
			primary={\`Line item \${value + 1}\`}
		/>
		</CoreListItemButton>
	</CoreListItem>
	);
})}
</CoreList>`}
        renderElement={
          <CoreList dense styleClasses={[CoreClasses.WIDTH.W_25]}>
            {[0, 1, 2, 3].map((value) => {
              const labelId = `checkbox-list-secondary-label-${value}`;
              return (
                <CoreListItem
                  key={value}
                  secondaryAction={
                    <CoreCheckbox
                      edge="end"
                      onChange={handleToggle(value)}
                      checked={checked.indexOf(value) !== -1}
                    />
                  }
                  disablePadding
                >
                  <CoreListItemButton>
                    <CoreListItemAvatar>
                      <CoreAvatar
                        src={`https://mui.com/static/images/avatar/${
                          value + 1
                        }.jpg`}
                      />
                    </CoreListItemAvatar>
                    <CoreListItemText
                      id={labelId}
                      primary={`Line item ${value + 1}`}
                    />
                  </CoreListItemButton>
                </CoreListItem>
              );
            })}
          </CoreList>
        }
      />

      {/* Switch */}
      <CodeSample
        title={"Switch"}
        description={
          <>The switch is the secondary action and a separate target.</>
        }
        code={`<CoreList
styleClasses={[CoreClasses.BG.BG_SECONDARY, CoreClasses.WIDTH.W_50]}
subheader={
	<CoreListSubheader styleClasses={[CoreClasses.BG.BG_SECONDARY]} disableSticky={true}>
	Settings
	</CoreListSubheader>
}
>
<CoreListItem>
	<CoreListItemIcon>
	<CoreIcon>wifi</CoreIcon>
	</CoreListItemIcon>
	<CoreListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
	<CoreSwitch
	edge="end"
	onChange={handleToggle("wifi")}
	checked={checked.indexOf("wifi") !== -1}
	/>
</CoreListItem>
<CoreListItem>
	<CoreListItemIcon>
	<CoreIcon>bluetooth</CoreIcon>
	</CoreListItemIcon>
	<CoreListItemText
	id="switch-list-label-bluetooth"
	primary="Bluetooth"
	/>
	<CoreSwitch
	edge="end"
	onChange={handleToggle("bluetooth")}
	checked={checked.indexOf("bluetooth") !== -1}
	inputProps={{
		"aria-labelledby": "switch-list-label-bluetooth",
	}}
	/>
</CoreListItem>
</CoreList>`}
        renderElement={
          <CoreList
            styleClasses={[CoreClasses.BG.BG_SECONDARY, CoreClasses.WIDTH.W_50]}
            subheader={
              <CoreListSubheader styleClasses={[CoreClasses.BG.BG_SECONDARY]} disableSticky={true}>
                Settings
              </CoreListSubheader>
            }
          >
            <CoreListItem>
              <CoreListItemIcon>
                <CoreIcon>wifi</CoreIcon>
              </CoreListItemIcon>
              <CoreListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
              <CoreSwitch
                edge="end"
                onChange={handleToggle("wifi")}
                checked={checked.indexOf("wifi") !== -1}
              />
            </CoreListItem>
            <CoreListItem>
              <CoreListItemIcon>
                <CoreIcon>bluetooth</CoreIcon>
              </CoreListItemIcon>
              <CoreListItemText
                id="switch-list-label-bluetooth"
                primary="Bluetooth"
              />
              <CoreSwitch
                edge="end"
                onChange={handleToggle("bluetooth")}
                checked={checked.indexOf("bluetooth") !== -1}
                inputProps={{
                  "aria-labelledby": "switch-list-label-bluetooth",
                }}
              />
            </CoreListItem>
          </CoreList>
        }
      />

      {/* Sticky subheader */}
      <CodeSample
        title={"Sticky subheader"}
        description={
          <>
            Upon scrolling, subheaders remain pinned to the top of the screen
            until pushed off screen by the next subheader. This feature relies
            on CSS sticky positioning.
          </>
        }
        code={`<CoreList
styleClasses={[
	CoreClasses.WIDTH.W_50,
	CoreClasses.HEIGHT.MAX_VH_50,
	CoreClasses.POSITION.POSITION_RELATIVE,
	CoreClasses.OVERFLOW.OVERFLOW_AUTO,
	CoreClasses.BG.BG_SECONDARY,
]}
subheader={<CoreList disablePadding/>}
disablePadding
>
{[0, 1, 2, 3, 4].map((sectionId) => (
	<CoreList key={\`section-\${sectionId}\`} disablePadding>
		<CoreListSubheader
			styleClasses={[CoreClasses.BG.BG_SECONDARY]}
		>{\`I'm sticky \${sectionId}\`}</CoreListSubheader>
		{[0, 1, 2].map((item) => (
			<CoreListItem key={\`item-\${sectionId}-\${item}\`}>
				<CoreListItemText primary={\`Item \${item}\`} />
			</CoreListItem>
		))}
	</CoreList>
))}
</CoreList>`}
        renderElement={
          <CoreList
            styleClasses={[
              CoreClasses.WIDTH.W_50,
              CoreClasses.HEIGHT.MAX_VH_50,
              CoreClasses.POSITION.POSITION_RELATIVE,
              CoreClasses.OVERFLOW.OVERFLOW_AUTO,
              CoreClasses.BG.BG_SECONDARY,
            ]}
            subheader={<CoreList disablePadding />}
            disablePadding
          >
            {[0, 1, 2, 3, 4].map((sectionId) => (
              <CoreList key={`section-${sectionId}`} disablePadding>
                <CoreListSubheader
                  styleClasses={[CoreClasses.BG.BG_SECONDARY]}
                >{`I'm sticky ${sectionId}`}</CoreListSubheader>
                {[0, 1, 2].map((item) => (
                  <CoreListItem key={`item-${sectionId}-${item}`}>
                    <CoreListItemText primary={`Item ${item}`} />
                  </CoreListItem>
                ))}
              </CoreList>
            ))}
          </CoreList>
        }
      />

      {/* Inset List item */}
      <CodeSample
        title={"Inset List Item"}
        description={
          <>
            The <code>inset</code> prop enables a list item that does not have a
            leading icon or avatar to align correctly with items that do.
          </>
        }
        code={`<CoreList styleClasses={[CoreClasses.BG.BG_SECONDARY]}>
<CoreListItem disablePadding>
	<CoreListItemButton>
		<CoreListItemIcon>
			<CoreIcon>star</CoreIcon>
		</CoreListItemIcon>
		<CoreListItemText primary="Chelsea Otakan" />
	</CoreListItemButton>
</CoreListItem>
<CoreListItem disablePadding>
	<CoreListItemButton>
		<CoreListItemText inset primary="Eric Hoffman" />
	</CoreListItemButton>
</CoreListItem>
</CoreList>`}
        renderElement={
          <CoreList styleClasses={[CoreClasses.BG.BG_SECONDARY]}>
            <CoreListItem disablePadding>
              <CoreListItemButton>
                <CoreListItemIcon>
                  <CoreIcon>star</CoreIcon>
                </CoreListItemIcon>
                <CoreListItemText primary="Chelsea Otakan" />
              </CoreListItemButton>
            </CoreListItem>
            <CoreListItem disablePadding>
              <CoreListItemButton>
                <CoreListItemText inset primary="Eric Hoffman" />
              </CoreListItemButton>
            </CoreListItem>
          </CoreList>
        }
      />

			{/* Gutterless List */}
      <CodeSample
        title={"Gutterless List"}
        description={
          <>
            When rendering a list within a component that defines its own
            gutters, ListItem gutters can be disabled with disableGutters.
          </>
        }
        code={`<CoreList
styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.BG.BG_SECONDARY]}
>
	{[1, 2, 3].map((value) => (
		<CoreListItem
			key={value}
			disableGutters
			secondaryAction={
				<CoreIconButton >
					<CoreIcon>comment</CoreIcon>
				</CoreIconButton>
			}
		>
			<CoreListItemText primary={\`Line item \${value}\`} />
		</CoreListItem>
	))}
</CoreList>`}
        renderElement={
          <CoreList
						styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.BG.BG_SECONDARY]}
          >
            {[1, 2, 3].map((value) => (
              <CoreListItem
                key={value}
                disableGutters
                secondaryAction={
                  <CoreIconButton >
                    <CoreIcon>comment</CoreIcon>
                  </CoreIconButton>
                }
              >
                <CoreListItemText primary={`Line item ${value}`} />
              </CoreListItem>
            ))}
          </CoreList>
        }
      />

			{/* VIRTUALIZED LIST AND CUSTOMIZATION NOT WRITTEN */}
    </>
  );
}
