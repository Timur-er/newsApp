import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchNewsByCategory, NewsArticle } from "../api/newsAPI";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Button,
    CircularProgress,
    Alert,
} from "@mui/material";

const NewsList: React.FC = () => {
    const { category } = useParams<{ category: string }>();
    const [news, setNews] = useState<NewsArticle[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadNews = async () => {
            try {
                setLoading(true);
                setError(null);
                if (category) {
                    const articles = await fetchNewsByCategory(category);
                    setNews(articles);
                }
            } catch (err) {
                setError("Failed to fetch news. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        loadNews();
    }, [category]);

    if (loading) {
        return (
            <Box
                sx={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "linear-gradient(135deg, #1e88e5, #42a5f5)",
                    color: "white",
                }}
            >
                <CircularProgress color="inherit" />
            </Box>
        );
    }

    if (error) {
        return (
            <Box
                sx={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "linear-gradient(135deg, #1e88e5, #42a5f5)",
                }}
            >
                <Alert severity="error" sx={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
                    {error}
                </Alert>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                minHeight: "100vh",
                p: 4,
                background: "linear-gradient(135deg, #1e88e5, #42a5f5)",
                color: "white",
            }}
        >
            <Typography
                variant="h4"
                gutterBottom
                sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "white",
                    mb: 4,
                    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
                }}
            >
                {category?.toUpperCase()} News
            </Typography>
            <Grid container spacing={4}>
                {news.map((article, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                height: "100%", // Растягиваем карточки до одинакового размера
                                display: "flex",
                                flexDirection: "column",
                                borderRadius: "16px",
                                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                                overflow: "hidden",
                                transition: "transform 0.3s",
                                "&:hover": {
                                    transform: "scale(1.03)",
                                },
                            }}
                        >
                            {article.urlToImage ? (
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={article.urlToImage}
                                    alt={article.title}
                                />
                            ) : (
                                <Box
                                    sx={{
                                        height: "180px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "#f0f0f0",
                                        color: "#888",
                                        fontSize: "14px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    No Image Available
                                </Box>
                            )}
                            <CardContent
                                sx={{
                                    flex: "1 1 auto", // Расширяем контент, чтобы карточки были одинаковыми
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    sx={{
                                        fontWeight: "bold",
                                        color: "#1e88e5",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {article.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        mb: 2,
                                        color: "#616161",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 3, // Показываем максимум 3 строки
                                        WebkitBoxOrient: "vertical",
                                    }}
                                >
                                    {article.description || "No description available"}
                                </Typography>
                                <Link
                                    to={`/article/${index}`}
                                    state={{ article }}
                                    style={{ textDecoration: "none", marginTop: "auto" }}
                                >
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#1e88e5",
                                            color: "white",
                                            "&:hover": { backgroundColor: "#1565c0" },
                                        }}
                                    >
                                        Read More
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default NewsList;
