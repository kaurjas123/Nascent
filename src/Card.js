import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const card = (data)=>{
    return(
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
      {data.name}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      {data.type}
      </Typography>
      <Typography variant="body2">
      {data.description}
      </Typography>
      <Typography variant="body2">
      Client Id = {data.clientId}
      </Typography>
    </CardContent>
  </React.Fragment>)
}

export default function OutlinedCard({treeViewData}) {
  return (
      treeViewData ? <Box sx={{ minWidth: 275, marginTop :10 }}>
      <Card variant="outlined">{card(treeViewData)}</Card>
    </Box> : null
   
  );
}