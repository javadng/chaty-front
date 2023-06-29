// export const SOCKET_URL = process.env.SOCKET_URL || 'http://localhost:3001';
export const SOCKET_URL = 'http://localhost:3001';
// export const SOCKET_URL = 'https://chat-backend.iran.liara.run';
// https://chat-backend.iran.liara.run
export const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001/api/v1'
    : 'https://chat-backend.iran.liara.run/api/v1';
