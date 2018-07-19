import $fetch from './index'
const BASE_URL = 'http://localhost:8081'
export const createArticle = (data) => $fetch(`${BASE_URL}/api/create_hat`, data, 'POST')

export const getList = (data) => $fetch(`${BASE_URL}/api/create_hat?${data}`)

export const getArticle = (data) => $fetch(`${BASE_URL}/api/create_hat/${data}`)

export const createComment = (data) => $fetch(`${BASE_URL}/api/comment`, data, 'POST')

export const getCommentList = (data) => $fetch(`${BASE_URL}/api/comment?${data}`)