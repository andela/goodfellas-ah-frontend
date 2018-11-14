export const profile = {
  data: {
    error: false,
    data: {
      id: 1,
      username: 'akangbe',
      bio: 'here\'s my bio which I love',
      image: 'https://res.cloudinary.com/drmmqcxkc/image/upload/v1541770998/siue0ec27gazjujncvch.jpg',
      following: false,
      userId: 1,
      createdAt: '2018-11-09T10:50:57.187Z',
      updatedAt: '2018-11-09T13:43:58.950Z',
      user: {
        firstname: 'Afeez1', lastname: 'Awoyemi', email: 'damafeez11@gmail.com', role: 'User', notificationSettings: ['email', 'inApp'],
      },
    },
    message: 'Profile retrieved successfully',
  },
  status: 200,
};

export const followers = {
  data: {
    data: {
      followers: [{
        id: 1,
        followerId: 3,
        createdAt: '2018-11-11T23:42:00.689Z',
        updatedAt: '2018-11-11T23:42:00.689Z',
        follower: {
          firstname: 'Afeez',
          lastname: 'Awoyemi',
          email: 'damafeez@gmail.com',
          role: 'User',
          profile: {
            id: 3, username: null, bio: null, image: null, following: false, userId: 3, createdAt: '2018-11-10T14:06:28.897Z', updatedAt: '2018-11-10T14:06:28.897Z',
          },
        },
      }],
      followersCount: 1,
    },
    message: 'Retrieved followers',
  },
  status: 200,
};

export const followedUsers = {
  data: { data: { followedUsers: [], followedUsersCount: 0 }, message: 'Retrieved followed users' },
  status: 200,
};

export const articles = {
  data: {
    message: 'Articles gotten successfully!',
    articles: [{
      favorited: null, favoritesCount: null, id: 2, slug: 'this-is-a-fine-title-which-i-would-really-love-to-have', title: 'This is a fine title which I would really love to have', description: ' this is the fine long body  this is the fine long body ', body: 'This is the fine long body this is the fine long body  this is the fine long body  this is the fine long body  this is the fine long body ', image: null, tagList: null, read_time: '1 minute', averageRating: null, authorId: 1, createdAt: '2018-11-09T15:08:00.560Z', updatedAt: '2018-11-09T15:08:00.560Z', comments: [], reactions: [],
    }],
  },
  status: 200,
};

export const favoritedArticles = {
  data: { message: 'Articles gotten successfully!', articles: [] },
  status: 200,
};

export const updateProfile = {
  status: 200,
  data: {
    error: false,
    message: 'Profile updated Successfully',
    profile: {
      id: 1, username: 'akangbe', bio: 'here\'s my bio which I love', image: 'https://res.cloudinary.com/drmmqcxkc/image/upload/v1541770998/siue0ec27gazjujncvch.jpg', following: false, userId: 1, createdAt: '2018-11-09T10:50:57.187Z', updatedAt: '2018-11-09T13:43:58.950Z',
    },
  },
};

export const routes = {
  get: {
    '/user/profile/1': profile,
    '/user/followers/1': followers,
    '/user/followed/1': followedUsers,
    '/articles/author/1': articles,
    '/articles/user/1/favorite': favoritedArticles,
  },
  put: {
    '/user/profile/1': updateProfile,
  },
};

export const setProfile = [profile, followers, followedUsers, articles, favoritedArticles];
