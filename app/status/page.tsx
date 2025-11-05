
export default async function Status() {
  const res = await fetch('/api/ping', { cache: 'no-store' })
  const data = await res.json().catch(() => ({ ok: false }))
  return (
    <pre style={{padding: '2rem', whiteSpace: 'pre-wrap'}}>
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}
