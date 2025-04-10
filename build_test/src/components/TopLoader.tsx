
import NextTopLoader from 'nextjs-toploader';

const TopLoader = () => {
  return (
    <NextTopLoader
      color="#2b71f0"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={200}
    />
  );
}

export default TopLoader