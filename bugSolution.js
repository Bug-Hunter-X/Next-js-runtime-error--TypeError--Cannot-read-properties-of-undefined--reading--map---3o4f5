```javascript
// pages/index.js
export async function getServerSideProps() {
  // Simulate an API call that might fail
  const data = await fetch('https://api.example.com/data')
    .then((res) => res.json())
    .catch(() => null);

  return {
    props: {
      items: data?.items || [],
    },
  };
}

export default function Home({ items }) {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <ul>
        {items?.map((item) => (
          <li key={item.id}>{item.name}</li>
        )) || <p>No items found.</p>}
      </ul>
    </div>
  );
}
```