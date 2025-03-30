import {Box, Card, CardContent, Grid2, Typography} from "@mui/material";

const menuItems = [
    {name: "Sushi Platter", price: "$25"},
    {name: "Salmon Nigiri", price: "$12"},
    {name: "Tuna Roll", price: "$10"},
    {name: "Miso Soup", price: "$5"},
    {name: "New", price: "$234"},
];

export default function Menu() {
    return (
        <Box>
            <Typography variant="h3" gutterBottom>
                Our Menu
            </Typography>
            <Grid2 container spacing={2}>
                {menuItems.map((item, index) => (
                    <Grid2 key={index} {...{xs: 12, sm: 6, md: 4}}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">{item.name}</Typography>
                                <Typography color="text.secondary">{item.price}</Typography>
                            </CardContent>
                        </Card>
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
}
