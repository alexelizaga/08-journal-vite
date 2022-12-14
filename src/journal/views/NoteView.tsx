import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'

import { ImageGallery } from '../components'

export const NoteView = () => {
  return (
    <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 1 }}
    >
        <Grid item>
            <Typography
                fontSize={ 39 }
                fontWeight="light"
            >September 30, 2022</Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{ padding: 2 }}>
                <SaveOutlined sx={{ fontsize: 30, mr: 1 }}/>
                Save
            </Button>
        </Grid>

        <Grid container>
            <TextField
                type="text"
                variant="filled"
                fullWidth
                placeholder="New title"
                label="Title"
                sx={{ border: 'none', mb: 1 }}
            />
            <TextField
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="What happend today"
                label=""
                minRows={ 5 }
            />
        </Grid>

        <ImageGallery />

    </Grid>
  )
}
