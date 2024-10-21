export async function GET() {
  return new Response(
    JSON.stringify([
      {
        date: '1985-07-03T00:00:00',
        venue: 'Wembley Stadium',
      },
      {
        date: '1988-06-25T00:00:00',
        venue: 'Wembley Stadium',
      },
    ])
  )
}
