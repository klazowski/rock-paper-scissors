import express from 'express';
import path from 'path';

const app: express.Application = express();

app.use(express.json());

// Static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  const root: string = path.resolve(__dirname, 'client', 'build');
  app.use(express.static(root));
  app.get('*', (request, response) => {
    response.sendFile('index.html', { root });
  });
}

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
