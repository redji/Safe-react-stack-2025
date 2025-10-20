import { http, HttpResponse } from 'msw'

export const handlers = [
  // Mock posts API
  http.get('https://jsonplaceholder.typicode.com/posts', () => {
    return HttpResponse.json([
      {
        id: 1,
        title: 'Test Post 1',
        body: 'This is a test post body',
        userId: 1,
      },
      {
        id: 2,
        title: 'Test Post 2',
        body: 'This is another test post body',
        userId: 2,
      },
    ])
  }),

  // Mock single post API
  http.get('https://jsonplaceholder.typicode.com/posts/:id', ({ params }) => {
    const { id } = params
    return HttpResponse.json({
      id: Number(id),
      title: `Test Post ${id}`,
      body: `This is test post ${id} body`,
      userId: Number(id),
    })
  }),
]
