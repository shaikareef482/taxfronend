import "./new.css"

interface FooterProps {
    user: { firstName: string; email: string } | null;
    type?: "desktop" | "mobile";
    onLogout: () => Promise<void>;
  }
  
  const Footernew = ({ user, type = "desktop", onLogout }: FooterProps) => {
    const handleLogOut = async () => {
      const loggedOut = await onLogout();
    //   if (loggedOut) {
    //     // Replace with your desired navigation logic
    //     console.log("User logged out, navigate to sign-in page.");
    //   }
    };
  
    return (
      <footer className="footer d-flex align-items-center justify-content-between p-3 bg-light">
        {/* User Initials */}
        <div className={type === "mobile" ? "footer-name-mobile" : "footer-name"}>
          <p className="text-uppercase fw-bold text-primary mb-0">
            {user?.firstName?.[0] || ""}
          </p>
        </div>
  
        {/* User Information */}
        <div className={type === "mobile" ? "footer-email-mobile" : "footer-email"}>
          <h1 className="fs-6 fw-semibold text-dark mb-0">
            {user?.firstName || "Guest"}
          </h1>
          <p className="fs-6 text-secondary mb-0">{user?.email || "N/A"}</p>
        </div>
  
        {/* Logout Icon */}
        <div
          className="footer-image cursor-pointer"
          onClick={handleLogOut}
          style={{ cursor: "pointer" }}
        >
          <img src="icons/logout.svg" alt="logout icon" width="24" height="24" />
        </div>
      </footer>
    );
  };
  
  export default Footernew;