import { createMocks } from 'node-mocks-http'
import hello from 'pages/api/hello'

describe('/api/hello', () => {
  it('returns a json object with name', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      query: {},
    })

    await hello(req, res)

    expect(res._getStatusCode()).toBe(200)
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        name: 'John Doe',
      }),
    )
  })
})
