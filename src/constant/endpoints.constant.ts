const ENDPOINTS = {
    AUTH: {
        LOGIN: '/auth/login',
        REGISTER: '/auth/register'
    },
    ARTICLE: {
        GET_ALL: 'articles',
        UPDATE: 'articles/:id',
        DELETE: 'articles/:id',
        DETAIL: 'articles/:id',
        DETAIL_SSR: 'articles',
        CREATE: 'articles',
    },
    CATEGORIES: {
        GET_ALL: '/categories',
        CREATE: '/categories',
        UPDATE: '/categories/:id',
        DELETE: '/categories/:id',
    }
}

export default ENDPOINTS