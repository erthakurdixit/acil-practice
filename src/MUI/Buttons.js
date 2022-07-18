import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';


export default function ButtonGroups(props) {
  return (
    // direction type: direction="row" , direction="column"
    <Stack spacing={2} direction={props.direction}>
{/* types of variant: variant="Text" variant="Contained" variant="Outlined" */}
      <Button variant={props.variant}>{props.text1}</Button>
      <Button variant={props.variant}>{props.text2}</Button>
      <Button variant={props.variant}>{props.text3}</Button>
    </Stack>
  );
}

export function ButtonSingle(props) {
  return (<>
{/* types of variant: variant="Text" variant="Contained" variant="Outlined" */}
      <Button variant={props.variant} >{props.text}</Button>
  </>
  );
}

export function TextButtons() {
    return (
      <Stack direction="row" spacing={2}>
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
      </Stack>
    );
  }

  
  export  function IconLabelButtons(props) {
    return (
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
    );
  }