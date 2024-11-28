import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Grid, Typography, Paper } from "@mui/material";

const categories: string[] = ["business", "entertainment", "health", "science", "sports", "technology"];

const HomePage: React.FC = () => (
    <Box
        sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(135deg, #1e88e5, #42a5f5)",
            color: "white",
            textAlign: "center",
            overflow: "hidden",
        }}
    >
        <Paper
            elevation={6}
            sx={{
                p: 4,
                borderRadius: "16px",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                maxWidth: "600px",
                width: "90%",
            }}
        >
            <Typography variant="h4" gutterBottom sx={{ color: "#1e88e5", fontWeight: "bold" }}>
                Explore News Categories
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ mb: 3, color: "#757575" }}>
                Stay updated with the latest news. Choose a category and dive in!
            </Typography>
            <Grid container spacing={2}>
                {categories.map((category) => (
                    <Grid item xs={12} sm={6} key={category}>
                        <Link to={`/category/${category}`} style={{ textDecoration: "none" }}>
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    backgroundColor: "#42a5f5",
                                    color: "white",
                                    "&:hover": { backgroundColor: "#1e88e5" },
                                    borderRadius: "8px",
                                    fontWeight: "bold",
                                }}
                            >
                                {category.toUpperCase()}
                            </Button>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    </Box>
);

export default HomePage;
