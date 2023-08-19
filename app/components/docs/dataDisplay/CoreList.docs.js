import React, {useState} from 'react';

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
	CoreListItemButton,
	CoreCollapse,
	CoreListItemAvatar,
	CoreAvatar,
	CoreListSubheader,
} from "@wrappid/core";

import CodeSample from "../CodeSample";

export default function CoreListDocs() {

	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<>
			<CoreH5 styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]}>CoreList</CoreH5>

			<CoreTypographyBody1>Lists are continuous, vertical indexes of text or images.</CoreTypographyBody1>

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
				code={`<CoreList subheader={<CoreListSubheader>Nested List Items</CoreListSubheader>}
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
					<CoreList subheader={<CoreListSubheader>Nested List Items</CoreListSubheader>}
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
		<CoreAvatar src={"https://mui.com/static/images/avatar/1.jpg"} />
	</CoreListItemAvatar>
	<CoreListItemText primary="Photos" secondary="Jan 9, 2014" />
</CoreListItem>
<CoreListItem>
	<CoreListItemAvatar>
		<CoreAvatar src={"https://mui.com/static/images/avatar/2.jpg"} />
	</CoreListItemAvatar>
	<CoreListItemText primary="Work" secondary="Jan 7, 2014" />
</CoreListItem>
<CoreListItem>
	<CoreListItemAvatar>
		<CoreAvatar src={"https://mui.com/static/images/avatar/3.jpg"} />
	</CoreListItemAvatar>
	<CoreListItemText primary="Vacation" secondary="July 20, 2014" />
</CoreListItem>
</CoreList>`}
				renderElement={
					<CoreList styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.BG.BG_SECONDARY]}>
						<CoreListItem>
							<CoreListItemAvatar>
								<CoreAvatar src={"https://mui.com/static/images/avatar/1.jpg"} />
							</CoreListItemAvatar>
							<CoreListItemText primary="Photos" secondary="Jan 9, 2014" />
						</CoreListItem>
						<CoreListItem>
							<CoreListItemAvatar>
								<CoreAvatar src={"https://mui.com/static/images/avatar/2.jpg"} />
							</CoreListItemAvatar>
							<CoreListItemText primary="Work" secondary="Jan 7, 2014" />
						</CoreListItem>
						<CoreListItem>
							<CoreListItemAvatar>
								<CoreAvatar src={"https://mui.com/static/images/avatar/3.jpg"} />
							</CoreListItemAvatar>
							<CoreListItemText primary="Vacation" secondary="July 20, 2014" />
						</CoreListItem>
					</CoreList>
				}
			/>

			{/* Interactive */}
			{/* <CodeSample
				title={"Interactive"}
				description={<>Below is an interactive demo that lets you explore the visual results of the different settings:</>}
				code={``}
				renderElement={
					
				}
			/> */}

			{/*  */}
		</>
	);
}