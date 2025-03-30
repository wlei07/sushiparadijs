import {Box, Button, Card, CardContent, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <Box textAlign="center">
            <Typography variant="h3" gutterBottom>
                Welcom to Sushi Paradijs 🍣
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
                Enjoy the finest sushi experience with fresh ingredients and authentic flavors.
            </Typography>
            <Button variant="contained" color="secondary" component={Link} to="/menu">
                View Menu
            </Button>
            <Box display="flex" justifyContent="center" gap={2} mt={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography variant="h5">Fresh Ingredients</Typography>
                        <Typography color="text.secondary">
                            We source the highest quality fish and produce for an unforgettable taste.
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography variant="h5">Cozy Atmosphere</Typography>
                        <Typography color="text.secondary">
                            Experience a warm and welcoming dining environment.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
}
