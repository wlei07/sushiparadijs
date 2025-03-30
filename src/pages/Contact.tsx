import {Box, Button, TextField, Typography} from "@mui/material";

export default function Contact() {
    return (
        <Box>
            <Typography variant="h3" gutterBottom>
                Contact Us
            </Typography>
            <TextField fullWidth label="Your Name" margin="normal" />
            <TextField fullWidth label="Your Email" margin="normal" />
            <TextField fullWidth label="Message" multiline rows={4} margin="normal" />
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Send Message
            </Button>
        </Box>
    );
}
