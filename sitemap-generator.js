import Sitemap from 'react-router-sitemap';
// Import your React Router routes configuration (replace with your actual setup)
import routes from './src/App'; // Assuming your routes are defined in AppRoutes.js

function generateSitemap() {
  return new Sitemap(routes)
    .build('https://esuoladaniel.com') // Replace with your base URL
    .save('./public/sitemap.xml');
}

generateSitemap();
