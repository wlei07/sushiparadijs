import {Box, Container, Typography} from "@mui/material";

export default function OverUs() {
    return (
        <Box py={6}>
            <Container maxWidth="md">
                <Typography variant="h4" gutterBottom textAlign="center">
                    Over Ons
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                    Bij Sushi Paradijs draait alles om kwaliteit, versheid en gastvrijheid.
                    Wij geloven dat sushi niet alleen een maaltijd is, maar een beleving.
                    Onze chefs bereiden elke rol met passie en precisie, gebruikmakend van
                    zorgvuldig geselecteerde ingrediënten.
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                    Of je nu een doorgewinterde sushiliefhebber bent of net begint,
                    ons menu biedt voor ieder wat wils. Kom langs en ervaar zelf waarom
                    Sushi Paradijs een favoriet is onder fijnproevers.
                </Typography>
            </Container>
        </Box>
    );
}
