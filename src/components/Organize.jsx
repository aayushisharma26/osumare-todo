import { useEffect, useState } from "react";
import organimage from "../assets/organizeimage.png";

export function Organize() {
    const [submittedData, setSubmittedData] = useState(null);

    useEffect(() => {
        const handleSignup = (e) => {
            console.log("Organize received signup data:", e.detail);
            setSubmittedData(e.detail);
        };

        window.addEventListener("user-signup", handleSignup);
        return () => window.removeEventListener("user-signup", handleSignup);
    }, []);

    return (
        <div className="organize-main">
            <div className="organize-image">
                <img src={organimage} alt="Organize Visual" className="organize-main-img" />
            </div>
            <div className="organize-content">
                <div className="organize-text">Start Organizing Your <br /> Life Today</div>
                <div className="organize-subtext">
                    Join us now and transform your productivity with our intuitive to-do <br /> list platform!
                </div>
                <div className="orgainze-but">
                    <div className="organize-but1">
                        <button className="organize-butn1">Sign Up</button>
                    </div>
                    <div className="organize-but2">
                        <button className="organize-butn2">Learn More</button>
                    </div>
                </div>
            </div>
            {submittedData && (
    <div className="table-container">
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Gender</th>
          <th>Language</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox" /></td>
          <td data-label="Name">{submittedData.name}</td>
          <td data-label="Gender">{submittedData.gender}</td>
          <td data-label="Language">{submittedData.language}</td>
          <td data-label="Email">{submittedData.email}</td>
        </tr>
      </tbody>
    </table>
  </div>
)}
        </div>
    );
}
