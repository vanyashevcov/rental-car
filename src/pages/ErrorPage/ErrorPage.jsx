import { NavLink } from 'react-router-dom';
import styles from './ErrorPage.module.css'

function ErrorPage() {
  return (
    <div className={styles.errorContainer}>
      <p>404</p>
      <h1>Page not found</h1>
      <p>Sorry, the page you are looking for could not be found.</p>
      <div>
        <NavLink to="/" className="primaryButton">
          Return Home
        </NavLink>
      </div>
    </div>
  );
}

export default ErrorPage;