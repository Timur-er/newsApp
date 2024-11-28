import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

interface Article {
  title: string;
  description: string | null;
  content: string | null;
  url: string;
  urlToImage: string | null;
}

interface LocationState {
  article: Article;
}

const ArticlePage: React.FC = () => {
  const location = useLocation();
  const { article } = location.state as LocationState;

  const saveArticleToFile = async () => {
    try {
      const fileName = `${article.title.replace(/[^a-zA-Z0-9]/g, '_')}.txt`; // Генерация имени файла
      const fileContent = `
        Title: ${article.title}
        Description: ${article.description || 'No description'}
        Content: ${article.content || 'No content'}
        URL: ${article.url}
      `;

      await Filesystem.writeFile({
        path: fileName,
        data: fileContent,
        directory: Directory.Documents, // Сохраняем в папке "Documents"
        encoding: Encoding.UTF8,
      });

      alert('Article saved successfully!');
    } catch (error) {
      console.error('Error saving the file', error);
      alert('Failed to save the article.');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1e88e5, #42a5f5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 4,
        color: 'white',
      }}
    >
      <Card
        sx={{
          maxWidth: '800px',
          width: '100%',
          borderRadius: '16px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
          overflow: 'hidden',
          backgroundColor: 'white',
        }}
      >
        {article.urlToImage && (
          <CardMedia
            component="img"
            height="300"
            image={article.urlToImage}
            alt={article.title}
          />
        )}
        <CardContent sx={{ p: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: '#1e88e5',
              textAlign: 'center',
              mb: 2,
              textShadow: '1px 1px 5px rgba(0, 0, 0, 0.3)',
            }}
          >
            {article.title}
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              mb: 3,
              color: '#616161',
              lineHeight: '1.6',
              textAlign: 'justify',
            }}
          >
            {article.content || 'Content not available'}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: '#1e88e5',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#1565c0',
                },
              }}
            >
              Read Full Article
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={saveArticleToFile}
              sx={{
                backgroundColor: '#ff5722',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#e64a19',
                },
              }}
            >
              Save Article
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ArticlePage;
