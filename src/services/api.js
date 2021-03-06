export async function fetchVoteList() {
  const url = 'http://localhost:3000/voteList';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchMenuList() {
  const url = 'http://localhost:3000/voteList';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchUsers() {
  const url = 'http://localhost:3000/users';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchUser(userId) {
  const url = `http://localhost:3000/users/${userId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function updateVoteId({ userId, voteId }) {
  const url = `http://localhost:3000/users/${userId}`;
  await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ voteId }),
  });
}
