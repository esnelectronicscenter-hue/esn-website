import './UserActions.css';

function UserActions() {
  return (
    <div className="actions-block single-mode">
      {/* أيقونة تسجيل الدخول / الملف الشخصي */}
      <button className="icon-btn login-btn" aria-label="تسجيل الدخول">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </button>
    </div>
  );
}

export default UserActions;