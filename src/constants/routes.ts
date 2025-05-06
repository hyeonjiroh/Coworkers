type NumericString = `${number}`;
type groupId = number | NumericString;
type taskId = number | NumericString;
type articleId = number | NumericString;

export const ROUTES = {
  HOME: '/',

  LOGIN: '/login',
  LOGIN_KAKAO: '/oauth/login/kakao',
  SIGNUP: '/signup',
  SIGNUP_KAKAO: '/oauth/signup/kakao',
  PASSWORD_RESET: '/reset-password',

  MYPAGE: '/mypage',
  MYHISTORY: '/myhistory',

  TEAM: (groupId: groupId) => `/team/${groupId}`,
  TEAM_EDIT: (groupId: groupId) => `/team/${groupId}/edit`,
  TEAM_NO: '/no-team',
  TEAM_ADD: '/add-team',
  TEAM_JOIN: '/join-team',

  TASK: (groupId: groupId) => `/team/${groupId}/tasklist`,
  TASK_DETAIL: (groupId: groupId, taskId: taskId) =>
    `/team/${groupId}/task/${taskId}`,

  BOARDS: '/boards',
  ARTICLE: (articleId: articleId) => `/article/${articleId}`,
  ARTICLE_ADD: '/article/add-article',
};
