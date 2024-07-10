import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const usePageViews = () => {
  const location = useLocation();
  
  useEffect(() => {
    try {
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
      console.log(`Page view tracked: ${location.pathname}${location.search}`); // デバッグログ
    } catch (error) {
      console.error('Error tracking page view:', error); // エラーログ
    }
  }, [location]);
};

export default usePageViews;
