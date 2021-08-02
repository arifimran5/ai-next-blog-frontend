const production = process.env.NODE_ENV === 'production';

export const url = production
  ? 'https://ai-next-blog.herokuapp.com'
  : 'http://localhost:1337';
