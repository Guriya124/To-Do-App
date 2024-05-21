import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ListCard({ title, description, onReadMore, onUpdate, onDelete }) {

  
  return (
    <div className='container mx-auto mt-10'>

    <Card sx={{ minWidth: 275, maxWidth: 350 }}>
      <CardContent>
        <Typography variant="h4" component="div">
          {title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onReadMore}>Read More</Button>
        <Button size="small" onClick={onUpdate}>Update</Button>
        <Button size="small" onClick={onDelete}>Delete</Button>
      </CardActions>
      </Card>
    </div>
  )
}