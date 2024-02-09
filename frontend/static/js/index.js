'use strict'

const router = async () => {
    const routes = [
        {path: '/', view: () => console.log('viewing dashboard')},
        {path: '/posts', view: () => console.log('viewing posts')},
        {path: '/settings', view: () => console.log('viewing settings')},
    ]

    // Test each root for potential match
}