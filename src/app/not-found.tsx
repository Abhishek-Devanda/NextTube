import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>
        You can return to the <Link href="/" style={{ color: '#0070f3', textDecoration: 'none' }}>Homepage</Link>.
      </p>
      {/* You can add a relevant image or SVG here if you like */}
      {/* Example: <img src="/path-to-your-not-found-image.svg" alt="Not Found" style={{ maxWidth: '300px', marginTop: '20px' }} /> */}
    </div>
  );
};

export default NotFoundPage;