import {
  fetchVoteList,
  fetchMenuList,
  fetchUsers,
  fetchUser,
  updateVoteId,
} from './api';

import VOTELIST from '../../fixtures/voteList';
import MENULIST from '../../fixtures/menuList';
import USERS from '../../fixtures/users';
import USER from '../../fixtures/user';

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() { return data; },
    });
  };

  describe('fetchVoteList', () => {
    beforeEach(() => {
      mockFetch(VOTELIST);
    });

    it('returns voteList', async () => {
      const voteList = await fetchVoteList();

      expect(voteList).toEqual(VOTELIST);
    });
  });

  describe('fetchMenuList', () => {
    beforeEach(() => {
      mockFetch(MENULIST);
    });

    it('returns menuList', async () => {
      const menuList = await fetchMenuList();

      expect(menuList).toEqual(MENULIST);
    });
  });

  describe('fetchUsers', () => {
    beforeEach(() => {
      mockFetch(USERS);
    });

    it('returns users', async () => {
      const users = await fetchUsers();

      expect(users).toEqual(USERS);
    });
  });

  describe('fetchUser', () => {
    beforeEach(() => {
      mockFetch(USER);
    });

    it('returns user', async () => {
      const userId = 'no1';
      const user = await fetchUser(userId);

      expect(user).toEqual(USER);
    });
  });

  describe('updateVoteId', () => {
    it('updates vote id', async () => {
      const userId = 'user1';
      const voteId = 'no1';
      const result = await updateVoteId({ userId, voteId });

      expect(result).toBeUndefined();
    });
  });
});
