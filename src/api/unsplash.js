import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 0ij09alIdtXcqNK8bQ8Bmxuopn956qw0BMOrmQqwwjQ',
  },
});
